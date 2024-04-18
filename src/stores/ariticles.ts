import { defineStore } from 'pinia'
import axios from 'axios'

interface Article {
  id: number
  title: string
  content: string
  // 其他文章属性...
}

interface ArticleDetail extends Article {
  author: string
  publishedAt: Date
  // 其他详细属性...
}

interface ArticleListState {
  articles: Article[]
  totalPages: number
  currentPage: number
  articleDetail?: ArticleDetail
}

export const useArticlesStore = defineStore('articles', {
  state: (): ArticleListState => ({
    articles: [],
    totalPages: 1,
    currentPage: 1,
    articleDetail: undefined,
  }),
  actions: {
    async fetchArticles(page: number) {
      const response = await axios.get('/api/articles', { params: { page } })
      this.articles = response.data.items
      this.totalPages = response.data.totalPages
      this.currentPage = page
    },
    async fetchArticleDetail(id: number) {
      const response = await axios.get(`/api/articles/${id}`)
      this.articleDetail = response.data
    },
  },
})