import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img alt='wallpaper' className={styles.wallpaper} src='https://sun9-54.userapi.com/impg/knzFtHW0XBZ6CF5oCGuRInAsP-2kNSgn3dNQfg/nWTIPRJvj_o.jpg?size=2560x731&quality=96&sign=ae5f1235e4a332626d43852b00dd1447&c_uniq_tag=0TAZ1eGwPNslS8vvCNms1l4HPz9wKat5BtP8n25aZ4Q&type=album'></img>
      </div>

      <div className={styles.descriptionBlock} >
        Ava + description
        {/* <img alt='Avatar' src='https://ae04.alicdn.com/kf/Sa27b6769d1464cd7871a425d8b8c2e34S.jpg'></img> */}
      </div>
    </div>
  )
}

export default ProfileInfo;