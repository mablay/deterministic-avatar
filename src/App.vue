<template>
  <div class="app-container">
    <div class="app">
      <div class="avatar-container">
        <avataaars
          v-if="options"
          v-bind="options"
        />
      </div>
      <input
        autofocus
        class="input"
        v-bind:value="text"
        v-on:input="update($event.target.value)"
        type="text"
      >

      <LinkCredits />
    </div>  
  </div>


</template>

<script>
import Avataaars from 'vuejs-avataaars'
import LinkCredits from './components/LinkCredits.vue'
import { avatarHash } from './avatar.js'

export default {
  components: {
    Avataaars,
    LinkCredits
  },
  data: () => ({
    text: '',
    options: null
  }),
  methods: {
    async update (text) {
      this.text = text
      this.options = await avatarHash(this.text)
    }
  },
  mounted () {
    this.update('')
    setTimeout(() => this.update('f'), 200)
    setTimeout(() => this.update('fo'), 400)
    setTimeout(() => this.update('foo'), 600)
  }
}
</script>

<style scoped>
.app-container {
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
}
input.input {
  width: calc(100% - 12px);
  font-size: 32px;
  line-height: 32px;
  border-radius: 8px;
  padding: 6px;
  border: unset;
}
pre {
  color: white;
}
.app {
  width: 320px;
  height: 100%;
  margin: auto;
}
.avatar-container {
  padding-bottom: 12px;
}

@media (min-height: 780px) {
  .avatar-container {
    padding-top: 100px;
  }
}
</style>