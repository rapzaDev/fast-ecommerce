import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        img: { 
            type: String, required: true 
        },
        price: { 
            type: Number, required: true 
        },
    },
    { timestamps: true } // createdAt and UpdatedAt 
);

export default mongoose.model("Product", ProductSchema);