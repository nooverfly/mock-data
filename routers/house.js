const express = require("express");
const router = express.Router();

const houseData = [
  {
    type: 2,
    count: 27
  },
  {
    type: 3,
    count: 100
  },
  {
    type: 5,
    count: 50
  },
  {
    type: 6,
    count: 120
  },
  {
    type: 7,
    count: 20
  },
  {
    type: 8,
    count: 80
  },
  {
    type: 9,
    count: 30
  },
]

router.get("/", (req, res) => {
  res.send(houseData);
})

module.exports = router