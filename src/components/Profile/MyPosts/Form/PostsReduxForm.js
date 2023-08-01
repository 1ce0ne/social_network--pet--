import { Field, reduxForm } from 'redux-form';

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newPostText'
          placeholder='Write here something'
          component='textarea'
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
