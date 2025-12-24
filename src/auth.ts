import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const{handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            credentials:{
                email: {label: "email", type: "email"},
                password: {label: "password", type: "password"},
            },

        })
    ],
})




