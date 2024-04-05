const { model, Schema } = require('../connection');

const mySchema = new Schema({
    spaceFor: Selection,
    person: Selection,
    services : Selection,
});

module.exports = model('bookingcard', mySchema);