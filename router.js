const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/users-all", controller.getUsers);
router.post("/users-create-new", controller.addUser);
router.put("/users-update", controller.updateUser);
router.get("/users-find", controller.getUserById);
router.delete("/users-delete", controller.deleteUser);

module.exports = router;
