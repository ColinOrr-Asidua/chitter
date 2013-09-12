define(['jquery', 'knockout'], function($, ko) {

  //  Sources data from RESTful services, web sockets and local storage 
  
  return {
    
    //  The current user's nickname
    nickname: ko.observable(),
    
    //  Gets all cheeps from the server
    getCheeps: function() {
      return $.get('/cheeps');
    },
    
    //  Get an individual cheep from the server
    getCheep: function(id) {
      return $.get('/cheeps/' + id);
    },
    
    //  Posts a cheep to the server
    postCheep: function(cheep) {
      $.post('/cheeps', cheep);
    }
  };
});