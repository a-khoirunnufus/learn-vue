<template>
  <div class="postlist-wrapper">
    <p class="title">Posts</p>
    <ul class="list-wrapper">
      <li class="post-wrapper">
        <span class="avatar">LG</span>
        <div class="post-title">
          <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
        </div>
      </li>
      <li class="post-wrapper">
        <span class="avatar">LG</span>
        <div class="post-title">
          <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
        </div>
      </li>
      <li class="post-wrapper">
        <span class="avatar">LG</span>
        <div class="post-title">
          <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
        </div>
      </li>
      <li class="post-wrapper">
        <span class="avatar">LG</span>
        <div class="post-title">
          <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
        </div>
      </li>
      <li class="post-wrapper">
        <span class="avatar">LG</span>
        <div class="post-title">
          <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
        </div>
      </li>
    </ul>
  </div>
  <Pagination />
</template>

<script>
import Pagination from './Pagination.vue'

export default {
  name: 'PostsList',
  components: {
    Pagination
  }
}
</script>

<style>
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
  .post-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: .5rem 1rem;
    transition: all .3s;
  }
  .post-wrapper:hover {
    background-color: rgba(0,0,0,.1);
    cursor: pointer;
  }
  .post-wrapper .avatar {
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
