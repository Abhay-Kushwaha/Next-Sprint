import { getTokenData } from "@/helpers/getTokenData";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await getTokenData(request);
        const user = await User.findById(userId).select("-password"); 
        console.log(user);
        return NextResponse.json({
            message: "User Found",
            data: user,
        });
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
};