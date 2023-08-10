const dotenv = require('dotenv');
const express = require("express");

require('dotenv').config({ path: require('find-config')('.env') });

const users = require("./routes/users");
const auth = require("./routes/auth");
const spots = require("./routes/spots");
const spot = require("./routes/spot");
const tide = require("./routes/tide");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/spot", spot);
app.use("/api/spots", spots);
app.use("/api/tide", tide);

const port = config.get("port");
app.listen(port, function() {
  console.log(`Server started on port ${port}...`);
});