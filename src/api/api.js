import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'd36d9890-a140-4a55-8c72-64f8dd9caac9'
  }
})

export const usersAPI = {
  getUsers(page = 1, count = 5) {
    return instance.get(`users?page=${page}&count=${count}`)
      .then(response => {
        return response.data;
      });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {})
      .then(response => {
        return response.data;
      })
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me/`)
      .then(response => {
        return response.data;
      })
  }
}