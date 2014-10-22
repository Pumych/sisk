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

//var MainModel = mongoose.model('sisk', MainSchema);

MainSchema.statics.getPosts = function(req, res){
    this.model('post').find({}, function(err, data){
        if(err) console.log(err);
        console.log(data);
        res.end();
    });
}

module.exports = mongoose.model('post', MainSchema);

/**
 * DB: sisk->posts
 *
 */