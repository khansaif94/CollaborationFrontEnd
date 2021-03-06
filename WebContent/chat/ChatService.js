app.service('chatservice', ['$http','$q','$timeout','$rootScope', function($http, $q,$timeout,$rootScope) 
{
	console.log('chatservice');
	 var service = {}, listener = $q.defer(), socket = {
	      client: null,
	      stomp: null
	    }, messageIds = [];
	 
	 var messageIds = [];
    
	 
    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "http://localhost:8082/CollaborationRestServices/chat";
    service.CHAT_TOPIC = "/topic/message";
    service.CHAT_BROKER = "/app/chat";
    
    service.receive = function() 
    {
    	console.log('receiving data...');
    	console.log(listener.promise);
      return listener.promise;
    };
    
    service.send = function(message) 
    {
    	console.log('send');
    	console.log('MESSAGE '+message);
      var id = $rootScope.currentUser.name;
      socket.stomp.send(service.CHAT_BROKER, 
      {
        priority: 9
      }
      ,
      JSON.stringify(
      {
        message: message,
        id: id
      }));
      console.log("message: "+message);
      console.log("id: "+ id);
      messageIds.push(id);
    };
    
    var reconnect = function() 
    {
    	console.log("reconnect");
      $timeout(function() 
      {
        initialize();
      }
      ,
      this.RECONNECT_TIMEOUT);
    };
    
    var getMessage = function(data) 
    {
    	console.log("getMessage");
    	console.log("Data: "+data);
      var message = JSON.parse(data);
      var out = {};
      out.message = message.message;
      out.time = new Date(message.time);
      out.id=message.id;
      console.log("data: "+data);
      console.log("message: "+message.message);
      console.log("time: "+message.time);
      
      return out;
    };
    
    var startListener = function() 
    {
    	console.log("Start Listner");
      socket.stomp.subscribe(service.CHAT_TOPIC, function(data) 
      {
        listener.notify(getMessage(data.body));
      });
    };
    
    var initialize = function() 
    {
    	console.log("Initialize");
      socket.client = new SockJS(service.SOCKET_URL);
      socket.stomp = Stomp.over(socket.client);
      socket.stomp.connect({}, startListener);
      socket.stomp.onclose = reconnect;
    };
    
    initialize();
    return service;
}]);