let mongoose = require('mongoose')

const server = 'ds137605.mlab.com:37605'
const database = 'persondb'
const user = 'cakasuma'
const password = 'cakasuma15951'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

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