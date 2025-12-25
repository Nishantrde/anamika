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
                        role: user.role

                    }
                
            },
        }),

    ],
    callbacks:{
        //adds user info to session
        jwt({token, user}){
            if(user){
                token.id = user.id,
                token.name = user.name,
                token.email = user.email,
                token.role = user.role
            }
            return token
        },
        session(){
            
        }

    }
})




