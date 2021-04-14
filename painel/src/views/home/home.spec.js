import { createRouter, createWebHistory } from 'vue-router'
import Home from '.'
import { shallowMount } from '@vue/test-utils'
import { routes } from '../../router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<home />', () => {
  it('should render home correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapeer = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapeer.html()).toMatchSnapshot()
  })
})
