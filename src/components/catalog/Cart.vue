<script>
import { getters, actions } from '../../store'

export default {
  data() {
    return { 
    }
  },
  computed: {
    ...getters,
    isEmptyCart() {
      return this.products.length === 0
    }
  },
  methods: {
    ...actions,
    clearCart() {
      actions.clearCart()
    }
  },
  render() {
    const listRender = this.isEmptyCart
      ? <span>Empty cart</span>
      : <span>{this.products.length}</span>
    const clearRender = !this.isEmptyCart
      ? <button onClick={e => this.clearCart(e)}>Clear</button>
      : null

    return <div class="cart">
      {listRender}
      {clearRender}
    </div>
  }
}
</script>
