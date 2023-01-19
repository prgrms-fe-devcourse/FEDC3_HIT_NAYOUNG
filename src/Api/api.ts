import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kdt.frontend.3rd.programmers.co.kr:5001',
});

export default api;
