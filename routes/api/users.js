const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addNewFriend,
  deleteFriend,
} = require("../../controllers/userController");

const router = require("express").Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:userID").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userID/friends/:friendID")
  .post(addNewFriend)
  .delete(deleteFriend);
module.exports = router;
