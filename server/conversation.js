const Message=require('./message');

function Conversation(friendId){
    this.friendId=friendId;
    const time=new Date();
    const firstMessage=new Message({chat:'New Friend', systemMessage:true, time});
    this.lastMessage=firstMessage;
    this.messageList=new Map([[time,firstMessage]]);
    this.unreadCount=0;
}

Conversation.prototype.addNewMessage=function(message){
    const msg=new Message(message);
    this.messageList.set(new Date(), msg);
    this.unreadCount++;
}

module.exports =Conversation;