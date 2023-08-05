const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/users", users);
app.use("/api/auth", auth);

const port = config.get("port");
app.listen(port, function() {
  console.log(`Server started on port ${port}...`);
});