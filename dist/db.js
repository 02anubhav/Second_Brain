import mongoose, { Schema, model } from "mongoose";
mongoose.connect("mongodb+srv://anubhavparaashar_db_user:g4q8gGh4AlcS4P5h@cluster0.vde23if.mongodb.net/second_brain");
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const contentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
export const userModel = model("User", userSchema);
export const contentModel = model("Content", contentSchema);
//# sourceMappingURL=db.js.map