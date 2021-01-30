var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    //loop over message data instead of movies as in example
    //should we clean our Messages.data here so we don't bring in anything we don't want?
    var html = '';
    for (i = 0; i < Messages.data.length; i++) {
      html += MessageView.render(Messages.data[i]);
    }
    MessagesView.$chats.append(html);
  }

};



