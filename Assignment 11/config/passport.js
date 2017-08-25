const passport = require('passport');
const Strategy = require('passport-local').Strategy
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');
const Webmaster = require('../models/Webmaster');
const Admin = require('../models/Admin');
passport.use('user',new Strategy(function(username, password, done){
    User.findOne({username:username},function(err,user){
        if(err) return done(err);
        if(!user){
            return done(null,false);
        }
        if(!user.comparePassword(password)){
            return done(null,false);
        }
        return done(null,user);
    });
}));



passport.use('webmaster',new Strategy((username,password,done) =>{
    Webmaster.findOne({username:username},(err,webmaster)=> {
        if(err) {return done(err)}
        if(!webmaster){
            return done(null,false);
        }
        if(!webmaster.comparePassword(password)){
            return done(null,false);
        }
        return done(null,webmaster);
    })
}))



passport.use('admin',new Strategy((username,password,done) =>{
    Admin.findOne({username:username},(err,admin)=> {
        if(err) {return done(err)}
        if(!admin){
            return done(null,false);
        }
        if(!admin.comparePassword(password)){
            return done(null,false);
        }
        return done(null,admin);
    })
}))



//passport Serialization
passport.serializeUser(function(user,done){
    done(null,user._id);
});

//passport Deserialize
passport.deserializeUser(function(id,done){

    User.findById(id,function(err,user){

        if(err) return done(err);

        if(user){
            done(null,user);
        }

        else{
            Webmaster.findById(id,function(err,user){

                if(err) return done(err);

                if(user){
                    done(null,user);
                }

                else{
                    Admin.findById(id,function(err,user){

                        if(err) return done(err);

                        if(user){
                            done(null,user);
                        }

                    })
                }
            })
        }
    })

});

module.exports = passport;
