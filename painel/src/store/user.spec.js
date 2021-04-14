import useStore from '../hooks/useStore'
import { setCurrent, resetUserStore, setApiKey, cleanCurrentUser } from './user'

describe('UserStore', () => {
    afterEach(() => {
        resetUserStore()
    })
    it('should set currenr user', () => {
        const store = useStore()
        setCurrent({name: 'Alex' })
        expect(store.users.currentUser.name).toBe('Alex')
    }) 

    it('shoul set api_key on current user', () => {
        const store = useStore()
        setApiKey('1234')
        expect(store.users.currentUser.apiKey).toBe('1234')
    })

    it('should clean current user', () => {
        const store = useStore()
        setCurrent({name: 'Alex' })
        expect(store.users.currentUser.name).toBe('Alex')
        cleanCurrentUser()
        expect(store.users.currentUser.name).toBeFalsy()
    }) 
})