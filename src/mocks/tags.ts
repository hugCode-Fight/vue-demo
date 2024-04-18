import Mock from 'mockjs'

const tagsData = Mock.mock({
  'items|5': [
    {
      id: '@increment',
      name: '@word(3, 5)',
      slug: '@guid'
      // 其他属性...
    }
  ]
})

export default {
  '/api/tags': () => {
    return {
      code: 200,
      data: tagsData.items
    }
  }
}
