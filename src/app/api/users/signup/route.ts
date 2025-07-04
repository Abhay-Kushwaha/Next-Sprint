import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEamil } from "@/helpers/mailer";

connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { username, email, password } = reqBody;
        console.log("Received data:", reqBody);

        // check if user exist
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Save new User in DB
        const newUser= new User({
            username,
            email,
            password: hashedPassword,
        })
        const savedUser = await newUser.save();

        // Send Verification Email
        await sendEamil({
            email: savedUser.email, 
            emailType: "VERIFY",
            userId: savedUser._id
        });

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}