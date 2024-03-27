const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    name : String,
    lname : String,
    email : String,
    contact : Number,
    password: Number,
    cpassword: Number,
    

});

module.exports= model('PostCollection', mySchema);