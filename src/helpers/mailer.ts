import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

export const sendEamil = async ({ email, emailType, userId }: any) => {
    try {
        const hashToken = await bcrypt.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600000 });
        }
        else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashToken, forgotPasswordTokenExpiry: Date.now() + 3600000 });
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.MailTrapUser,
                pass: process.env.MailTrapToken
            }
        });

        const mailOptions = {
            from: 'abhay369kumar@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
            html: `
                <h1>${emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"}</h1>
                <p>${emailType === "VERIFY" ? "Please click the link below to verify your email address:" : "Please click the link below to reset your password:"}</p>
                
                <a href="${process.env.domain}/verifyemail?token=${hashToken}">Click here</a> to ${emailType === "VERIFY" ? "verify" : "reset"} or copy paste the link in your browser: <br>

                <p>"${process.env.domain}/verifyemail?token=${hashToken}</p>
                
                <p>This link will expire in 1 hour.</p> `
        }

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;
    }
    catch (error: any) {
        throw new Error(`Error sending email: ${error.message}`);
    }

}
