<template>
  <div id="main">
    <div class="card" v-for="post in posts" :key="post.id">
      <img :src="post.img.url" alt="" class="cardImg" />
      <div class="info">
        <i class="icon pi pi-star like"></i>
        <i class="icon pi pi-star-fill like"></i>
        <p>{{ post.likes }} stars</p>
      </div>
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";
import { getPosts } from "../services/strapiService.js";
import "primeicons/primeicons.css";

export default {
  data() {
    return {
      posts: [],
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },

  async mounted() {
    try {
      let getP = await getPosts();
      this.posts = getP.data;
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
    feather.replace();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}
.card {
  display: flex;
  background-color: #c6dea6;
  width: 500px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 16px;
}

.cardImg {
  height: 260px;
  align-self: stretch;
  border-radius: 8px;
  object-fit: cover;
}

.info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.like {
  cursor: pointer;
  transition: color 0.2s;
  font-size: 30px;
}

.like:hover {
  fill: #7a6263;
}
</style>
