import express from "express";
import dotenv from "dotenv";
import { upload } from "./middleware/multer.middleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload", upload.single(""), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "no file is uploaded" });
    }
    const pdf = req.file.path;
  } catch (e) {
  }
});

async function main() {
  app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
  });
}
main();
