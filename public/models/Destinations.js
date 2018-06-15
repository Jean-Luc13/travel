var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DestinationsSchema = new Schema({
    destinationName: String,
    destinationWriteUp: String,
    longitude: Number,
    latitude: Number,
    uploadedFile: String,
    uploadedFile2: String,
    uploadedFile3: String,
    uploadedFile4: String,
    uploadedFile5: String
    

});

module.exports = mongoose.model('Destinations', DestinationsSchema);