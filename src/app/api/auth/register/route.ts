import connectDB from "@/lib/db";
import { connect } from "http2";
import { NextRequest } from "next/server";
import User from "@/models/user.model";

export async function POST(req:NextRequest){
    try {
        await connectDB()
        const {name, email, password} = await req.json()
        const existUser = await User.findOne({email})

    } catch (error){

    }
}


