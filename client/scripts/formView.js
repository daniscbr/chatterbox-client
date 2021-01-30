var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var successCB = function(returnVal) {
      console.log('output of ajax request: ', returnVal);
    };

    var errorCB = function(error) {
      console.log('Failed! ', error);
    };

    // **** figure out how to validate input later ********

    //make a newMessage object
    //assing username, text, and roomname properties using jQuery
    var newMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: ''
    };
    console.log('new message: ', newMessage);
    console.log(event);

    //pass newMessage into parse.create()
    Parse.create(newMessage, successCB, errorCB);
    // invoke parse.create(message, successCB, errorCB = null)

    // successCB should call parse.readAll()

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};