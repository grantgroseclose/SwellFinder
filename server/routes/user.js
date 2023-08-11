const express = require("express");
const router = express.Router();
const Joi = require("joi");

const usersStore = require("../store/users");
const auth = require("../middleware/auth");
const validateWith = require("../middleware/validation");

const schema = Joi.object({
    name: Joi.string().required().min(2),
    username: Joi.string().required().min(6),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  });



router.post("/", [validateWith(schema), auth], (req, res) => {
    // const { name, username, email, password } = req.body;
    // const user = { name, username, email, password };

    const { password } = req.body;

    const user = { 
        name: req.user.name, 
        username: req.user.username, 
        email: req.user.email, 
        password: password 
    };
    usersStore.updateUserPassword(user);
  
    res.status(201).send(user);
});




module.exports = router;
