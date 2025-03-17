const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("Authorization header:", token);

  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const tokenValue = token.split(" ")[1];
    console.log("Extracted token:", tokenValue);
    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
