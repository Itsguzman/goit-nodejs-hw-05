import multer from "multer";
import path from "path";
import fs from "fs";

const tempPath = path.resolve("tmp");
if (!fs.existsSync(tempPath)) {
  fs.mkdirSync(tempPath, { recursive: true });
}

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage: multerConfig,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});

export { upload };
