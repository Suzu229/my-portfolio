import User from '../models/user.model.js';
import errorHandler from '../helpers/dbErrorHandler.js';

// Create a new user
const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully signed up!"
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// List all users (only public fields)
const list = async (req, res) => {
  try {
    const users = await User.find().select('name email created updated');
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Middleware: Find user by ID
const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user)
      return res.status(400).json({
        error: "User not found"
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user"
    });
  }
};

// Read single user (without sensitive fields)
const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

// Update user
const update = async (req, res) => {
  try {
    let user = req.profile;
    user = Object.assign(user, req.body);
    user.updated = Date.now(); // ← updatedに時刻を記録
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Delete user
const remove = async (req, res) => {
  try {
    let user = req.profile;
    const deletedUser = await user.deleteOne();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default {
  create,
  list,
  userByID,
  read,
  update,
  remove
};
