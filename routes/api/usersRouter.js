import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserSubscription,
  updateAvatar,
} from "../../contactControllers/usersController.js";
import { authenticateToken } from "../../authentication/token.js";
import { upload } from "../../authentication/upload.js";

const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.get("/current", getCurrentUser);

router.patch("/", authenticateToken, updateUserSubscription);

router.patch(
  "/avatars",
  authenticateToken,
  upload.single("avatar"),
  updateAvatar
);

export { router };
