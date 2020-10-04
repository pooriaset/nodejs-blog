const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")

router.get("/dashboard", userController.dashboard)
router.get("/newarticle" , userController.getNewArticle)
router.post("/newarticle", userController.postNewArticle)
module.exports = router;
