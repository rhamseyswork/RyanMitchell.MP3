import mongoose from "mongoose";

const signUpSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        required: true,
    },
},
{
    timestamps: true,
});

const SignUp = mongoose.model('SignUp', signUpSchema);

export default SignUp;