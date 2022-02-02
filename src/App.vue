<script>
import Project from '../package.json'
import MessageBox from './components/MessageBox.vue'
import '@catalog' // Dynamic components
import catalogItems from '@catalog/list.js'
import './global.styl'

export default {
  data() {
    return {
      appName: `Project: ${Project.name}`,
      appVersion: `ver ${Project.version}`,
      greeting: 'Kitties catalog',
      data: catalogItems
    }
  },
  render() {
    const renderProducts = () => this.data
      .map(item => <Product data={{
        name: item,
        image: `${item}.jpg`
      }}/>)
    return <div class="app">
      <div class="wrap">
        <Cart class="cart--top" />
        <div class="box">
          <h1>{this.greeting}</h1>
          <MessageBox
            class="inline"
            msg={`${this.appName} | ${this.appVersion}`}
            level="info"
          />
          <div class="boxX2"></div>
          <div class="lessX2">
            {renderProducts()}
          </div>
        </div>
      </div>
    </div>
  }
}
</script>
