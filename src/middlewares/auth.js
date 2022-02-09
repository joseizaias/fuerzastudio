const jwt = require('jsonwebtoken')
const asyncHandler = require('./async')
const ErrorResponse = require('../helpers/errorResponse')
const user = require('../models/user')

/// Protect routes
exports.jwtProtect = asyncHandler(async (req, res, next) => {
    let token;

    if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    /// Certify that token exists
    if ( !token ) {
        return next(new ErrorResponse('Not authorize to access this route', 401))
    }

    try {
        /// check token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = user /// I am using just one Mock user. Normally, we need to search the user in a database.
                        ///      Something like: req.user = await User.findById(decoded.id)

        next() 
    } catch (err) {
        return next(new ErrorResponse('Not authorize to access this route', 401))
    }

})
