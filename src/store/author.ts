import { defineStore } from 'pinia'
import axios from 'axios'

interface AuthorInfo {
  id: number
  name: string
  bio: string
  // 其他作者属性...
}

export const useAuthorStore = defineStore('author', {
  state: (): { authorInfo: AuthorInfo | null } => ({
    authorInfo: null,
  }),
  actions: {
    async fetchAuthorInfo() {
      const response = await axios.get('/api/authors')
      this.authorInfo = response.data
    },
  },
})