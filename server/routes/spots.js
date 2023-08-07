const express = require("express");
const router = express.Router();
const Joi = require("joi");

const spotStore = require("../store/spots");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const delay = require("../middleware/delay");
const config = require("config");
const c = require("config");

const schema = Joi.object({
    name: Joi.string().min(1).required(),
    description: Joi.string().min(1).required(),
    latitude: Joi.string().min(5).required(),
    longitude: Joi.string().min(5).required()
});

router.get("/", auth, (req, res) => {
  const spots = spotStore.filterSpots(
    spot => spot.userId === req.user.userId
  );
  res.send(spots);
});

router.post("/", [validateWith(schema), auth], async (req, res) => {
    const spot = {
      userId: req.user.userId,
      name: req.body.name,
      description: req.body.description,
      location: {
        'latitude': parseFloat(parseFloat(req.body.latitude).toFixed(2)),
        'longitude': parseFloat(parseFloat(req.body.longitude).toFixed(2))
      }
    };

    spotStore.addSpot(spot);

    res.status(201).send(spot);
  }
);

module.exports = router;
