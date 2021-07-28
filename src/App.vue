<template>
  <transition name="fade" appear>
    <div>
      <Nav />
      <router-view></router-view>
      <Footer />
    </div>
  </transition>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scroll(0, 0)
})
</script>
