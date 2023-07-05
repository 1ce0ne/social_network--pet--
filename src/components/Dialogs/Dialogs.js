import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';


const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let updateTextArea = () => {
    let messageText = newMessageElement.current.value;
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
            <textarea onChange={updateTextArea} ref={newMessageElement} value={props.state.newMessageText}></textarea>
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