import useModule from './user'
import { readonly } from 'vue'
import GlobalModule from './global'

export default readonly({
  users: useModule,
  Global: GlobalModule
})
