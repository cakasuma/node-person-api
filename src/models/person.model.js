let mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}/${process.env.DB_DATABASE}`)

let PersonSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: String,
})

module.exports = mongoose.model('Person', PersonSchema)