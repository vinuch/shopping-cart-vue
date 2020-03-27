<template>
  <div class="home">
    <div class="columns is-centered is-vcentered">
      <CartList/>
      <ProductList/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CartList from '@/components/CartList'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    CartList,
    ProductList,
  }
}
</script>

<style>
  .home {
    padding-top: 8rem;
  }

  div.home div.columns {
    margin: 0;
  }
</style>