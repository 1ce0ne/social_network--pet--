import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'd36d9890-a140-4a55-8c72-64f8dd9caac9',
  },
});

export const usersAPI = {
  getUsers(page = 1, count = 5) {
    return instance.get(`users?page=${page}&count=${count}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {}).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then((response) => {
      return response.data;
    });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me/`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
