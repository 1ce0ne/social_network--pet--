import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newPostText'
          placeholder='Write here something'
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostsReduxForm = reduxForm({
  form: 'posts',
})(PostsForm);

export default PostsReduxForm;
