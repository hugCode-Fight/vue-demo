import { defineStore } from 'pinia'
import axios from 'axios'
interface Tag {
  id: number
  name: string
  // 其他标签属性...
}

export const useTagsStore = defineStore('tags', {
  state: (): { tags: Tag[] } => ({
    tags: [],
  }),
  actions: {
    async fetchTags() {
      const response = await axios.get('/api/tags')
      this.tags = response.data
    },
  },
})