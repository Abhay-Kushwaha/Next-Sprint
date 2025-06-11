import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;

        // if user exist
        const user = await User.findOne({ email });
        if (user) {
            // check password
            const isPwdValid = await bcrypt.compare(password, user.password);
            if (!isPwdValid) {
                return NextResponse.json({ error: "Invalid password" }, { status: 400 });
            }

            // token data
            const tokenData = {
                userId: user._Id,
                email: user.email,
                name: user.name
            }
            // Set token in cookies
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
                expiresIn: "1d"
            });

            // User found and password is valid
            const response = NextResponse.json({
                message: "User Logged in Successfully",
                success: true,
            });

            response.cookies.set("token", token, {
                httpOnly: true
            })
            return response;
        }

    }
    catch (error: any) {
        alert("Error Searching User");
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}