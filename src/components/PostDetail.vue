<template>
    <article class="post-detail">
      <h1>{{ post.title }}</h1>
      <div v-html="post.content"></div>
      <footer>
        <span>Published on {{ post.publishedAt }}</span>
        <span>By {{ post.authorName }}</span>
      </footer>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent, inject, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from '@/store/posts' // 假设这是一个Pinia store，管理文章详情
  
  export default defineComponent({
    setup() {
      const route = useRoute()
      const postStore = useStore()
  
      onMounted(async () => {
        const slug = route.params.slug
        await postStore.fetchPostDetail(slug)
      })
  
      return {
        post: postStore.postDetail,
      }
    },
  })
  </script>
  
  <style scoped>
  .post-detail {
    border: 1px solid #ccc;
    padding: 1rem;
  }
  
  h1 {
    margin-top: 0;
  }
  
  footer {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  span {
    margin-right: 0.5rem;
  }
  </style>