
function Message({from,to,chat,time}){
    this.from=from;
    this.to=to;
    this.chat=chat;
    this.time=time;
    this.systemMessage=systemMessage?systemMessage:false;
}
module.exports = Message;