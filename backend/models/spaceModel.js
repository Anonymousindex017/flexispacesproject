const { model, Schema } = require('../connection');

const mySchema = new Schema({
    location: String,
    category: String,
    area: Number,
    duration: String,
    price: String,
    services: Array
});

module.exports = model('space', mySchema);