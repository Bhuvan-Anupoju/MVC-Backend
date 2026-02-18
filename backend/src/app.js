import express from "express";

import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express(); // Create an express app
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;
