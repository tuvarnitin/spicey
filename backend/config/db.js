import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nitintuvar2003:9896616446@cluster0.0fvy9uo.mongodb.net/food-delivery')
        .then(() => {
            console.log("DB connected")
        })
}