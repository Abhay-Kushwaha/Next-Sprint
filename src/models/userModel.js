import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true, "Please Provide a username"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please Provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Provide a password"],
        minlength: [6, "Password must be at least 6 characters long"],
    },
    isVarified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.Users || mongoose.model('Users', userSchema);

export default User;