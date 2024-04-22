<template>
    <div class="article-detail">

      <h1>{{ st.title }}</h1>
      <p>{{ st.content }}</p>
      <!-- 其他文章详情信息，如作者、发布时间、分类、评论等 -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineComponent, inject, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useArticlesStore } from '@/store/articles'

  const route = useRoute()
  const articleStore = useArticlesStore()
  console.log(articleStore)
const st = articleStore.articles[0]
  onMounted(async () => {
    const articleId = Number(route.params.id)
    await articleStore.fetchArticleDetail(articleId)
  })

  </script>