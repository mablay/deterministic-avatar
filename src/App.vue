<template>
  <div class="app-container">
    <div class="app">
      <div class="avatar-container" @click="showOptions = !showOptions">

        <avataaars
          v-if="options && !showOptions"
          v-bind="options"
        />
        <pre v-if="showOptions">         -- click to toggle --

{{options}}</pre>
      </div>
      <input
        autofocus
        class="input"
        v-bind:value="text"
        v-on:input="update($event.target.value)"
        type="text"
      >
      <p>A deterministic avatar is rendered based on your input.</p>
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
    options: null,
    showOptions: false
  }),
  methods: {
    async update (text) {
      this.text = text
      this.options = await avatarHash(this.text)
    }
  },
  mounted () {
    this.update('')
    setTimeout(() => this.update('f'), 300)
    setTimeout(() => this.update('fo'), 600)
    setTimeout(() => this.update('foo'), 900)
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
p {
  color: white;
}
.app {
  width: 320px;
  height: 100%;
  margin: auto;
}
.avatar-container {
  padding-bottom: 12px;
  height: 360px;
}

@media (min-height: 780px) {
  .avatar-container {
    padding-top: 100px;
  }
}
</style>