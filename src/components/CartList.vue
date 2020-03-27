<template>

  <div id="cart">
    <div class="cart--header has-text-centered"> <i class="fa fa-2x fa-shopping-cart"></i></div> 
    <ul>
      <li class="cart-item" v-for="(cartItem, index) in cartItems" :key="index"> 
       <cartListItem :cartItem="cartItem"/>
      </li>
      <div class="cart-details">
        <p class="is-inline">Total Quantity: <span class="has-text-weight-bold">2</span></p> <p class="cart-remove-all--text is-inline is-pulled-right">
        <i class="fa fa-trash"></i>Remove all </p>
      </div> 
    </ul>

    <button class="button is-primary">
    Checkout (<span class="has-text-weight-bold">$</span>)
    </button> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cartListItem from '@/components/cartListItem'

export default {
  name: 'CartList',
  props: {
    msg: String
  },
  components: {
    cartListItem
  },
  computed: {
    ...mapGetters([
      'cartItems',
      'cartTotal',
      'cartQuantity'
    ])
  },
  created() {
    this.$store.dispatch('getCartItems')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cart {
  padding: 0 3rem;
}
.cart--header {
  padding: 4rem 0 1rem;
  border-bottom: 1px solid #c5c7c6;
}
.cart-item--title {
  margin-right: 3rem;
}
.cart-details {
    padding: 15px;
    font-size: .8rem;
}
.cart-item {
    line-height: 1.8rem;
}
.button {
  width: 100%;
}
</style>
