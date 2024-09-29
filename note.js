// const updateAvatar = async (req, res) => {
//   try {
//     const { _id } = req.user;

//     if (!req.file) {
//       console.error("No file uploaded");
//       return res.status(400).json({ message: "No file uploaded" });
//     }
//     const { path, oldPath, originalPath } = req.file;
//     await Jimp.read(oldPath)
//       .then((image) => image.resize(250, 250).write(oldPath))
//       .catch((error) => console.log(error));

//     const extension = path.extname(originalPath);
//     const filename = `${_id}${extension}`;
//     const avatarURL = path.join("/avatar", filename);

//     const updateUser = await User.findByIdAndUpdate(_id, {
//       avatarURL,
//     });
//     res.status(200).json({ avatarURL });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// import multer from "multer";
// import path from "path";

// const tempPath = path.join("tmp");
// const multerConfig = multer.diskStorage;
// ({
//   destination: tempPath,
//   filename: (_req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: multerConfig,
// });

// export { upload };
