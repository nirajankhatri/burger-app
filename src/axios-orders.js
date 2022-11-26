import axios from "axios";

const instance = axios.create({
  baseURL: 'https://react-burger-app-d18cb-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;