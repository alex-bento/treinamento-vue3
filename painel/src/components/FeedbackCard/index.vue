<template>
    <div @click="handleToggle" class="flex flex-col px-8 py-6 cursor-pointer bg-brand-gray">
        <div class="flex items-center justify-between w-full mb-8">
            <badge :type="feedback.type" />
            <span class="font-regular text-brand-graydark">
                {{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}
            </span>
        </div>
        <div class="text-lg font-medium text-gray-800">
          {{ feedback.text }}
        </div>
        <div
          :class="{animate__fadeOutUp: state.isClose}"
          class="flex mt-8 animate__animated am nimate__fadeInup animate__faster"
          v-if="state.isOpen">
          <div class="flex flex-col w1/2">
            <div class="flex flex-col">
              <span class="font-bold text-gray-400 uppercase select-none">Página</span>
              <span class="font-medium text-gray-700 ">{{ feedback.page }}</span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-gray-400 uppercase select-none">Dispositivo</span>
              <span class="font-medium text-gray-700">{{ feedback.divece }}</span>
            </div>
          </div>

          <div class="flex flex-col w1/2">
            <div class="flex flex-col">
              <span class="font-bold text-gray-400 uppercase select-none">Usuário</span>
              <span class="font-medium text-gray-700 ">{{ feedback.fingerprint }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-8" v-if="!state.isOpen" >
          <icon name="chevron-down" size="24"  :color="brandColors.graydark"/>
        </div>
    </div>
</template>

<script>
import Icon from '../icon'
import Badge from './Badge'
import { getDiffTimeBetweenCurrentDate } from '../../utils/data'
import palette from '../../../palette'
import { reactive } from 'vue'
import { wait } from '../../utils/timeout'
export default {
  components: { Badge, Icon },
  props: {
    isOpened: { type: Boolean, default: false },
    feedback: { type: Object, required: true }
  },
  setup (props) {
    const state = reactive({
      isOpen: props.isOpened,
      isClose: !props.isOpened
    })
    async function handleToggle () {
      state.isClose = true

      await wait(250)
      state.isOpen = !state.isOpen
      state.isClose = false
    }
    return {
      state,
      handleToggle,
      getDiffTimeBetweenCurrentDate,
      brandColors: palette.brand
    }
  }
}
</script>
