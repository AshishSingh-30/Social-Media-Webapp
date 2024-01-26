import express from "express";
import { getPosts, createPost } from "../controllers/con_posts.js"

const router = express.Router();

router.get("/", getPosts);
router.get("/", createPost);

export default router;