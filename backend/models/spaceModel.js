const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    loaction : String,
    area : String,
    time : String,
     price : String,
     service : String
});

module.exports= model('space', mySchema);