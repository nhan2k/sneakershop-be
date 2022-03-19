const ProductConrtoller = require("../controllers/ProductController");
const router = require("express").Router();

//ADD
router.post("/",ProductConrtoller.addProduct);

//GET ALL
router.post("/",ProductConrtoller.getAllProduct);

//ADD
router.post("/:id",ProductConrtoller.updateProduct);

//ADD
router.post("/:id",ProductConrtoller.deleteProduct);

module.exports = router;