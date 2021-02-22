<template>
  <div class="postlist-wrapper">
    <p class="title">Posts</p>
    <p v-if="loading">Loading ...</p>
    <div v-else>
      <ul class="list-wrapper">
        <li class="post-wrapper" v-for="post in viewedPosts" :key="post.id" >
          <router-link :to="{ name: 'article', params: {id: post.id} }">
          <span class="avatar">{{ post.title[0].toUpperCase() + post.title[1].toUpperCase() }}</span>
          <div class="post-title">
            <span>{{ post.title }}</span>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <Pagination />
</template>

<script>
import { ref } from 'vue'
import Pagination from './Pagination.vue'

export default {
  name: 'PostsList',
  components: {
    Pagination
  },
  data() {
    return {
      posts: ref(null),
      pageNumber: ref(0),
      viewedPosts: ref(null),
      loading: ref(false),
      error: ref(null)
    }
  },
  mounted() {
    this.loading = true
    this.fetchPosts()
      .then(res => {
        this.posts = res
      })
      .catch(err => {
        this.error = err
      })
      .finally(() => {
        this.pageNumber = 1
        this.loading = false
      })
  },
  watch: {
    pageNumber: 'getViewedPosts'
  },
  methods: {
    fetchPosts() {
      return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(users => {
            resolve(users)
          })
          .catch(err => {
            reject(err)
            console.error(err)
          })
      })
    },
    getViewedPosts() {
      let from = this.pageNumber * 5 - 5
      let to = this.pageNumber * 5
      this.viewedPosts = this.posts.slice(from, to)
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: rgb(0,0,0);
  }
  .postlist-wrapper {
    width: 600px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }
  .list-wrapper {
    list-style: none;
    margin-top: 2rem;
  }
  .post-wrapper a{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: .5rem 1rem;
  }
  .post-wrapper:hover {
    background-color: rgba(0,0,0,.1);
    cursor: pointer;
  }
  .avatar {
    margin-right: 1rem;
    display: inline-block;
    padding: 1rem;
    color: #ffffff;
    background-color: rgba(0,0,0,.4);
    border-radius: 3rem;
    font-weight: 700;
    font-size: 1.25rem;
  }
  .post-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .post-title span{
    text-transform: uppercase;
  }
</style>
