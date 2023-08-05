const express = require("express");
const router = express.Router();
const Joi = require("joi");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

const schema = Joi.object({
  name: Joi.string().required().min(2),
  username: Joi.string().required().min(6),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

router.post("/", validateWith(schema), (req, res) => {
  const { name, username, email, password } = req.body;
  if (usersStore.getUserByEmail(email))
    return res
      .status(400)
      .send({ error: "An account has already been registered with the given e-mail." });
  
  if (usersStore.getUserByUsername(username))
    return res
      .status(400)
      .send({ error: "A user with the given username already exists." });

  const user = { name, username, email, password };
  usersStore.addUser(user);

  res.status(201).send(user);
});

router.get("/", (req, res) => {
  res.send(usersStore.getUsers());
});

module.exports = router;
