const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addNewReaction,
  deleteReaction,
} = require("../../controllers/thoughtsController");

const router = require("express").Router();

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtID")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtID/reactions").post(addNewReaction);

router.route("/:thoughtID/reactions/:reactionID").delete(deleteReaction);

module.exports = router;
