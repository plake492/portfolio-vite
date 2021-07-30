<template>
  <transition name="fade" appear>
    <div>
      {{ width }}
      {{ widthType }}
      <Nav />
      <router-view></router-view>
      <Footer />
    </div>
  </transition>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>
