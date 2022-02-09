const express = require('express')
const { jwtProtect } = require('../../middlewares/auth')
const {
    getPost,
    updatePost,
    createPost,
    deletePost,
    getPosts
} = require('../../controllers/posts/posts')

const router = express.Router()

router.route('/')
    .get(getPosts)
    .post(jwtProtect, createPost)

router.route('/:id')
    .get(getPost)
    .put(jwtProtect, updatePost)
    .delete(jwtProtect, deletePost)

module.exports = router
