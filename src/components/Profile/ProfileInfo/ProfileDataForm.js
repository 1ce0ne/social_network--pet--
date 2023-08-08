import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import styles from './ProfileInfo.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full name:</b>
        {<Field placeholder={'Full name'} name={'fullName'} component={Input} />}
      </div>
      <br />
      <div>
        <b>Looking for a job:</b>
        {<Field name={'lookingForAJob'} component={Input} type={'checkbox'} />}
      </div>
      <div>
        <b>My professional skills:</b>
        <Field
          placeholder={'My professional skills'}
          name={'lookingForAJobDescription'}
          component={Textarea}
        />
      </div>
      <div>
        <b>About me:</b>
        <Field placeholder={'About me'} name={'aboutMe'} component={Textarea} />
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => (
          <div key={key} className={styles.contact}>
            <b>
              {key}:{' '}
              <Field placeholder={key} name={`contacts.${key}`} component={Input} />
            </b>
          </div>
        ))}
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>save</button>
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataReduxForm;
