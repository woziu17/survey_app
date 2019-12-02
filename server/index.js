const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);
const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
