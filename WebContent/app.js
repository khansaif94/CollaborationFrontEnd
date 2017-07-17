var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/allblogs", {
        templateUrl : "blogs/allblogs.html",
        controller: "blogController"
        	
    })
    .when("/addblog", {
        templateUrl : "blogs/addblog.html",
        	controller: "blogController"
             	
    })
    .when("/register", {
        templateUrl : "user/register.html",
        	controller: "userController"
        		
    })
    .when("/login", {
        templateUrl : "user/login.html",
        	controller: "userController"
        		
    })
    .when("/AddJob", {
        templateUrl : "job/AddJob.html",
        	controller: "jobController"
        		
    });
});