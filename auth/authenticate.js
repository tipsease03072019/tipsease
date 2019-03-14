const jwt = require("jsonwebtoken");
const admin = require("../config/admin");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken,
  decode,
  decode1
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get("Authorization");
  const jwtKey =
    process.env.JWT_SECRET ||
    "add a .env file to root of project with the JWT_SECRET variable";

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtKey, options);
}

function decode(req, res, next) {
  // console.log("req", req.query.token);
  const token = req.body.token;
  console.log(token)
  admin
    .auth()
    .verifyIdToken(token)
    .then(decodedToken => {
      req.body.UID = decodedToken.uid;
      next();
    });
}
function decode1(req, res, next) {
  const token = req.headers.token;
  console.log(token)
  admin.auth().verifyIdToken(token).then(decodedToken => {
    req.headers.UID = decodedToken.uid;
    next();
  })
}
