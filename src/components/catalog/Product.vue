<script>
import { state, actions } from '../../store'

export default {
  computed: {
    product() {
      return state.product
    }
  },
  methods: {
    onAdd() {
      const pt = state.product
      pt.count++
      actions.addToCart(pt)
    },
    onRemove() {
      const pt = state.product
      // @TODO - check empty cart
      pt.count--
      actions.removeFromCart(pt)
    }
  },
  render() {
    return <div class="product">
      <button onClick={e => this.onAdd(e)}>Add</button>
      <button onClick={e => this.onRemove(e)}>Remove</button>
    </div>
  }
}
</script>
