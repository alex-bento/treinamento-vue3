<template>
  <div>
    <Header
      @create-account="handleAccountCreate"
      @login="handleLogin"
    />
    <Contatc />
    <div class="flex justify-center py-10 bg-brand-gray">
      <p class="font-medium text-center text-gray-800">
        feedback @ 2021 <br class="hidden lg:inline-block">
        Copyright - Alex Bento
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Contatc from './Contatc.vue'
import Header from './Header.vue'
import useModal from '../../hooks/useModal'
export default {
  components: { Contatc, Header },
  setup () {
    const router = useRouter()
    const modal = useModal()
    onMounted(
      () => {
        const token = window.localStorage.getItem('token')
        if (token) {
          router.push({ name: 'Feedbacks' })
        }
      })
    function handleLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }
    function handleAccountCreate () {
      modal.open({
        component: 'ModalCreate'
      })
    }
    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
