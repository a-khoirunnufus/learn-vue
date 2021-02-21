import { createRouter, createWebHashHistory } from 'vue-router'
import PostsList from './components/PostsList.vue'
import Article from './components/Article.vue'

const routes = [
  { path: '/',
    name: 'posts',
    component: PostsList },
  { path: '/article',
    name: 'article',
    component: Article }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
