const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    email : String,
    password: Number,
    cpassword: Number,
    

});

module.exports= model('PostCollection', mySchema);