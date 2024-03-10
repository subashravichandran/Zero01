import axios from 'axios';
import { API_URL } from '../constants';

// export default async function FetchData(action) {
  // const response = await axios.get(API_URL + action);
  // return response.data;
// }

export default async function FetchAndUpdate(action) {
  const response = await axios.post(API_URL + action);
  return response.data;
}
