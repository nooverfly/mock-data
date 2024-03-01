const express = require("express");
const router = express.Router();

const populationData = [
  {
    type: "HOUSEHOLDER",
    count: 100,
  },
  {
    type: "FAMILY",
    count: 150,
  },
  {
    type: "TENANT",
    count: 90,
  },
  {
    type: "FRIEND",
    count: 50,
  },
  {
    type: "RELATIVES",
    count: 60,
  },
  {
    type: "COLLEAGUE",
    count: 30,
  },
  {
    type: "DECORATOR",
    count: 10,
  },
  {
    type: "BABYSITTER",
    count: 8,
  },
  {
    type: "OTHER",
    count: 15,
  },
];

const sexyData = [
  {
    type: "MALE",
    count: 150,
  },
  {
    type: "FEMALE",
    count: 140,
  },
];

router.get("/", (req, res) => {
  res.send(populationData);
});

router.get("/sexy", (req, res) => {
  res.send(sexyData);
});

module.exports = router;