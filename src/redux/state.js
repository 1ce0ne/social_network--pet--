let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi', likesCount: 25 },
        { id: 2, message: 'Hi, how are you?', likesCount: 13 },
        { id: 3, message: 'Anime is strong!', likesCount: 12 },
        { id: 4, message: 'I am Naruto', likesCount: 100 },
        { id: 5, message: 'Bobobobobobo', likesCount: 10000 },
        { id: 6, message: 'DxD', likesCount: 3 },
        { id: 7, message: '18+', likesCount: 69 },
      ],
      newPostText: 'Write here something'
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: 'Aleksadnr', avatar: 'https://fanibani.ru/images/wp-content/uploads/2021/02/image188-2-1-720x720.jpg' },
        { id: 2, name: 'Genevieve', avatar: 'https://i.pinimg.com/originals/35/1a/9a/351a9aa3db62835339ccbdce905da3f6.jpg' },
        { id: 3, name: 'Sasha', avatar: 'https://sun9-54.userapi.com/impf/c845520/v845520640/d3b45/SD-t-e74H9k.jpg?size=1080x1080&quality=96&sign=0b565138d7441a207983adb6ae1c27e5&c_uniq_tag=-nic8j6j8NrdlT1mqE76AgGV21FkS0iSwXsHE17_bYk&type=album' },
        { id: 4, name: 'Anton', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/anime-avatar-discord-90.jpg' },
        { id: 5, name: 'Naruto', avatar: 'https://gas-kvas.com/uploads/posts/2023-01/1673393261_gas-kvas-com-p-risunki-anime-v-kruge-33.jpg' },
        { id: 6, name: 'Soma', avatar: 'https://2d889e898956dc8bad12-3c6fa761318b1fa796d8f54fe7f877f1.ssl.cf1.rackcdn.com/56146580.jpg' },
      ],
      messagesData: [
        { id: 1, text: 'Hi', sender: 0 },
        { id: 2, text: 'My name is Aleksandr', sender: 0 },
        { id: 3, text: 'I am Naruto Uzumaki', sender: 1 },
        { id: 4, text: 'I am Soma', sender: 0 },
        { id: 5, text: 'Boboboba', sender: 1 },
        { id: 6, text: 'Azazin', sender: 1 },
        { id: 7, text: 'Ты дурак?', sender: 0 },
        { id: 8, text: 'Я????', sender: 1 },
        { id: 9, text: 'Да', sender: 0 },
        { id: 10, text: 'Нет', sender: 1 },
        { id: 11, text: 'ОК.', sender: 0 },
      ],
      newMessageText: ''
    },
    navbarPage: {
      friendsData: [
        { id: 2, name: 'Genevieve', avatar: 'https://i.pinimg.com/originals/35/1a/9a/351a9aa3db62835339ccbdce905da3f6.jpg' },
        { id: 3, name: 'Sasha', avatar: 'https://sun9-54.userapi.com/impf/c845520/v845520640/d3b45/SD-t-e74H9k.jpg?size=1080x1080&quality=96&sign=0b565138d7441a207983adb6ae1c27e5&c_uniq_tag=-nic8j6j8NrdlT1mqE76AgGV21FkS0iSwXsHE17_bYk&type=album' },
        { id: 4, name: 'Anton', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/anime-avatar-discord-90.jpg' },
        { id: 5, name: 'Naruto', avatar: 'https://gas-kvas.com/uploads/posts/2023-01/1673393261_gas-kvas-com-p-risunki-anime-v-kruge-33.jpg' },
        { id: 6, name: 'Soma', avatar: 'https://2d889e898956dc8bad12-3c6fa761318b1fa796d8f54fe7f877f1.ssl.cf1.rackcdn.com/56146580.jpg' },
      ]
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log('State was changed')
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          id: 1 + this._state.profilePage.postsData.map(post => post.id).at(-1),
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      }
      case UPDATE_NEW_POST_TEXT: {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      }
      case ADD_MESSAGE: {
        let newMessage = {
          id: 1 + this._state.messagesPage.messagesData.map(message => message.id).at(-1),
          text: this._state.messagesPage.newMessageText,
          sender: 0
        };
        if(newMessage.text !== '') {
          this._state.messagesPage.messagesData.push(newMessage);
          this._state.messagesPage.newMessageText = '';
          this._callSubscriber(this._state);
        }
        break;
      }
      case UPDATE_NEW_MESSAGE_TEXT: {
        this._state.messagesPage.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
        break;
      }
      default: {
        console.log('Something wrong!')
        break;
      }
    }
  }
}

export default store;
window.store = store;

// Action Types:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

// Action Creators:
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text
})