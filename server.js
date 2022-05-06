const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/route");
const cors = require("cors");
// const uploadFile = require("./Helper/fileUploader");


const PORT = process.env.PORT || 8081;

mongoose.connect(
  `mongodb+srv://TRHFamilydashboard:Equifax2014@cluster0.eoder.mongodb.net/trh-family-dashboard?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ type: "application/json" }));
app.use('/uploads', express.static('uploads'))

app.use(cors());

app.use("/", routes);
app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});
