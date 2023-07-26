import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let updateTextArea = (e) => {
    let messageText = e.target.value;
    props.updateTextArea(messageText);
  };

  let sendMessage = () => {
    props.sendMessage();
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.messagesPage.dialogsData.map((dialog) => (
          <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
        ))}
      </div>
      <div className={styles.messages}>
        {props.messagesPage.messagesData.map((message) => (
          <Message key={message.id} text={message.text} id={message.id} sender={message.sender} />
        ))}
        <div className={styles.forms}>
          <div>
            <textarea
              onChange={updateTextArea}
              value={props.messagesPage.newMessageText}
            ></textarea>
          </div>
          <div>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
