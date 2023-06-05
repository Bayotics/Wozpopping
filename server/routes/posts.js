import express from "express";
import { getFeedPosts, getUserPosts, likePost, deletePost, getPostComments } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.delete("/:id", deletePost);
router.get("/:id/comments", getPostComments);
/* UPDATE */

router.patch("/:id/like", verifyToken, likePost);

/*DELETE*/

export default router;
