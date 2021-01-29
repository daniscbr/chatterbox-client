var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //var messagesArray  = readAll(successCB, failureCB)
    //return messagesArray
  },

  render: function() {
    //var messageData = initialize();
    //loop over message data instead of movies below
    var i; var html = '';
    for (i = 0; i < data.movies.length; i++) {
      html += compiled(data.movies[i]);
    }
    $('#movies').append(html);
  }

};


