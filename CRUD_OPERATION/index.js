const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./routes/studentRoutes");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://demo:123@cluster1.7uov6zp.mongodb.net/khushi",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running : localhost:" + PORT);
});