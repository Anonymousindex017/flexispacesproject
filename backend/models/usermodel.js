const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    firstName : String,
    lastName : String,
    email : String,
    contact : String,
    password: String
});

module.exports= model('user', mySchema);