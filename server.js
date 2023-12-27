const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./models");

const PORT = process.env.PORT || 8787;
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit:"50mb",extended: true}))
require("./routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


db.sequelize
  .sync()
  .then((result) => {
    console.log("DB Connection Successfull!");
  })
  .catch((err) => console.log(err));