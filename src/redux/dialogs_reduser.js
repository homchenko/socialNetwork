const SEND_MESSAGE = 'SEND-MESSAGE';

//starting value of state
let initialState ={
   dialogs: [
     { id: "1", name: "Dima" },
     { id: "2", name: "Tanya" },
     { id: "3", name: "Ira" },
     { id: "4", name: "Sasha" }
   ],
   messages: [
     { id: "1", message: "hello1" },
     { id: "2", message: "hello2" },
     { id: "3", message: "hello..." },
     { id: "4", message: "bye1" },
     { id: "5", message: "bye..." },
   ]
 }

const dialogsReduser = (state = initialState, action) => {
      switch (action.type) {
      case SEND_MESSAGE:
         return{
            ...state,
            messages:  [...state.messages, {id: 6, message: action.newMessageBody}] //в сообщения записывается копия старого массива сообщений и пушится новый объект
         }
      default: return state;
   }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReduser;