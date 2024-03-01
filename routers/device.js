const express = require("express");
const router = express.Router();

const deviceData = [
  {
    id: 1,
    type: 1,
    totalCnt: 10,
    onlineCnt: 6,
    offlineCnt: 4,
  },
  {
    id: 2,
    type: 2,
    totalCnt: 8,
    onlineCnt: 5,
    offlineCnt: 3,
  },
  {
    id: 3,
    type: 3,
    totalCnt: 20,
    onlineCnt: 15,
    offlineCnt: 5,
  },
  {
    id: 4,
    type: 4,
    totalCnt: 30,
    onlineCnt: 24,
    offlineCnt: 6,
  },
  {
    id: 5,
    type: 5,
    totalCnt: 3,
    onlineCnt: 2,
    offlineCnt: 1,
  },
  {
    id: 7,
    type: 7,
    totalCnt: 50,
    onlineCnt: 40,
    offlineCnt: 10,
  }
]

router.get("/", (req, res) => {
  res.send(deviceData);
});

module.exports = router