import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import User from "./models/user.model";

export const{handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            credentials:{
                email: {label: "email", type: "email"},
                password: {label: "password", type: "password"},
            },
            async authorize(credentials, request){
                
                    await connectDB();
                    const email = credentials.email
                    const password = credentials.password as string
                    const user = await User.findOne({email})
                    if(!user){
                        throw new Error("no user found")
                    }
                    const isMatch = await bcrypt.compare(password, user.password)
                    if(!isMatch){
                        throw new Error("invalid password")
                    }
                    return {
                        id:user._id,
                        email: user.email,
                        name: user.name,
                        

                    }
                
            },
        })
    ],
})




