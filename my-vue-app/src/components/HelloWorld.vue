<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      message: 'Loading...',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/endpoint'); // Spring 서버의 엔드포인트를 입력하세요
        this.message = response.data.message;
      } catch (error) {
        console.error('There was an error!', error);
      }
    },
  },
};
</script>