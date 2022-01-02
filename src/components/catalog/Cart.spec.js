import Cart from './Cart.vue'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Cart.vue', () => {
  const wrapper = mount(Cart)

  it('Should be a render and mount', () => {
    expect(wrapper.getComponent(Cart).exists()).to.be.true
  })
})
