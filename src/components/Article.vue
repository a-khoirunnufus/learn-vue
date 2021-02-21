<template>
  <div class="article-wrapper">
    <p class="article-title">An Article</p>
    <article>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</article>
    <router-link to="/" class="back-link">← BACK</router-link>
  </div>
</template>

<script>
export default {
  name: 'Article'
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
    margin: 2rem 0;
  }
  article {
    font-size: 1rem;
    line-height: 32px;
    margin-bottom: 1rem;
  }
</style>
