const { User, Thought } = require("../models");
const { populate } = require("../models/User");

module.exports = {
  //Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(500).json(err));
  },
  //   Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate([{ path: "thoughts" }, { path: "friends" }])
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //   Create a new user
  // expected body:
  // {
  //     "username": "test",
  //     "email": "test@test.com"  // must follow the email format
  // }
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.status(200).json(newUser))
      .catch((err) => res.status(500).json(err));
  },
  //   Update user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //   Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user with that ID" });
          return;
        }
        User.updateMany(
          { _id: { $in: userData.username } },
          { $pull: { friends: params.id } }
        );
        Thought.deleteMany({ username: userData.username });
      })
      .catch((err) => res.status(500).json(err))
      .then(() => res.json({ message: "User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
