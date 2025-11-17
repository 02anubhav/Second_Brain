import express from "express";
import jwt from "jsonwebtoken";
import { contentModel, userModel } from "./db.js";
import bcrypt from "bcrypt";
import { JWT_TOKEN_SECRET } from "./config.js";
import { userMiddleware } from "./middleware.js";
const app = express();

app.use(express.json());

//---------- User Registration Endpoint -------------//
app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await userModel.findOne({
    username,
  });
  if (existingUser) {
    return res.status(400).send({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  await userModel.create({
    username,
    password: hashedPassword,
  });
  res.status(201).send({ message: "User created successfully" });
});

//----------- Signin Endpoint -------------//
app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await userModel.findOne({
    username,
  });
  if (!existingUser) {
    return res.status(400).send({ message: "Invalid credentials" });
  }
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    return res.status(400).send({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: existingUser._id }, JWT_TOKEN_SECRET);
  res.status(200).send({ message: "user logged in successfully", token });
});

//----------- Content Creation and Retrieval Endpoints -------------//
app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const { title, link } = req.body;
  await contentModel.create({
    title,
    link,
    userId: (req as any).userId,
    tags: [],
  });

  res.json({ message: "Content created successfully" });
});

//--------- Get contents for logged in user ---------//
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  const userId = (req as any).userId;
  const contents = await contentModel.find({ userId: userId });
  res.json({ contents });
});

app.delete("/api/v1/content", async (req, res) => {
  const { contentId } = req.body;
  await contentModel.deleteOne({ contentId, userId: (req as any).userId });
  res.json({ message: "Content deleted successfully" });
});

app.post("/api/v1/brain/share", (req, res) => {
  const {share} = req.body;
});

app.post("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000);
