const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try{
        const { title, content, tags, embeds } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required" });
        }

        const post = await Post.create({
          title,
          content,
          tags: tags || [],
          embeds: embeds || [],
          author: req.user.id,
        });
        res.status(201).json(post);
    }
    catch{
        res.status(500).json({ error: "Server error" });
    }
}

exports.getPosts = async (req, res) => {
    try {
        const now = Date.now();

        const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000);

        const posts = await Post.find({ createdAt: {$gte: oneDayAgo} }).sort({_id:-1});
        res.status(201).json(posts);
    }
    catch{
        res.status(500).json({ error: "Server error" });
    }
}