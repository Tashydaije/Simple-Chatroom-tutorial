import consumer from "./consumer"

consumer.subscriptions.create("ChatRoomChannel", {
  connected() {
    console.log("Connected to the chat room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messages').append('<p class="received"> ' + data.message + '</p>')
  },

  speak(message) {
    this.perform('speak', { message: message })
  }

});

export default chatRoomChannel;