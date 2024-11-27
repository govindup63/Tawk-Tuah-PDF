import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload", (req, res) => {
});

async function main() {
  app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
  });
}
