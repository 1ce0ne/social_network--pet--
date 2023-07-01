import styles from './Message.module.css';

const Message = (props) => {
  return (
    <div>
      {props.sender ?
        <div className={styles.message}>
          {props.sender ?
            <div className={styles.messageItem}>
              {props.text}
            </div>
            :
            <div className={styles.messageItem + ' ' + styles.meItem}>
              {props.text}
            </div>
          }
        </div>
        :
        <div className={styles.message + ' ' + styles.me}>
          {props.sender ?
            <div className={styles.messageItem}>
              {props.text}
            </div>
            :
            <div className={styles.messageItem + ' ' + styles.meItem}>
              {props.text}
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Message;