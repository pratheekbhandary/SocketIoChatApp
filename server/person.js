const constants=require('./CONSTANTS');
const Conversation=require('./conversation');

function Person({client}){
    this.name=name;
    this.id=client.id;
    this.friends=[];// list of Ids
    this.status=constants.STATUS_OFFLINE;
    this.conversation=[];
    Person.Everyone.push(this);
}

Person.Everyone=[];
Person.GetEveryOne=()=>Person.Everyone;
Person.GetPeopleOnline=()=>Person.Everyone.filter(person=>person.status===constants.STATUS_ONLINE);
Person.GetPeopleOffline=()=>Person.Everyone.filter(person=>person.status===constants.STATUS_OFFLINE);
Person.GetFriendById=(id)=>Person.Everyone.find(person=>person.id===id); //Also to check if id is Valid

const isValidId= Person.GetFriendById;
Person.prototype.isAlreadyFriend=function(id){
    return this.friends.find(friendId=>friendId===id)?true:false;
}

Person.prototype.addFriendsById= function(friendIds){
    if(Array.isArray(friendIds)){
        const validFriendIds=friendIds.filter(friendId=>{
            const conv=new Conversation(friendId);
            this.conversation.push(conv);
            return isValidId(friendId) && this.id!==friendId && !this.isAlreadyFriend(friendId)
        });
        validFriendIds && this.friends.push(...validFriendIds);
    }
    else {
        isValidId(friendIds) && this.id!==friendIds && !this.isAlreadyFriend(friendIds) && this.friends.push(friendIds);
        const conv=new Conversation(friendIds);
        this.conversation.push(conv);
    }
    
}

Person.prototype.toggleStatus= function(){
    switch (this.status){
        case constants.STATUS_OFFLINE: 
            this.status=constants.STATUS_ONLINE;
            break;

        case constants.STATUS_ONLINE: 
            this.status=constants.STATUS_OFFLINE;
            break;

        default: console.trace("Something wrong in toggleStatus");
    }
}

module.exports = Person;