<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @next="next"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectFeedbackType from './SelectFeedbackType.vue'
import EscreverFeedbacks from './EsvreverFeedback.vue'
import Sucesso from './Sucesso.vue'
import ErrorState from './Error.vue'
import useNavigation, { Navegacao } from '../../hooks/navegacao'
import useStore from '../../hooks/store'
import { setFeedbackType, Storestate } from '../../store'

interface SetupReturn {
  store: Storestate;
  next: Navegacao['next']
  handleSelectFeedbackType(type: string): void;
}
export default defineComponent({
  components: { SelectFeedbackType, EscreverFeedbacks, Sucesso, Error: ErrorState },
  setup (): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedbackType (type: string): void {
      setFeedbackType(type)
    }

    return {
      store,
      next,
      handleSelectFeedbackType
    }
  }
})
</script>
