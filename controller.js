const User = require("./model");

// get all users
const getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

//add a new user
const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    name: req.body.name,
  });
  user
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

//update user
const updateUser = (req, res, next) => {
  const { id, name } = req.body;
  User.updateOne({ id: id }, { $set: { name: name } })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

//delete user
const deleteUser = (req, res, next) => {
  const id = req.query.id;
  User.deleteOne({ id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

//get user by id
const getUserById = (req, res, next) => {
  const id = req.query.id;
  User.findOne({ id })
    .then((user) => {
      // Handle the retrieved users, for example, send them as a response
      res.status(200).json(user);
    })
    .catch((error) => {
      // Handle any errors that occurred during the query
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserById = getUserById;
