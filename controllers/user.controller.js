const fs = require("fs");
module.exports.getAllUser = (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.write("Failed to Read");
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
};
module.exports.saveUser = (req, res) => {
  res.send("User Added");
};
