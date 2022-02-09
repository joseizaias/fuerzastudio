const mongoose = require('mongoose')
const dotenv = require('dotenv')

/// Load env vars
dotenv.config({ path: './config/config.env' })

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log ( `MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB
