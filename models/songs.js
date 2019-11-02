var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	song_id: Number,
	song_name: String,
}),
song = mongoose.model('song', songSchema);

module.exports = song;