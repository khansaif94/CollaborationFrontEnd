app.service('JobService',['$http', '$q','$rootScope',function($http, $q,$rootScope){
	
	var BASE_URL='http://localhost:8082/CollaborationRestServices/';
	return{
		
		
		getAllJobs: function()
		{
			console.log('in service');
			return $http.get(BASE_URL+'viewAllJob').then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
		
		saveJob: function(blog)
		{
			console.log('in service');
			return $http.post(BASE_URL+'createjob',job).then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
	}
}]);