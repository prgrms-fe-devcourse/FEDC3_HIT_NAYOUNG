import axios from 'axios';

const api = axios.create({
  baseURL: 'http://kdt.frontend.3rd.programmers.co.kr:5001',
});

export default api;
