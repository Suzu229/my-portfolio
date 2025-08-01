import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";

// ← ここで初期化
const app = express();

// ミドルウェアの設定
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// ルート設定（app初期化の後に記述）
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome.");
});


export default app;
