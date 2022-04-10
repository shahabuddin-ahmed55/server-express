const express = require("express");
const router = express.Router()

const posts = [
    {
        title: "My Post",
        description: "My Description"
    }
]

router.get("/posts", (req, res) => {
    res.status(200).json(posts);
})

module.exports = router