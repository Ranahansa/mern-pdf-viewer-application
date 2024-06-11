const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');


const protect = async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            console.log('User authenticated:', req.user);
            next();
    } catch (error) {
        console.log('Token verification error:', error.message);
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
}

        else{
        res.status(401).json({ message: 'Not authorized, no token' });
    }

}

const admin = (req, res, next) => {

    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        console.log('User role:', req.user.role); 
        res.status(401).json({ message: 'Not authorized as an admin' });
        console.log('Not authorized as an admin');
    }
}

module.exports = { protect, admin };