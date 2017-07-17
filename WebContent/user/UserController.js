app.controller("userController",['$scope','UserService','$location','$rootScope',
		function($scope, UserService, $location, $rootScope) {
	
	var self = this;
	$scope.users=[];
	$scope.user={
			errorCode: '',
			errorMessage: '',
			userid: '',
			email: '',
			userrole: '',
			dob: '',
			firstname: '',
			lastname: '',
			password: '',
			phoneno: '',
			gender: '',
			profilepic: ''
			};
	
	self.getAllUser=function(){
		console.log('retriving userss...');
		UserService.getAllUser().then(
		function(data){
			$scope.user=data;
		},
		function(errResponse){
			console.log('Error in retriving user');
		}
		
		);
		
	};
	
	self.saveUser=function(){
		console.log('adding new user...');
		UserService.saveUser($scope.user).then(
		function(data){
			alert("user added succesfully");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in adding new  user');
		}
		
		
		);
		
	};
	
	this.validate = function(user) {
		console.log("authenticate...");
		console.log(this.user);
		UserService
				.validate(this.user)
				.then(

						function(data) {
								console.log(data);
								console.log("akku-niyu:"+$scope.user);
							$scope.user = data;
							console.log($scope.user);
							console
									.log("user.errorCode: "
											+$scope.user.errorCode)
							if ($scope.user.errorCode == "404")

							{
								alert($scope.user.errorMessage);

								user.email = "";
								user.password = "";

							} else { // valid
										// credentials
								console
										.log("Valid credentials. Navigating to home page");

								if($scope.user.role=="Admin")	
									{
									console.log("You are admin");
									$scope.fetchAllUsers();
									console.log("i m tired...");
									}
								

								console.log('Current user : '+user);
								$rootScope.currentUser = $scope.user;
								console.log($rootScope.currentUser);
								$cookieStore.put('currentUser',$rootScope.currentUser);
								console.log($rootScope.currentUser.role);
								$http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.currentUser;								
								$location.path('/');
							}

						},
						function(errResponse) {

							console
									.error('Error while authenticate Users');
						});
	};
	
} ]);