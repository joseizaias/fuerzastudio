const ErrorResponse = require('../../helpers/errorResponse')
const asyncHandler = require('../../middlewares/async')
const user = require('../../models/user')
const jwt = require('jsonwebtoken')

/// #desc:  Get the only one user to simulate JWT. It is a variable user, but it can be reading from a database.
/// @route GET /api/login
exports.getLogin = asyncHandler(async (req, res, next) => {
    jwt.sign({ user: user}, process.env.JWT_SECRET, { expiresIn: '90s'}, (err, token) => {
        res.json({
            token
        })
    })
})
