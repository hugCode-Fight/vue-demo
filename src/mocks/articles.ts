import Mock from 'mockjs'

const articlesData = Mock.mock({
  'items|10': [
    {
      id: '@increment',
      title: '@sentence(10, 20)',
      excerpt: '@paragraph(1, 2)',
      slug: '@guid',
      publishedAt: '@datetime',
      authorName: '@cname',
      // 其他属性...
    },
  ],
  totalPages: 1,
  currentPage: 1,
})

export default {
  '/api/articles': (config) => {
    const { page = 1 } = config.query
    const startIndex = (page - 1) * 10
    const endIndex = page * 10
    const result = {
      items: articlesData.items.slice(startIndex, endIndex),
      totalPages: articlesData.totalPages,
      currentPage: page,
    }
    return {
      code: 200,
      data: result,
    }
  },
  '/api/articles/:slug': (config) => {
    const { slug } = config.params
    const article = articlesData.items.find((item) => item.slug === slug)
    if (!article) {
      return {
        code: 404,
        message: 'Article not found',
      }
    }
    return {
      code: 200,
      data: article,
    }
  },
}