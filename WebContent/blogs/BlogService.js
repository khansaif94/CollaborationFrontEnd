app.service('BlogService',['$http', '$q','$rootScope',function($http, $q,$rootScope){
	
	var BASE_URL='http://localhost:8082/CollaborationRestServices/';
	return{
		
		
		getAllBlogs: function()
		{
			console.log('in service');
			return $http.get(BASE_URL+'viewAllBlogs').then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
		
		saveBlog: function(blog)
		{
			console.log('in service');
			return $http.post(BASE_URL+'createblog',blog).then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
	}
	
	

}]);