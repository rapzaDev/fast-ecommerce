import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: { 
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true } // createdAt and UpdatedAt 
);

const teste = mongoose.model("User", UserSchema);

export default teste;
// export default mongoose.model<IUser>("User", UserSchema);