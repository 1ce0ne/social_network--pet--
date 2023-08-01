import { Field, reduxForm } from 'redux-form';
import styles from '../Dialogs.module.css';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.forms}>
      <div>
        <Field
          component={Textarea}
          name='newMessageBody'
          placeholder='Enter your message'
          validate={[required, maxLength50]}
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
