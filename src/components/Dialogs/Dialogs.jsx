import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { required, maxLengthCreators } from '../../utils/validators/validators';


const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogElements = state.dialogs
      .map(d => <DialogItem name={d.name} id={d.id} />);
   let messageElements = state.messages
      .map(m => <Message message={m.message} />)

   //в f() передается парметр values, который содержит свойста
   //компонента Field из AddMessageForm (name='newMessageBody')
   const addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
   }

   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            {dialogElements}
         </div>
         <div className={style.messages}>
            <div>{messageElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
         </div>
      </div>

   );
}

const maxLength = maxLengthCreators(100);
const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field 
               component={Textarea}
               name='newMessageBody'
               placeholder='Enter your message'
               validate={[required, maxLength]}/>
         </div>
         <div>
            <button>Send</button>
            </div>
      </form>
   )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;