var mongoose = require("mongoose");
var db;
	
var mongodb_uri = 'mongodb://localhost:27017/myapp';
db = mongoose.createConnection(mongodb_uri);

		
var UserDetailsModel = require("./userAccessModel.js");
exports.UserDetails = db.model('useraccess', UserDetailsModel);


