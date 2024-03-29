const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    firstName : String,
    lastName : String,
    email: email,
    phoneNumber: Number,
    deatail : String,

});

module.exports= model('PostCollection', mySchema);