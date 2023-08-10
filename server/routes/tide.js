const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const apisauce = require('apisauce');



const tideEndpoint = "/v2/tides";

const mareaClient = apisauce.create({
    baseURL: "https://api.marea.ooo",
    headers: {
        "x-marea-api-token": process.env.X_MAREA_API_TOKEN
    }
});



// router.get("/", auth, (req, res) => {
//     const { timestamp, latitude, longitude } = req.query;

//     mareaClient.get(tideEndpoint,
//         {
//             timestamp: timestamp,
//             latitude: longitude,
//             longitude: latitude
//         }
//     ).then(response => {
//         return res.send(response['data']); 
//     });
// });

router.get("/", auth, (req, res) => {
    const { timestamp, latitude, longitude } = req.query;

    mareaClient.get(tideEndpoint,
        {
            timestamp: timestamp,
            latitude: longitude,
            longitude: latitude
        }
    ).then(response => {
        console.log(response['data']['extremes']);
        res.send(response['data']);
    });
});


module.exports = router;
