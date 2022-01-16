const { User, Thought } = require("../models");
const { populate } = require("../models/User");

module.exports = {
  //Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //   Get a single user
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtID })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //   Create a new thought
  // expected body:
  // {
  //     "thoughtText": "Here's a cool thought...",
  //     "username": "test",
  //     "userID": "test => needs to be the id of username"
  // }
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        User.findOneAndUpdate(
          { _id: req.body.userID },
          { $push: { thoughts: thought._id } },
          { new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "Not found" })
              : res.status(200).json(thought)
          )
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },
  //   Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //   Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtID })
      .then(async (userData) => {
        if (!userData) {
          res.status(404).json({ message: "No thought with that ID" });
          return;
        }
        await User.findOneAndUpdate(
          { username: userData.username },
          { $pull: { thoughts: req.params.thoughtID } }
        );
        res.json({ message: "Thought deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  //   Add new reaction
  addNewReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $push: { reactions: req.body } },
      { new: true }
    )
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(data)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete reaction
  deleteReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtID },
      { $pull: { reactions: { reactionID: req.params.reactionID } } },
      { new: true }
    )
      .then((data) =>
        !data
          ? res.status(404).json({ message: "No reaction with that ID" })
          : res.json(data)
      )
      .catch((err) => res.status(500).json(err));
  },
};
