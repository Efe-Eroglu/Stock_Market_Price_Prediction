const mongoose = require ("mongoose");

const UserSchema = mongoose.Schema(
    {
        name:{type:String, required:false},
        email:{type:String, required:false},
        password:{type:String, required:false}
    },
    {
        timestamps:true
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;