import styles from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={styles.friend} key={props.key}>
      <img src={props.avatar} alt='Friend' />
      <div className={styles.name}>
        {props.name}
      </div>
    </div>
  )
}

export default Friend;