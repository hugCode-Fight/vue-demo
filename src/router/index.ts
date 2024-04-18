import { createRouter, createWebHistory } from 'vue-router'
import Articles from '@/views/Articles.vue' // 假设这是文章列表页组件
import ArticleDetail from '@/views/ArticleDetail.vue' // 假设这是文章详情页组件
import Author from '@/views/Author.vue' // 假设这是作者信息页组件
import Tags from '@/views/Tags.vue' // 假设这是分类标签页组件

const routes = [
  {
    path: '/', // 主页，通常重定向到文章列表页
    redirect: '/articles',
  },
  {
    path: '/articles', // 文章列表页
    component: Articles,
  },
  {
    path: '/article/:id', // 文章详情页，`:id`代表动态路由参数
    component: ArticleDetail,
    props: true, // 将路由参数作为props传递给组件
  },
  {
    path: '/author', // 作者信息页
    component: Author,
  },
  {
    path: '/tags', // 分类标签页
    component: Tags,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router