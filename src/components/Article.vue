<template>
  <div class="article-wrapper">
    <div v-if="loading">Loading ...</div>
    <div v-else>
      <p v-if="error">Something error!</p>
      <div v-if="post">
        <p class="article-title">{{ post.title }}</p>
        <div class="author-wrapper">
          <span class="avatar">{{ getInitialName }}</span>
          <div class="author-name">
            <span>{{ user.name }}</span>
          </div>
        </div>
        <article>{{ post.body }}</article>
      </div>
      <div v-else>Post not found</div>
    </div>
    <router-link to="/" class="back-link">← BACK</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Article',
  data() {
    return {
      post: ref(null),
      error: ref(null),
      user: ref(null),
      loading: ref(false)
    }
  },
  computed: {
    getInitialName() {
      if(this.user) {
        const listWord = this.user.name.split(" ")
        return `${listWord[0][0]}${listWord[1][0]}`.toUpperCase()
      }
      return 'A'
    }
  },
  mounted() {
    this.loading = true
    this.fetchPost()
      .then(res => {
        const {post, user} = res
        this.post = post
        this.user = user
        console.log(this.post, this.user)
      })
      .catch(err => {
        this.error = err
        console.error(this.error)
      })
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    fetchPost() {
      return new Promise((resolve, reject) => {
        const postId = this.$route.params.id
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then(res => res.json())
          .then(post => {
            const userId = post.userId
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
              .then(res => res.json())
              .then(user => {
                resolve({post, user})
              })
              .catch(err => {
                throw new Error(err)
              })
          })
          .catch(err => {
            console.error(err)
            reject(err)
          })
      })
    }
  }
}
</script>

<style>
  .article-wrapper {
    margin: 0 auto;
    max-width: 600px;
    flex-grow: 1;
  }
  .article-title {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin: 2rem 0 1rem 0;
  }
  article {
    font-size: 1rem;
    line-height: 32px;
    margin-bottom: 1rem;
  }
  .author-wrapper {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }
  .author-wrapper .avatar {
    margin-right: .5rem;
    display: inline-block;
    padding: .5rem;
    color: #ffffff;
    background-color: rgba(0,0,0,.4);
    border-radius: 2rem;
    font-weight: 700;
    font-size: .75rem;
    margin-left: auto;
  }
  .author-wrapper .author-name {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
</style>
