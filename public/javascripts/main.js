var app = angular.module('myApp', ['ui.router']);
 	app.config(function($stateProvider)
	{
		$stateProvider
			.state('edit', {
				name: 'edit',
				url: '/edit',
				templateUrl: '/views/Edit.html'
			})

			.state('userlist', {
				name: 'userlist',
				url: '/userlist',
				templateUrl: '/views/UserList.html'
			})

			.state('addtask', {
				name: 'addtask',
				url: '/addtask',
				templateUrl: '/views/addtask.html'
			})
	})
	/*app.controller('myCtrl', function($scope, $state, $http) {
	    $scope.goToOtherState = function() {
	    	$state.go('userlist');
	    }
	    $scope.callService = function() {
	    	$state.go('addtask');
	    }



	    $scope.callTaskListDetails = function() {
	   	var url = '/task';
        $http({
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                
            }
        }).then(function(response) {
            $scope.listData = response;
            console.log($scope.listData)
        });
	    }
$scope.callTaskListDetails();

	    $scope.callTaskDetails = function(data) {
	   	var url = '/task/create';
        return $http({
            method: 'POST',
            url: url,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                
            }
        }).then(function(response) {
            return  (
            	alert(response.data),
            	$state.go('userlist'),
            	$scope.callTaskListDetails()
            	)
        });
	    }

	    $scope.deleteTask = function(data) {
	   	var url = '/task/destroy/'+data;
        return $http({
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                
            }
        }).then(function(response) {
            return  (
            	alert(response.data),
            	$state.go('userlist'),
            	$scope.callTaskListDetails()
            	)
        });
	    }


	});*/


    /*app.controller('getuserdetails', function($location, $scope, $http) {
    $scope.submitLogin=function(){      
          //  localStorage.setItem("username", sop_username);               
         var dataObject =  {                              
                   "userName":$scope.user.accId,
                   "userPassword":$scope.user.passWord             
             };
            var responsePromise = $http.post("http://localhost:3000/rest/v1/sopmeta/login", dataObject, {});                
           responsePromise.success(function(dataFromServer, status, headers, config) {
                  //console.log(dataFromServer.title);

                localStorage.setItem("usermessage", userMessage);
                localStorage.setItem("username", userName);
               window.location.href = "ama/index.html";
               });
           
            responsePromise.error(function(data, status, headers, config) {
                alert("Login Failed !");
                console.log("Login failed!");
           });

    }
});*/

app.controller('getlogin', function($location, $scope, $http,$state,$window) {
    
    $scope.submitLogin=function(){   
    console.log($scope.uname);
    console.log($scope.pin);   
          //  localStorage.setItem("username", sop_username);               
         var dataObject =  {                              
                   "uname":$scope.uname,
                   "passwd":$scope.pin           
             };
            var responsePromise = $http.post("http://localhost:3000/login", dataObject, {});                
           responsePromise.success(function(dataFromServer, status, headers, config) {
                  console.log(dataFromServer);
                  console.log(status);
                  console.log(headers);

               if(status==200){
                localStorage.setItem("user", $scope.uname);
                /*console.log(localStorage.getItem("user"))*/
                 $window.location.href = '/views/Home.html';
               }
               });
           
            responsePromise.error(function(data, status, headers, config) {
                alert("Login Failed !");
                console.log("Login failed!");
           });

    }
});

app.controller('home', function($location, $scope, $http,$state,$window) {
    
    $scope.username=localStorage.getItem("user");

     $scope.itemList=function(){   
                   
            var responsePromise = $http.get("http://localhost:3000/list");                
           responsePromise.success(function(dataFromServer, status, headers, config) {
                  console.log(dataFromServer);
                  console.log(status);
                  console.log(headers);

               if(status==200){
                console.log(dataFromServer)
                $scope.listData = dataFromServer;
                $state.go('userlist');
               }
               });
           
            responsePromise.error(function(data, status, headers, config) {
                alert("Login Failed !");
                console.log("Login failed!");
           });

    }
});

