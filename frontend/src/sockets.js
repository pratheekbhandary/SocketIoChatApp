const io = require('socket.io-client')

export default function () {
  const socket = io.connect('http://localhost:5000')

  function registerHandler(onMessageReceived) {
    socket.on('message', onMessageReceived)
  }

  function unregisterHandler() {
    socket.off('message')
  }

  function message(chatroomName, msg, cb) {
    socket.emit('message', { chatroomName, message: msg }, cb)
  }


  return {
    register,
    join,
    leave,
    message,
    getChatrooms,
    getAvailableUsers,
    registerHandler,
    unregisterHandler
  }
}

