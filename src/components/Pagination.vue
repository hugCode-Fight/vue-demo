<template>
  <div class="pagination">
    <button v-if="hasPrevPage" @click="goToPage(currentPage - 1)">上一页</button>
    <button v-for="page in displayedPages" :key="page" :class="{ active: page === currentPage }" @click="goToPage(page)">
      {{ page }}
    </button>
    <button v-if="hasNextPage" @click="goToPage(currentPage + 1)">下一页</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    // 可选配置项，如每页显示的页码数、最大可见页码数等
    // ...other pagination options
  },
  emits: ['change'],
  computed: {
    displayedPages(): number[] {
      // 根据总页数和当前页计算并返回应该显示的页码数组
      // 可能考虑分页间隔、省略号等优化展示效果
    },
    hasPrevPage(): boolean {
      // 返回是否存在上一页
    },
    hasNextPage(): boolean {
      // 返回是否存在下一页
    },
  },
  methods: {
    goToPage(page: number) {
      // 1. 检查是否为整数
      if (!Number.isInteger(page)) {
        return;
      }

      // 2. 检查是否在有效范围内（通常为 1 到 totalPages）
      if (page < 1 || page > this.total) {
        return;
      }

      // 3. 如果上述条件都满足，则认为页面有效，触发 change 事件
      this.$emit('change', page);
    },
  },
})
</script>

<style scoped>
.pagination {
  /* 添加样式 */
}
.pagination button {
  /* 添加样式 */
}
.pagination button.active {
  /* 添加样式 */
}
</style>