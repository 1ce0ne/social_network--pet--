import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Aleksadnr' },
    { id: 2, name: 'Genevieve' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Anton' },
    { id: 5, name: 'Naruto' },
    { id: 6, name: 'Soma' },
  ]

  let messagesData = [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'My name is Aleksandr' },
    { id: 3, text: 'I am Naruto Uzumaki' },
    { id: 4, text: 'I am Soma' },
    { id: 5, text: 'Boboboba' },
    { id: 6, text: 'Azazin' },
  ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={styles.messages}>
        {messagesData.map(message => <Message text={message.text} id={message.id} />)}
      </div>
    </div>
  )
}

export default Dialogs;