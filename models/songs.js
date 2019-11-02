var mongoose = require('mongoose');
var Schema = mongoose.Schema;

songSchema = new Schema( {
	
	song_id: Number,
    song_name: String,
    likes: Number
}),
song = mongoose.model('song', songSchema);

module.exports = song;