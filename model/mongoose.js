var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/sisk');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;

