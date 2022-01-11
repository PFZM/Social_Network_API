const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addNewFriend,
} = require("../../controllers/userController");

const router = require("express").Router();

// /api/users => GET all users. POST new user

router.route("/").get(getUsers).post(createUser);

//  /api/users/:userID => GET single user. PUT update single user. Delete single user

router.route("/:userID").get(getSingleUser).put(updateUser).delete(deleteUser);

//  /api/users/:userID/friends/:friendID => POST add new friend .DELETE remove friend

router.route("/:userID/friends/:friendID").post(addNewFriend);
module.exports = router;
