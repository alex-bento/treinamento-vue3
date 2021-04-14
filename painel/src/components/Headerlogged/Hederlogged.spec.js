import { shallowMount } from "@vue/test-utils"
import  HeaderLogged from '.'
import { routes } from '../../router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

const mockStore = { currentUser: {} }

    jest.mock('../../hooks/useStore', () => {
        return() => {
           return mockStore
        }
    })

describe('<HeaderLogged />', () => {
    it('should render header logged correctly', async () => {
        router.push('/')
        await router.isReady()
        const wrapper = shallowMount(HeaderLogged,{
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('Should render 3 dots when thre\'s not user logged ', async () => {
        router.push('/')
        await router.isReady()
        const wrapper = shallowMount(HeaderLogged,{
            global: {
                plugins: [router]
            }
        })
        const buttonLogado = wrapper.find('#logout-button')
        expect(buttonLogado.text()).toBe('...')
    })

    it('Should render user anem when there\'s user logged ', async () => {
        router.push('/')
        await router.isReady()
        mockStore.currentUser.name = 'Alex'
        const wrapper = shallowMount(HeaderLogged,{
            global: {
                plugins: [router]
            }
        })
        const buttonLogado = wrapper.find('#logout-button')
        expect(buttonLogado.text()).toBe('Alex (sair)')
    })
})