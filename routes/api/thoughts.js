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

// /api/thoughts => GET all thoughts. POST new thought

router.route("/").get(getThoughts).post(createThought);

//  /api/thoughts/:thoughtsID => GET single thought. PUT update single thought. Delete single thought

router
  .route("/:thoughtsID")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thoughts/:thoughtsID/reaction => POST add new reaction .DELETE remove reaction

router
  .route("/:thoughtID/reactions")
  .post(addNewReaction)
  .delete(deleteReaction);

module.exports = router;
