<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="tags">
      <h1>Tags</h1>
      <ul>
        <li v-for="tag in tags" :key="tag.id">{{ tag.name }}</li>
      </ul>
      <!-- 其他标签相关功能，如标签云、筛选文章等 -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useTagsStore } from '@/store/tags' // 假设这是一个Pinia store，管理标签信息
  
  export default defineComponent({
    setup() {
      const tagStore = useTagsStore()
  
      return {
        tags: tagStore.tagsList,
      }
    },
  })
  </script>