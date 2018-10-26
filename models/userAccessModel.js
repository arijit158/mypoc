var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var useraccess = new Schema({  
   
    username: { type: String, required: true},  
    usercompany: { type: String },
    clientname:{ type: String, required: true },
	updatetimestamp : { type: Date }, 
});

module.exports = useraccess;