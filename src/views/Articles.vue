<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="articles">
      <!-- 文章列表 -->
      <ul>
        <li v-for="article in articles" :key="article.id">
          <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
  
      <!-- 分页组件 -->
      <Pagination :total="totalPages" :current="currentPage" @change="handlePageChange" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useArticlesStore } from '@/store/articles' // 假设这是一个Pinia store，管理文章列表状态
  import Pagination from '@/components/Pagination.vue' // 假设这是一个分页组件
  
  export default defineComponent({
    components: {
      Pagination,
    },
    setup() {
      const store = useArticlesStore()
      const currentPage = ref(1)
  
      // 获取文章列表数据
      async function fetchArticles(page: number) {
        await store.fetchArticles(page)
      }
  
      // 分页改变时重新获取数据
      function handlePageChange(page: number) {
        currentPage.value = page
        fetchArticles(page)
      }
  
      fetchArticles(currentPage.value)
  
      return {
        articles: store.articles,
        totalPages: store.totalPages,
        currentPage,
        handlePageChange,
      }
    },
  })
  </script>