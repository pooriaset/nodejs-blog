const Article = require("../models/article")

class UserController {
    dashboard(req, res) {
        res.render("../views/user/dashboard", { title: "Dashboard" })
    }

    getNewArticle(req, res) {
        res.render("../views/user/newArticle", { title: "Add new article" })
    }

    async postNewArticle(req, res) {

        let newArticle = new Article(req.body);
        await newArticle.save()
    }
}

module.exports = new UserController;