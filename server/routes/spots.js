const express = require("express");
const router = express.Router();
const Joi = require("joi");

const spotStore = require("../store/spots");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const delay = require("../middleware/delay");
const config = require("config");

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(""),
    location: Joi.object({
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
    }).required(),
});

router.get("/", auth, (req, res) => {
  const spots = spotStore.filterSpots(
    spot => spot.userId === req.user.userId
  );
  res.send(spots);
});

router.post("/", validateWith(schema), async (req, res) => {
    const spot = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location
    };
    
    if (req.body.location) spot.location = JSON.parse(req.body.location);
    if (req.user) spot.userId = req.user.userId;

    spotStore.addSpot(spot);

    res.status(201).send(spot);
  }
);

module.exports = router;
