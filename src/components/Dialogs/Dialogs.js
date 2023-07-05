import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';


const Dialogs = (props) => {
  let updateTextArea = (e) => {
    let messageText = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(messageText))
  }

  let sendMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.state.dialogsData.map(dialog =>
          <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
        )}
      </div>
      <div className={styles.messages}>
        {props.state.messagesData.map(message =>
          <Message text={message.text} id={message.id} sender={message.sender} />
        )}
        <div className={styles.forms}>
          <div>
            <textarea onChange={updateTextArea} value={props.state.newMessageText}></textarea>
          </div>
          <div>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;