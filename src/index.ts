import express from "express";
import jwt from "jsonwebtoken";
import { userModel } from "./db.js";
import bcrypt from "bcrypt";
import { JWT_TOKEN_SECRET } from "./config.js";
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

app.post("/api/v1/content", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});
app.post("/api/v1/brain/share", (req, res) => {});

app.post("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000);
