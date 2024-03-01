const express = require("express");
const router = express.Router();

const tempData =  [
  {
    type: "保洁人员",
    y: 10
  },
  {
    type: "装修人员",
    y: 20
  },
  {
    type: "快递人员",
    y: 5
  },
  {
    type: "外卖人员",
    y: 30
  }, {
    type: "其他人员",
    y: 40
  }
];;

router.get("/", (req, res) => {
  res.send(tempData);
})

module.exports = router
