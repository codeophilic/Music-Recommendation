var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String,
	music_list: [Number]
	
}),
User = mongoose.model('User', userSchema);

module.exports = User;