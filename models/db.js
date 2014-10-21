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

MainSchema.statics.getPosts = function(){
    return this.model('sisk').find({});
}

module.exports = mongoose.model('sisk', MainSchema);