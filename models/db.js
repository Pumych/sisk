var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/sisk');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var MainSchema = mongoose.Schema({
    post: {
        img_url:    String,
        title:      String,
        content:    String
    }
});

MainSchema.statics.getPosts = function(req, res){
    this.model('post').find({}, function(err, data){
        if(err) console.log(err);
        console.log(data);
        res.end();
    });
}

var PostSchema = mongoose.Schema({
        img_url:    String,
        title:      String,
        content:    String
});

var Post = mongoose.model('post', PostSchema);

//var MainModel = mongoose.model('sisk', MainSchema);



MainSchema.statics.addPost = function(req, res){


    var newPost = new MainSchema({ post: {img_url: req.img_url, title: req.title, content: req.content}});
    var M = this.model('M', newPost);
    var m = new M()

    this.model('post').save( function(){

    });

    res.end();
}

module.exports = mongoose.model('post', MainSchema);

/**
 * DB: sisk->posts
 *
 */