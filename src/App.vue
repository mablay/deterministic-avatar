<template>
  <div>
    <input v-model="text" type="text">
    <div class="app">
      <avataaars v-if="options" v-bind="options"></avataaars>
    </div>
    <pre>{{options}}</pre>
  </div>
</template>

<script>
import Avataaars from 'vuejs-avataaars'
import { avatarHash } from './avatar.js'

export default {
  components: {
    Avataaars
  },
  data: () => ({
    text: 'foo',
    options: null
  }),
  watch: {
    async text () {
      this.update()
    }
  },
  methods: {
    async update () {
      this.options = await avatarHash(this.text)
    }
  },
  mounted () {
    this.update()
  }
}
</script>

<style scoped>
.app {
  width: 320px;
}
</style>