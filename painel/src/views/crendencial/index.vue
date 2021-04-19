<template>
  <div>
   <div class="flex justify-center w-full h-28 bg-brand-main">
       <Headerlogged />
   </div>
   <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
       <h1 class="text-4xl font-black text-gray-800">Crendeciais</h1>
       <p class="text-lg font-regular text-gray-800 text-center">
          Guia de instalação e geração de suas credenciais
       </p>
   </div>

   <div class="flex justify-center w-full h-full">
     <div class="flex flex-col w-4/5 max-w-6xl py-10">
      <h1 class="text-3xls font-black text-brand-darkgray">
        Instalação e configuração
      </h1>
      <p class="mt-10 text-lg text-gray-800 font-regular">
        Este aqui é a sua chave de api
      </p>
      <ContentLoader
        v-if="store.Global.isLoading || state.isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />
      <div v-else class="flex py-3 pl-5  mt-2 rounded items-center justify-between bg-brand-gray w-full lg:w-1/2">
        <span v-if="state.hasError">Erro ao carregar a apiKey</span>
        <span v-else id="apiKey" > {{ store.users.currentUser.apiKey }} </span>
        <div class="flex ml-20 mr-5" v-if="!state.hasError">
            <icon
              @click="handleCopy"
              name="copy"
              :color="brandColor.graydark"
              size="24"
              class="cursor-pointer"
            />
            <icon id="generete_apiKey"
              @click="hangleGenerateApiKey"
              name="loading"
              :color="brandColor.graydark"
              size="24"
              class="cursor-pointer ml-3"
            />
          </div>
      </div>

        <p class="mt-5 text-lg text-gray-800 font-regular">
          Coloque o script abaixo no seu site para começar a receber feedbacks
        </p>

        <ContentLoader
          v-if="store.Global.isLoading || state.isLoading"
          class="rounded"
          width="600px"
          height="50px"
        />
        <div v-else class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray  w-full lg:w-2/3 overflow-x-scroll">
          <span v-if="state.hasError">Erro ao carregar o script</span>
          <pre v-else>
&lt;:script
  defer
  async
  onload="init('{{store.users.currentUser.apiKey}}')"
  src="http://alex-bento-feedbacer-widget.netlify.app/init.js"
&gt;&lt;/script>&gt;
        </pre>
        </div>
     </div>
   </div>
  </div>
</template>

<script>
import Headerlogged from '../../components/Headerlogged'
import useStore from '../../hooks/useStore'
import palette from '../../../palette'
import Icon from '../../components/icon'
import ContentLoader from '../../components/ContentLoader'
import { reactive, watch } from 'vue'
import service from '../../serve'
import { setApiKey } from '../../store/user'
import { useToast } from 'vue-toastification'
export default {

  components: { Headerlogged, Icon, ContentLoader },

  setup () {
    const store = useStore()
    const toast = useToast()
    const state = reactive({
      hasError: false,
      isLoading: false
    })

    watch(() => store.users.currentUsers, () => {
      if (!store.Global.isLoading && !store.users.currentUser.apiKey) {
        handleError(true)
      }
    })

    function handleError (error) {
      state.isLoading = false
      state.hasError = !!error
    }

    async function hangleGenerateApiKey () {
      try {
        state.isLoading = true
        const { data } = await service.users.genereteApiKey()

        setApiKey(data.apiKey)
        state.isLoading = false
      } catch (error) {
        handleError(error)
      }
    }

    async function handleCopy () {
      toast.clear()
      try {
        await navigator.clipboard.writeText(store.users.currentUser.apiKey)
        toast.success('Copiado')
      } catch (error) {
        handleError(error)
      }
    }

    return {
      state,
      store,
      hangleGenerateApiKey,
      handleCopy,
      brandColor: palette.brand
    }
  }
}
</script>

<style>

</style>
