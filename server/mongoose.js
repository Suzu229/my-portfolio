import mongoose from "mongoose";

const connectDB = async () => {
  try {
await mongoose.connect(
  "mongodb+srv://suzurimiken:byakuren229@cluster0.zez8bns.mongodb.net/mernapp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
