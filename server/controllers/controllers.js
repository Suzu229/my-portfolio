import User from "../models/user.model.js";

const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "✅ Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

const list = async (req, res) => {
  try {
    const users = await User.find().select("name email created");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

export default { create, list };
