<template>
   <div>
      <p class="cart-item--title is-inline">{{ cartItem.title }}</p>
      <div class="is-pulled-right">
        <span @click="addCartItem(cartItem)"><i class="fa fa-arrow-circle-up cart-item--modify" ></i></span>
        <span @click="removeCartItem(cartItem)"><i class="fa fa-arrow-circle-down cart-item--modify"></i></span>
      </div>
      <div class="cart-item--content"> 
        <span class="cart-item--price has-text-primary has-text-weight-bold">
          {{ cartItem.price }} each
        </span>
        <span class="cart-item--quantity has-text-grey is-pulled-right">
          Quantity: {{ cartItem.quantity }}
        </span> 
      </div>
    </div> 
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'cartListItem',
    props: [
      'cartItem'
    ],
    methods: {
      console() {
        console.log('hi')
      },
      ...mapActions([
        'addCartItem',
        'removeCartItem'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>