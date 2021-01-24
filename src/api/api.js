import * as axios from 'axios';

//CORS
const instance = axios.create({
   withCredentials: true,
   headers: {
      "API-KEY": "2b3ba01b-d161-4a48-8882-92026b16118d"
   },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   },
   follow(userId) {
      return instance.post(`follow/${userId}`);
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`);
   },
   //created object profileAPI, method getProfile() obsolete
   getProfile(userId) {
      console.warn('Obsolete method. Please, use profileAPI object.');
      return profileAPI.getProfile(userId);
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`);
   }, 
   getUserStatus(userId) {
      return instance.get(`profile/status/${userId}`);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status});
   },
   savePhoto(photoFile) {
      const formData = new FormData();
      formData.append('image', photoFile);
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`);
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, {email, password, rememberMe});
   },
   logout() {
      return instance.delete(`auth/login`);
   }
}




