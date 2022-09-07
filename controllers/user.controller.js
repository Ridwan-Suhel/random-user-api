// const fs = require("fs");
let data = require("../public/data.json");
// getAllUser list
module.exports.getAllUser = (req, res) => {
  res.send(data);
};
// get random user
module.exports.getRandmonUser = (req, res) => {
  const users = data;
  const randomUser = users[Math.floor(Math.random() * users.length)];
  res.send(randomUser);
};

// save a random user
module.exports.saveUser = (req, res) => {
  const query = req.body;
  data.push(query);
  res.send(data);
};
