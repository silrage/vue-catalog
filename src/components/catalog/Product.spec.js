import Product from './Product.vue'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Product.vue', async () => {
  const wrapper = mount(Product)

  it('Should be a render and mount', () => {
    expect(wrapper.getComponent(Product).exists()).to.be.true
  })
})
