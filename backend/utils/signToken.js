const jwt = require("jsonwebtoken");

function signToken(userId) {
  return jwt.sign({ userId }, process.env.SECRET, { expiresIn: "7d" });
}

module.exports = { signToken };
