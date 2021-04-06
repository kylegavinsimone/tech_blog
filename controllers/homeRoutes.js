const router = require("express").Router();
const { User, Post } = require("../models");
router.get("/", (req, res) => {
  Post.findAll({
      include:[User]
  }).then((data) => {
    const posts = data.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("homepage", {
      posts: posts,
    });
  });
})
  module.exports = router;
