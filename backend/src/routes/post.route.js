import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = Router();

router.post("/createpost", createPost);
router.get("/getpost", getPosts);
router.patch("/updatepost/:id", updatePost);
router.delete("/deletepost/:id", deletePost);

export default router;
