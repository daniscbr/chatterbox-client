var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB

    });


  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET', //
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};

/**
 * 1 - create get request asking for data from our server
 * 2 - the server recieves the request compiles the data we asked for
 * 3 - if the server compiled the data correctly
 *    a. the server invokes successDB(all the data it compiled)
 *    b. if it ddn't compile correctly, it runs errorDB
 */