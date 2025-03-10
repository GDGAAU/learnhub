const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes
exports.protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Not authorized, no token" });
    console.log(token)

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ error: "User not found" });

    next();
  } catch (error) {
    res.status(401).json({ error: "Not authorized" });
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(401).json({ error: "Not authorized to access this route" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (err) {
      res.status(401).json({ error: "Not authorized to access this route" });
    }
  }
};