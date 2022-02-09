const ErrorResponse = require('../../helpers/errorResponse')
const asyncHandler = require('../../middlewares/async')
const Post = require('../../models/post')

/// #desc:  Get all posts
/// @route GET /api/posts
exports.getPosts = asyncHandler(async (req, res, next) => {
    let query
    
    /// Copy req.query
    const reqQuery = { ...req.query }

    /// Fields to exclude from req.query 
    const removeFields = [ 'page', 'limit' ]

    /// Loop over removeFields and delete them from reqQuery
    removeFields.forEach( param => delete reqQuery[param] )

    /// Create a query string
    let queryStr = JSON.stringify(req.query)

    /// Finding Resource
    query = Post.find(JSON.parse(queryStr))

    /// Pagination
    const page = parseInt(req.query.page, 10 ) || 1
    const limit = parseInt(req.query.limit, 10) || 25

    const startIndex = (page -1) * limit
    const endIndex = page * limit
    const total = await Post.countDocuments()

    query = query.skip(startIndex).limit(limit)

    /// Executing query
    const posts = await query

    /// Pagination result
    const pagination = {}

    if (endIndex < total) {
        pagination.next = {
            page: page +1,
            limit
        }
    }

    if (startIndex > 0) {
        pagination.prev = {
            page: page -1,
            limit
        }
    }

    res
    .status(200)
    .json({ sucess: true, count: posts.length, pagination, msg: 'Show all posts.', data: posts })
})


/// #desc: Get single post
/// @route GET /api/posts/:id
exports.getPost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById( req.params.id )

    if ( !post ) {
        return next(new ErrorResponse(`Post not found with id of ${req.params.id}`, 404))
    }

    res.status(200).json( { sucess: true, msg: `Show an expecific post ${ req.params.id }.`, data: post }) 
})


/// #desc:  Create new post
/// @route POST /api/posts
exports.createPost = asyncHandler( async (req, res, next) => {
    const post = await Post.create(req.body)

    res.status(201).json({
        sucess: true, 
        data: post,
        msg: 'Create a new post'
    })
            
})


/// #desc  Update a single post
/// @route PUT /api/posts/:id
exports.updatePost = asyncHandler( async (req, res, next) => {
    const post = await Post.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true } )

    if ( !post ) {
        return next(new ErrorResponse(`Post not found with id of ${req.params.id}`, 404))
    }

    res.status(200).json({ sucess: true, msg: `Update a post. ${ req.params.id }`, data: post }) 

})


/// #desc:  Delete or destroy a single post
/// @route DELETE /api/posts/:id
exports.deletePost = asyncHandler( async (req, res, next) => {
    const post = await Post.findByIdAndDelete( req.params.id )

    if ( !post ) {
        return next(new ErrorResponse(`Post not found with id of ${req.params.id}`, 404))
    }

    res.status(200).json( { sucess: true, msg: `Delete a post ${ req.params.id }.`, data: post } ) 
})
