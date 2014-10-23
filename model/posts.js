var mongoose = require('../model/mongoose.js');

var Schema = mongoose.Schema({
    img_url:    String,
    title:      String,
    content:    String
});

Schema.statics.getPosts = function(req, res){
    // req.body.
    this.model('post').find({}, function(err, data){
        if(err) console.log(err);
        console.log(data);
        res.end();
    });
}

Schema.statics.addPost = function(req, res){
    var Post = this;
    var newPost = new Post({
        img_url:    'bbbbbbbbb',
        title:      'LargeB',
        content:    'Just a large B'
    });

    // { post: {img_url: req.img_url, title: req.title, content: req.content}}

    newPost.save(function(err){
        if(err) throw err;
    });

    res.end();
}

module.exports = mongoose.model('post', Schema);