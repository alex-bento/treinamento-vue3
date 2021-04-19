<template>
  <component :is="name" v-bind="$props"></component>
</template>

<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'
import Chat from './Chat.vue'
import Close from './Close.vue'
import Back from './Back.vue'
import Attention from './Attention'
import Check from './Check'
export default {
  components: { Loading, Copy, ChevronDown, Chat, Close, Back, Attention, Check },
  props: {
    name: { type: String, required: true }
  }
}
</script>

<style>

</style>
