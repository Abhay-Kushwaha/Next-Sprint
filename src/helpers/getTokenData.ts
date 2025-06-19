import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function getTokenData(request: NextRequest) {
    try {
        const token = request.cookies.get('token')?.value || "";
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET || "");
        return decodedToken.userId;
    }
    catch (error) {
        console.error("Error getting token data:", error);
        return null;
    }
}