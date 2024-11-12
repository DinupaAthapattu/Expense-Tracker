const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode the token

    // Assuming the token payload contains `userId`
    req.userId = decoded.userId || decoded.id; // Ensure both 'userId' and 'id' are considered

    if (!req.userId) {
      return res.status(401).json({ message: "User ID not found in token" });
    }

    next();
  } catch (error) {
    // Log the error to console for debugging
    console.error('JWT Verification Error:', error);

    if (error.name === 'TokenExpiredError') {
      // Specifically handle expired tokens
      return res.status(403).json({ message: "Token has expired" });
    }

    return res.status(403).json({ message: "Invalid token" }); // Generic invalid token error
  }
};

module.exports = authMiddleware;
