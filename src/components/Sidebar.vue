<template>
    <aside class="sidebar">
      <h2>Categories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="{ name: 'Category', params: { slug: category.slug } }">
            {{ category.name }}
          </router-link>
        </li>
      </ul>
  
      <!-- 其他侧边栏内容，如最近文章、热门标签等 -->
    </aside>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from '@/store/categories' // 假设这是一个Pinia store，管理分类信息
  
  export default defineComponent({
    setup() {
      const categoryStore = useStore()
  
      return {
        categories: categoryStore.categories,
      }
    },
  })
  </script>
  
  <style scoped>
  .sidebar {
    width: 25%;
    min-width: 200px;
    float: right;
    padding: 1rem;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #666;
    text-decoration: none;
  }
  </style>