import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';
import { ST } from 'next/dist/shared/lib/utils';

interface IUser{
    _id: mongoose.Types.ObjectId
    name: string
    email: string
    passwaord: string
    mobile: string
    role: "user" | "deliveryboy" | "admin"
}

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    moblie:{
        type: String,
        required: false
    },
    role:{
        type: String,
        enum: ["user", "deliveryboy", "admin"],
        default: "user"
    }

},{timestamps:true})

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

