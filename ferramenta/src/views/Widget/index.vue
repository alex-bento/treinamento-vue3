<template>
  <teleport to="body">
    <component
      @open-box="hangleOpenBox"
      @close-box="hangleCloseBox"
      :is="state.component"
      />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, watch, reactive } from 'vue'
import Standby from './Standby.vue'
import Box from './Box.vue'
import useIframeControl from '../../hooks/iframe'
import useStore from '../../hooks/store'

type State = {
  component: string;
}

interface SetupReturn {
  state: State;
  hangleOpenBox(): void;
  hangleCloseBox(): void;
}

export default defineComponent({
  components: { Standby, Box },
  setup (): SetupReturn {
    const store = useStore()
    const iframe = useIframeControl()
    const state = reactive<State>({
      component: 'Standby'
    })

    watch(() => store.currentComponent, () => {
      iframe.updateCoreValuesOnStore()
    })

    function hangleOpenBox (): void {
      state.component = 'Box'
      iframe.notifyOpen()
    }
    function hangleCloseBox (): void {
      state.component = 'Standby'
      iframe.notifyClose()
    }

    return {
      state,
      hangleOpenBox,
      hangleCloseBox
    }
  }
})
</script>
