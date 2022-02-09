const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Please add a title'], 
        unique: true, 
        trim: true, 
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    body: {
        type: String,
        required: [true, 'Please add a body'],
        maxlength: [100, 'Body cannot be more than 100 characters']
    },
    tags: [{
        type: String
    }]
})

module.exports = mongoose.model('Post', postSchema)
