import Mock from 'mockjs'

const authorData = Mock.mock({
  id: '@increment',
  name: '@cname',
  bio: '@paragraph(1, 2)',
  // 其他属性...
})

export default {
  '/api/authors': () => {
    return {
      code: 200,
      data: authorData,
    }
  },
}