const express = require('express')
const { getLogin } = require('../../controllers/login/login')

const router = express.Router()

router.route('/')
    .get(getLogin)

module.exports = router
    