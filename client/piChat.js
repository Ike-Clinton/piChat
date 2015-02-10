/**
* Templates
*/
Template.messages.helpers({
messages: function() {
  return Messages.find({}, { sort: { time: -1}});
}
}) 
 
Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { //enter key event 

      var name = document.getElementById('username');
      var message = document.getElementById('message');

      if (message.value != '' ) {
        Messages.insert({
          name: name.value,
          message: message.value,
          time: TimeSync.serverTime(),
        });

        document.getElementById('message').value = '';
        message.value = '';
}}}}