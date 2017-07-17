app.controller("jobController",['$scope','JobService','$location','$rootScope',
		function($scope, JobService, $location, $rootScope) {
	
	var self = this;
	$scope.jobs=[];
	$scope.job={
			errorCode: '',
			errorMessage: '',
			jobid: '',
			jobtitle: '',
			jobdescription: ''	
			};
	
	self.getAllJobs=function(){
		console.log('retriving Jobss...');
		JobService.getAllJobs().then(
		function(data){
			$scope.jobs=data;
		},
		function(errResponse){
			console.log('Error in retriving jobs');
		}
		
		
		);
		
	};
	
	self.saveJob=function(){
		console.log('adding new job...');
		JobService.saveJob($scope.job).then(
		function(data){
			alert("Job posted succesfully");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in adding new  Job');
		}
		
		
		);
		
	};
	
} ]);