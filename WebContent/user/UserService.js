app.service('UserService',['$http', '$q','$rootScope',function($http, $q,$rootScope){
	
	var BASE_URL='http://localhost:8082/CollaborationRestServices/';
	return{
		
		
		getAllUser: function()
		{
			console.log('in service');
			return $http.get(BASE_URL+'viewAllUser').then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
		
		saveUser: function(user)
		{
			console.log('in service');
			return $http.post(BASE_URL+'saveUser',user).then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
		
		
		validate: function(user){
     	  
			console.log("Calling the method authenticate with the user :"+user)
			return $http.post(BASE_URL+'/validate',user).then(function(response){
                         console.log("data returned: "+response.data);
                         
                             return response.data;   //user json object
                       
                             
                         }, 
                        null
                       
                 );
		
 }
	}
	
	

}]);