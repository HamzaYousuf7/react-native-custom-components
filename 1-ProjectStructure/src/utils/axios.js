import axios from 'axios';
import endPoints from '../constant/apiEndPoints';

// redux impo
// import {stop_loading} from '../store/actionCreator/main';
// import {store} from '../store/store';

// setup base thing
const apiRequest = axios.create({
  baseURL: endPoints.BASE_URL,
  responseType: 'json',
  headers: {'Content-Type': 'application/json'},
});

apiRequest.interceptors.response.use(
  response => {
    if (response.status == 200) {
      //console.log('Interceptors response', response);
      return Promise.resolve(response);
    }
  },
  error => {
    // console.log('interceptors error', error, error.response.status);
    //** FARIS LOGIC FOR LOGOUT **/
    if (error.response.status == 400) {
      store.dispatch(stop_loading());
    }

    // todo for login
    // else if (
    //   error.response.status == 401 &&
    //   error.response.data.code == 401
    // ) {
    //   store.dispatch(logoutUser()); //Temporarily disabled this as other 401 calls logs out the user
    //   alert(error.response.data.message);
    // }
    return Promise.reject(error.response);
  },
);

// set token //TODO
// export const setAuthToken = token => {
//   if (token) {
//     apiRequest.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete apiRequest.defaults.headers.common['Authorization'];
//   }
// };

export default apiRequest;
