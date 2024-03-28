const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    title : String,
    user : String,
    postedAt : Date,
    description : String,
    Image : String,
    likes : {type : Number , default : 0},
    shares : {type :  Number ,default : 0 }

});

module.exports= model('PostCollection', mySchema);