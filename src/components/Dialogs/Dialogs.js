import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageReduxForm from './Form/AddMessageReduxForm';

const Dialogs = (props) => {
  let addNewMessage = (formData) => {
    console.log(formData.newMessageBody);
    props.sendMessage(formData.newMessageBody);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.messagesPage.dialogsData.map((dialog) => (
          <DialogItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar}
          />
        ))}
      </div>
      <div className={styles.messages}>
        {props.messagesPage.messagesData.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            id={message.id}
            sender={message.sender}
          />
        ))}

        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
