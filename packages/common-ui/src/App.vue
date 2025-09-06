<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import CommonHeader from './components/CommonHeader.vue'
import CommonNavbar from './components/CommonNavbar.vue'

const isNavbarOpen = ref(false)

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value
}
</script>

<template>
  <CommonHeader @toggle-navbar="toggleNavbar" />
  <CommonNavbar :is-open="isNavbarOpen" />
  <div :style="{ 'margin-top': '60px', 'margin-left': isNavbarOpen ? '250px' : '0' }" class="content-wrapper">
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.content-wrapper {
  transition: margin-left 0.3s ease-in-out;
}
</style>
