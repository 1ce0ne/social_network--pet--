import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let messageText = newMessageElement.current.value;
    alert(messageText);
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
            <textarea ref={newMessageElement}></textarea>
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