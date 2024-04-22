<template>
  <div class="pagination">
    <button v-if="hasPrevPage" @click="goToPage(current - 1,pageSize)">上一页</button>
    <button v-for="page in displayedPages" :key="page" :class="{ active: page === current }" @click="goToPage(page,pageSize)">
      {{ page }}
    </button>
    <button v-if="hasNextPage" @click="goToPage(current + 1,pageSize)">下一页</button>
  </div>
  <div class="page-size-selector">
    <label for="pageSizeSelect">每页显示：</label>
    <select id="pageSizeSelect" :value="pageSize"  @change="onPageSizeSelected">
      event.target
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <!-- 可以根据需要添加更多选项 -->
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
/*import { defineComponent } from 'vue';
import type { PropType } from 'vue';*/

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
    pageSize: {
      type: Number,
      default: 2,
    },
    // 可选配置项，如每页显示的页码数、最大可见页码数等
    // ...other pagination options
  },
  emits: ['change'],
  computed: {
    displayedPages(): number[] {
      // 根据总页数和当前页计算并返回应该显示的页码数组
      // 可能考虑分页间隔、省略号等优化展示效果

      const visibleRange = 5; // 假设每侧显示2个页码，加上当前页共5个
      const start = Math.max(1, this.current - visibleRange / 2);
      const end = Math.min(this.total, this.current + visibleRange / 2);

      // 使用Array.from创建指定长度的数组，填充页码
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    hasPrevPage(): boolean {
      // 返回是否存在上一页
      return this.current > 1;
    },
    hasNextPage(): boolean {
      // 返回是否存在下一页
      return this.current < this.total;
    },
  },
  methods: {
    goToPage(page: number,pageSize:number) {
      // 1. 检查是否为整数
      if (!Number.isInteger(page)) {
        return;
      }

      // 2. 检查是否在有效范围内（通常为 1 到 totalPages）
      if (page < 1 || page > this.total) {
        return;
      }

      // 3. 如果上述条件都满足，则认为页面有效，触发 change 事件
      this.$emit('changePage', page,pageSize);
    },
    onPageSizeSelected(event: Event) {
      const target = event.target as HTMLSelectElement | null;
      let newPageSize: number | null = null;

      if (target) {
        newPageSize = parseInt(target.value);
      }

      if (newPageSize === null) {
        newPageSize = 2; // 当 event.target 为 null 或解析出的值无效时，赋值为 2
      }
      this.$emit('changePage', this.current,newPageSize);
    }
  },
})
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 20px 0;
}
.pagination button {
  cursor: pointer;
  border: none;
  background-color: #f2f2f2;
  color: #333;
  font-size: 14px;
  line-height: 80px;
  height: 40px;
  min-width: 40px;
  text-align: center;
  margin: 0 0.5px;
  outline: none;
  transition: background-color 0.2s ease;
}
.pagination button.active {
  background-color: #007bff;
  color: #fff;
}
</style>