import axios from 'axios';
import { API_URL } from '../constants';

function FetchData(action) {
  return axios.get(API_URL + action).then((response) => response.data)
}

export default FetchData;
