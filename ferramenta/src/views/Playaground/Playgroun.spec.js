import { shallowMount } from '@vue/test-utils'
import Playground from './Playground.vue'

describe('<Playground />', () => {
    it('should component render correcty', () => {
        const wrapper = shallowMount(Playground)
       expect(wrapper).toMatchSnapshot()
    })
})