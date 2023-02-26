const BlogPost = require('../models/BlogPost');


module.exports = (req, res) => {
    BlogPost.find({}, (err, posts) => {
        //console.log(req.body.postID)
        //console.log(req.session)
        res.render('index', {
            blogPosts: posts
        })
    })
    //res.sendFile(path.resolve(__dirname, 'index.html'))
}