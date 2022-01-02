<script>
import Project from '../package.json'
import Cart from './components/catalog/Cart.vue'
import MessageBox from './components/MessageBox.vue'
import Product from './components/catalog//Product.vue'

export default {
  components: {
    MessageBox
  },
  data() {
    return {
      appName: `Project: ${Project.name}`,
      greeting: 'Hello world!'
    }
  },
  render() {
    return <div class="app">
      <div class="wrap">
        <h1>{this.appName}</h1>
      </div>
      <MessageBox
        msg={this.greeting}
        level="info"
      />
      <Product />
      <Cart />
    </div>
  }
}
</script>

<style lang="stylus">
/**
 * GLOBAL Styles
 */
html,
body
  margin 0
  padding 0

.wrap
  max-width 1380px
  margin-left auto
  margin-right auto
  padding-left 20px
  padding-right 20px
</style>
