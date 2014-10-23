var mongoose = require('../model/mongoose.js');

var Schema = mongoose.Schema({
    name: String
});

Schema.statics.addUser = function(req, res){
    var User = this;
    var newUser = new User({user: {
        name: 'TesterName'
    }});

    newUser.save(function(err){
        if(err) throw err;
    });

    res.end();
}

module.exports = mongoose.model('user', Schema);