const { where } = require("sequelize");
var db =  require("../models/");
var User = db.user;
var addUser = async (req,res) => {
    const demo =  User.build({ username: 'ashiq' , password: 'ashiq'});
    await demo.save();

console.log(demo.name); // "Jane"
res.status(200).json(demo.toJSON());
}

var getUser = async (req,res) => {
    const data = await User.findOne({
        where:{
            username:req.params.username
        }
    })
    console.log(data.toJSON());
    res.status(200).json(data.toJSON())
}

module.exports={addUser, getUser}