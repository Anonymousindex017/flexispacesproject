const { model, Schema } = require('../connection');

const mySchema = new Schema({
    location: String,
    duration: String,
    furniture : String,
    services : String,
    coupon : String
});

module.exports = model('booking', mySchema);