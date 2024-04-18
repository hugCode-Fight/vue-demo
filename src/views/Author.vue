<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="author">
      <h1>{{ author.name }}</h1>
      <p>{{ author.bio }}</p>
      <!-- 其他作者信息，如头像、社交链接、作品列表等 -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useAuthorStore } from '@/store/author' // 假设这是一个Pinia store，管理作者信息
  
  export default defineComponent({
    setup() {
      const authorStore = useAuthorStore()
  
      return {
        author: authorStore.authorInfo,
      }
    },
  })
  </script>