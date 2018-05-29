var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsletterSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);