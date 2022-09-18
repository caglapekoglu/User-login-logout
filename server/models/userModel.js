import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        minlength:[8,"Email must be at least 8 characters."]
    },
    password:{
        type: String,
        required: true,
    },
    userType:{
        type: String,
        enum:['USER','ADMIN'],
        default:'USER'
    },
    phoneNumber:{
        type: String
    },
});

const User = mongoose.model('User',userSchema);


export default User;