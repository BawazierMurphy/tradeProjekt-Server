const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("./db/db");

app.use(express.json());

const { offerRouter } = require("./route/route");

app.use(
  cors({
    origin: "https://wouldyoubemygf.vercel.app",
  })
);

// API ACCESS AUTHORIZATION MIDDLEWARE
app.use((req, res, next) => {
  const secretKey = process.env.API_KEY;
  const reqKey = req.headers.authorization;
  if (!reqKey || reqKey !== secretKey) {
    res.status(401).send("Unauthorized");
  }
  if (reqKey === secretKey) {
    res.status(201);
    next();
  } else {
    res.send("something wrong happen");
  }
});

app.get("/", (req, res) => {
  res.send({
    message: "u r gay 💀",
  });
});

app.use("/trade", offerRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
