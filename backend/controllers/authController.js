import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
  // Logic for user registration
  const { fullName, username, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  // Check if the user already exists
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).send('User already exists');
  }

  // HASH the password
  const hashedPassword = bcrypt.hashSync(password, 12);

  // Create avatar URL
  const picturePicBoy = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const picturePicGirl = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  // Create a new user
  const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    gender,
    profilePic: gender === 'male' ? picturePicBoy : picturePicGirl,
  });

  if (newUser) {
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic
      }
    });
  } else {
    return res.status(500).send('Invalid user data');
  }

};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!user || !isPasswordValid) {
      return res.status(400).json({
        message: 'username or password is incorrect'
      });
    }

    res.status(200).json({
      message: 'User logged in successfully',
      user: {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        gender: user.gender,
        profilePic: user.profilePic
      },
      token: generateTokenAndSetCookie(user._id, res)
    });

  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};

export const logout = (req, res) => {
  // Logic for user logout
  res.send('User logged out successfully');
    console.log('Logout route hit');
};