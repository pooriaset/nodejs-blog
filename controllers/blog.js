class BlogController {
    homePage(req, res) {
        res.render("../views/blog/index" , {title : "Hello World!" , message : "Blog home page!"})
    }
}

module.exports = new BlogController;