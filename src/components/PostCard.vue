<template>
    <article class="post-card">
      <h2><router-link :to="{ name: 'PostDetail', params: { slug: post.slug } }">{{ post.title }}</router-link></h2>
      <p>{{ post.excerpt }}</p>
      <footer>
        <span>Published on {{ post.publishedAt }}</span>
        <span>By {{ post.authorName }}</span>
      </footer>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from '@/store/posts' // 假设这是一个Pinia store，管理文章列表
  
  export default defineComponent({
    props: {
      post: {
        type: Object as PropType<Post>,
        required: true,
      },
    },
  })
  </script>
  
  <style scoped>
  .post-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  h2 {
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