import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // Spring 서버의 기본 URL을 입력하세요
});

export default instance;