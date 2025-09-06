<template>
  <header class="common-header">
    <div class="hamburger-button" @click="toggleNavbar">
      &#9776;
    </div>
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Common Header'
  }
})

const emit = defineEmits(['toggle-navbar'])

const toggleNavbar = () => {
  emit('toggle-navbar')
}
</script>

<style scoped>
.common-header {
  background-color: #333;
  color: white;
  padding: 1em;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box; /* Include padding in width */
}

.common-header h1 {
  margin: 0;
  font-size: 1.5em;
}

.hamburger-button {
  font-size: 2em;
  cursor: pointer;
  margin-right: 1em;
  background: none;
  border: none;
  color: white;
  padding: 0;
}
</style>