<template>
  <nav :class="['common-navbar', { 'is-open': isOpen }]">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.common-navbar {
  background-color: #222;
  color: white;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -250px; /* Hidden by default */
  transition: left 0.3s ease-in-out;
  z-index: 999;
  padding-top: 60px; /* Space for the fixed header */
  box-sizing: border-box;
}

.common-navbar.is-open {
  left: 0; /* Slide in */
}

.common-navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.common-navbar li a {
  display: block;
  padding: 1em;
  color: white;
  text-decoration: none;
}

.common-navbar li a:hover {
  background-color: #444;
}
</style>