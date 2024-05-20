const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://khannkalam:ebrsh7cW7nRl1f1G@cluster07.cbgbfga.mongodb.net/?retryWrites=true&w=majority&appName=cluster07/netflix_mirror", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
