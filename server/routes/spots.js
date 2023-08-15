const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const spotStore = require("../store/spots");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const delay = require("../middleware/delay");
const config = require("config");
const c = require("config");
const imageResize = require("../middleware/imageResize");

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
  console.log(spots);
  res.send(spots);
});

router.post("/", [auth, upload.single('image'), validateWith(schema), imageResize], async (req, res) => {
    console.log('REQUEST_____________________________________________________:');
    console.log(req);
    console.log('REQUEST.FILE_____________________________________________________:');
    console.log(req.file);
    console.log('REQUEST.BODY_____________________________________________________:');
    console.log(req.body);

    
    const spot = {
      userId: req.user.userId,
      name: req.body.name,
      description: req.body.description,
      location: {
        'latitude': parseFloat(parseFloat(req.body.latitude).toFixed(2)),
        'longitude': parseFloat(parseFloat(req.body.longitude).toFixed(2))
      },
      image: `http://10.0.0.86:9000/assets/${req.file.filename}.jpg`
    };

    spotStore.addSpot(spot);
    res.status(201).send(spot);
});

module.exports = router;
