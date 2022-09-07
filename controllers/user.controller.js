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

// update a random user by its id
module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const filter = { _id: id };

  // console.log(newData);
  let newData = data.find((d) => d.id == Number(id));

  newData.id = id;
  newData.name = req.body.name;
  newData.gender = req.body.gender;
  newData.contact = req.body.contact;
  newData.address = req.body.address;
  newData.photoUrl = req.body.photoUrl;

  res.send(newData);
};

// delete a random user
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  data = data.filter((d) => d.id !== Number(id));

  res.send(data);
};
