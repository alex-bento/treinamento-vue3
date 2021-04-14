<template>
  <div>
      <ModalFactory />
      <router-view />
  </div>
</template>

<script>
import ModalFactory from './components/ModalFactory'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
import services from './serve'
import { setCurrent } from './store/user'

export default {
  components: { ModalFactory },

  setup () {
    const router = useRouter()
    const route = useRoute()

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')

        if (!token) {
          router.push({ name: 'Home' })
          return
        }

        const { data } = await services.users.getMe()
        setCurrent(data)
      }
    })
  }
}
</script>
