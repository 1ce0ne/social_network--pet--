import { Field, reduxForm } from 'redux-form';
import styles from '../Dialogs.module.css';

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.forms}>
      <div>
        <Field
          component='textarea'
          name='newMessageBody'
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

export default AddMessageReduxForm;
