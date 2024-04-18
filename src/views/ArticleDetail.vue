<template>
    <div class="article-detail">
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
      <!-- 其他文章详情信息，如作者、发布时间、分类、评论等 -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, inject, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useArticlesStore } from '@/store/articles'
  
  export default defineComponent({
    setup() {
      const route = useRoute()
      const articleStore = useArticlesStore()
  
      onMounted(async () => {
        const articleId = Number(route.params.id)
        await articleStore.fetchArticleDetail(articleId)
      })
  
      return {
        article: articleStore.articleDetail,
      }
    },
  })
  </script>