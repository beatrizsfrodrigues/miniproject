<template>
  <div id="main">
    <div class="card" v-for="post in posts" :key="post.id">
      <img :src="post.img.url" alt="" class="cardImg" />
      <div class="info">
        <vue-feather
          type="star"
          class="like"
          @click="likePost(post)"
        ></vue-feather>
        <p>{{ post.likes }} stars</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getPosts, addLike } from "../services/strapiService.js";

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

      this.posts = getP.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

      console.log(this.posts);

      this.$nextTick(() => {
        this.changeFillOnHover();
      });
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  },

  methods: {
    // Function to change fill color on hover
    changeFillOnHover() {
      const elements = document.querySelectorAll(".like");

      elements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          const svg = element.querySelector("svg");
          if (svg) {
            svg.style.fill = "#7a6263"; // Change fill color on hover
          }
        });

        element.addEventListener("mouseleave", () => {
          const svg = element.querySelector("svg");
          if (svg) {
            svg.style.fill = "none"; // Revert fill color after hover
          }
        });
      });
    },

    async likePost(post) {
      try {
        const updatedPost = await addLike(post.documentId, post.likes);
        if (updatedPost) {
          post.likes += 1;
        }

        // Update the like count locally after a successful response
        // this.posts = this.posts.map((p) =>
        //   p.id === post.id ? { ...p, likes: updatedPost.data.likes } : p
        // );
      } catch (error) {
        console.error("Failed to add like:", error);
      }
    },
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
  width: 30px;
  fill: #7a6263 !important;
}

.like:active {
  width: 32px;
}
</style>
