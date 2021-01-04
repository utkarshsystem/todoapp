import { API_URL } from '../config/constants';
import Axios from 'axios';

export const ToDoService = {
  async fetchItems() {
    const url = API_URL+'/todo';
    const res = await Axios.get(url); // fetching data
    return res; // returning data
  },
};
