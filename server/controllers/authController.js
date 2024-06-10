const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({
                'message': 'All fields are required'
            });
        }

        if (username.length < 4 || !/^[a-zA-Z0-9]+$/.test(username)) {
            return res.status(400).json({
                'message': 'Username must be at least 4 characters and alphanumeric'
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                'message': 'Password must be at least 8 characters'
            });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                'message': 'Username already exists'
            });
        }

        const newUser = new User({ username, password });
        const savedUser = await newUser.save();
        const token = generateToken(savedUser._id);
        res.status(201).json({
            'username': savedUser.username,
            'token': token,
            message: 'User created successfully',
        });
    } catch (error) {
        res.status(500).json({
            'message': 'Something went wrong'
        });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            'message': 'All fields are required'
        });
    }

    try {
        const user = await User.findOne({ username });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json({
                    _id: user._id,
                    username: user.username,
                    token: generateToken(user._id),
                });
            } else {
                res.status(400).json({
                    'message': 'Invalid credentials'
                });
            }
        } else {
            res.status(400).json({
                'message': 'Invalid credentials'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            'message': 'Something went wrong'
        });
    }
};

module.exports = { registerUser, loginUser };
