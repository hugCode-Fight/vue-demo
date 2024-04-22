<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="articles">
      <!-- 文章列表 -->
      <span>articles的长度:{{ store.articles.length }}</span>

      <ul>
        <li v-for="article in store.articles" :key="article.id">

          <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>

      <!-- 分页组件 -->
      <Pagination :total="store.totalPages" :current="currentPage" :pageSize="pageSize" @changePage="handlePageChange" />
    </div>

  </template>
  
  <script lang="ts" setup>
  import { defineComponent, onMounted, ref } from 'vue'
  import { useArticlesStore } from '@/store/articles' // 假设这是一个Pinia store，管理文章列表状态
  import Pagination from '@/components/Pagination.vue' // 假设这是一个分页组件
  



      const store = useArticlesStore()
      const currentPage = ref(1)
      const pageSize = ref(2)


  
      // 获取文章列表数据
      /*async function fetchArticles(page: number) {
        await store.fetchArticles(page)
      }*/
      async function fetchArticles(page: number, pageSize: number) {
        await store.fetchArticles(page,pageSize);
        console.log(store.articles)
      }
  
      // 分页改变时重新获取数据
      function handlePageChange(page: number, sizeOfPage: number) {
        currentPage.value = page
        pageSize.value = sizeOfPage
        fetchArticles(page,sizeOfPage)
      }
      onMounted(() => {
        fetchArticles(currentPage.value,pageSize.value);
      });
  </script>