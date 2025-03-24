// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretKey');
    req.userId = decoded.userId; // Make sure this matches how you sign the token
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
