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
    async fetchArticles(page: number,pageSize:number) {

      const response = await axios.get('/api/articles', { params: { page, pageSize } })
      //打印response的值
      console.log("response的值:",response);
      this.articles = response.data.data.items
      console.log("response.data.data.items的值:",response.data.data.items[0])

      this.totalPages = response.data.data.totalPages
      this.currentPage = page
      console.log("this.articles的值:",this.articles)
      console.log("this.totalPage的值:",this.totalPages)
      console.log("this.currentPage的值:",this.currentPage)
    },
    async fetchArticleDetail(id: number) {
      const response = await axios.get(`/api/articles/${id}`)

      this.articleDetail = response.data.data
    },
  },
})