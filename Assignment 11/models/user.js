const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userModel = new Schema({
    username:{type: String,unique:true,lowercase:true},
    password: String,
    role:String
})

userModel.pre('save',function(next){
  const user = this;

  bcrypt.genSalt(10,function(err,salt){
    if(err) return next(err);
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) return next(err)
      user.password = hash;
      next();
    })
  })
})

userModel.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
    //Return either True or False
}

module.exports = mongoose.model('User',userModel);
