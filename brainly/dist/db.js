import mongoose, { Schema, model } from "mongoose";
import { MONGODB_URI } from "./config.js";
mongoose.connect(MONGODB_URI);
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