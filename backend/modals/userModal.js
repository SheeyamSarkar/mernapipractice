const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Add Your Name'],
        },
        email: {
            type: String,
            required: [true, 'Please Add An Email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please Add A Password'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User',userSchema)