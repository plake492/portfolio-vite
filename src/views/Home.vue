<template>
  <div class="body dark">
    <Profile />
    <About />
    <Examples />
  </div>
</template>

<script setup>
import Profile from '../components/Profile.vue'
import About from '../components/About.vue'
import Examples from '../components/Examples.vue'
</script>

<style>
a:hover {
  color: hsl(0, 0%, 47%);
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
