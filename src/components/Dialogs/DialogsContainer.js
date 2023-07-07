import StoreContext from '../../StoreContext';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  return (<StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        let updateTextArea = (text) => {
          let action = updateNewMessageTextActionCreator(text);
          store.dispatch(action);
        }

        let sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        }
        return (
          <Dialogs sendMessage={sendMessage}
            updateTextArea={updateTextArea}
            dialogsData={state.messagesPage.dialogsData}
            messagesData={state.messagesPage.messagesData}
            newMessageText={state.messagesPage.newMessageText} />
        )
      }
    }

  </StoreContext.Consumer>)
}

export default DialogsContainer;







// import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
// import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
//   let state = props.store.getState();

//   let updateTextArea = (text) => {
//     let action = updateNewMessageTextActionCreator(text);
//     props.store.dispatch(action);
//   }

//   let sendMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }

//   return (<Dialogs sendMessage={sendMessage}
//                    updateTextArea={updateTextArea}
//                    dialogsData={state.messagesPage.dialogsData}
//                    messagesData={state.messagesPage.messagesData}
//                    newMessageText={state.messagesPage.newMessageText} />)
// }

// export default DialogsContainer;