



exports.index = function(req, res){
 res.redirect('/index');
};

exports.getaddTask = function(req, res){
  res.render('addtask',{msg:''});
};


exports.logauth = function(req, res){
	
			console.log("hit log auth"); 
		  
    	var uname=req.body.uname;
		var passwd=req.body.passwd;
		console.log(uname+"          "+passwd);
		if(uname=='arijit' && passwd=='password')
		{
			req.session.uuname=uname;
			res.status(200).send("login successfull");		
                        
		}
		else
		{
			res.render('index',{msg:'Check your user id and password'});
		}
};

var models = require("../models");
var UsersAccessModel=models.UserDetails;

exports.testmongoose=function(req,res){

	
	adduser(req,res);


}


exports.getlist=function(req,res){

	
	UsersAccessModel.find().exec(function (err, users) {
	      if (err) {       
	    	  res.status(500).send(err);
		    
		    	return;
	      } else {
	          
	    	  res.status(200).send(users);
	    	  return 
	      }
	    });


}


function adduser(req,res)
{
	var user = new UsersAccessModel({
		username: req.body.username, 
	    usercompany: req.body.usercompany, 
	    clientname:req.body.clientname, 
		updatetimestamp : new Date().toISOString()
	    });
	  user.save(function (err) {
	    if (err) {
	    	
	    	res.status(500).send(err);
	    	return;
	    } else {
	          res.status(200).send("saved=============");
	          return;
	    }
	  });
}


exports.logout = function(req, res){
 req.session.destroy(); 
 res.redirect('/');
};
