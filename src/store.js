import Vue from 'vue'

const logger = (...args) => console.log(
  `ev:${args[0]}`, // event message
  ...args.splice(1)
)

export const state = Vue.observable({
  product: {
    name: 'Sample',
    count: 0
  },
  listProducts: []
})

export const getters = {
  products: () => state.listProducts,
}

export const mutations = {
  addToCartEvent: product => state.listProducts.push(product),
  removeFromCartEvent: product => {
    if (state.listProducts.indexOf(product) > -1) {
      state.listProducts.splice(state.listProducts.indexOf(product), 1)
    }
  },
  clearCartEvent: () => state.listProducts = []
}

export const actions = {
  addToCart: (product = { count: 0 }) => {
    mutations.addToCartEvent(product) // @TODO fix uniq count
    logger('addToCart', product, product.count)
  },
  removeFromCart: product => {
    mutations.removeFromCartEvent(product)
    logger('removeFromCart', product, state.listProducts)
  },
  clearCart: () => {
    mutations.clearCartEvent()
    logger('clearCart')
  }
}
