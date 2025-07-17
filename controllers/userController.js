const User = require('../models/user');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(`Fetched ${users} users`);
    res.json(users);

  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};


module.exports = { getAllUsers };
