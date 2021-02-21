<template>
  <div class="pagination-wrapper">
    <button>Prev</button>
    <span class="page-number">PAGE 1</span>
    <button>Next</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style>
  .pagination-wrapper {
    flex-grow: 1;
    display: grid;
    margin: 2rem auto 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  button {
    border: none;
    padding: .5rem;
    text-transform: uppercase;
    background-color: rgba(0,0,0,.1);
  }
  button:hover {
    background-color: rgba(0,0,0,.2);
  }
  .page-number {
    padding: .5rem;
    text-align: center;
  }
</style>
