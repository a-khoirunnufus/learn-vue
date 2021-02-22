import { createRouter, createWebHistory } from 'vue-router';
import PostsList from './components/PostsList.vue'
import Article from './components/Article.vue'

const routes = [
  { path: '/',
    name: 'posts',
    component: PostsList },
  { path: '/article/:id',
    name: 'article',
    component: Article }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
