const express = require("express")
const categoryController = require("../controller/categoryController")
const router = express.Router()
router.get('/', categoryController.getAllCategory)
module.exports = router