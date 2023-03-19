<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue';

let msg = ref('Hello Vue 3 + TypeScript + Vite')
function handleChange() {
  msg.value = '2123'
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" @handleChange="handleChange" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
