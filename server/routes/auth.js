const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

const schema = Joi.object({
  username: Joi.string().required().min(6),
  password: Joi.string().required().min(6)
});

router.post("/", validateWith(schema), (req, res) => {
  const { username, password } = req.body;
  const user = usersStore.getUserByUsername(username);
  if (!user || user.password !== password) {
    return res.status(400).send({ error: "Invalid username or password." });
  }

  const token = jwt.sign(
    { name: user.name, userId: user.id, username: user.username, email: user.email },
    "jwtPrivateKey"
  );

  res.send(token);
});

module.exports = router;
