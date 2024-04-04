const { model, Schema } = require('../connection');

const mySchema = new Schema({
    category: String,
    location: String,
    city: String,
    state: String,
    area:Number,
    price:Number,
});

module.exports = model('space', mySchema);