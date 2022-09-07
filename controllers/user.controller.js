// const fs = require("fs");
const data = require("../public/data.json");
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

module.exports.saveUser = (req, res) => {
  res.send("User Added");
};
