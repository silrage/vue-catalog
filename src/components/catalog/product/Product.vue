<script>
import { state, actions } from '@store'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
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
    return this.data
      ? <div class="product">
          <div class="product__info">
            <picture>
              <img
                class="product__image"
                src={`/assets/catalog/${this.data.image}`}
                width="100%" height="auto"
              />
            </picture>
            <div class="product__name">{this.data.name}</div>
          </div>
          <button onClick={e => this.onAdd(e)}>Add</button>
          <button onClick={e => this.onRemove(e)}>Remove</button>
        </div>
      : null
  }
}
</script>

<style lang="stylus">
.product
  display inline-block
  margin-left $spaceX2
  &__image
    max-width 320px
    height 400px

  & + .product
    margin-top $spaceX4
</style>
