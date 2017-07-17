app.controller("blogController",['$scope','BlogService','$location','$rootScope',
		function($scope, BlogService, $location, $rootScope) {
	
	var self = this;
	$scope.blogs=[];
	$scope.blog={
			errorCode: '',
			errorMessage: '',
			id: '',
			title: '',
			description: '',
			date_added: '',
			status: ''
			};
	
	self.getAllBlogs=function(){
		console.log('retriving blogss...');
		BlogService.getAllBlogs().then(
		function(data){
			$scope.blogs=data;
		},
		function(errResponse){
			console.log('Error in retriving blogs');
		}
		
		
		);
		
	};
	
	self.saveBlog=function(){
		console.log('adding new blog...');
		BlogService.saveBlog($scope.blog).then(
		function(data){
			alert("blog added succesfully");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in adding new  blogs');
		}
		
		
		);
		
	};
	
} ]);