const router = require("express").Router();
const booksController = require("../../controller/book_controller");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create)
  .get(booksController.find)
  // router.route("/saved")
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
