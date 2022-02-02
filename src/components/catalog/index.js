import Vue from 'vue'

Vue.component('Cart', () => import('@catalog/cart/Cart.vue'))
Vue.component('Product', () => import('@catalog/product/Product.vue'))
