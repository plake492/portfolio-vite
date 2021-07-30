<template>
  <header>
    <nav class="nav_bar">
      <h1 style="font-size: 2rem">PATRICK LAKE</h1>
      <div>
        <div class="d-inline" v-for="(link, i) in links" :key="link">
          <a style="text-transform: uppercase" @click="scroll(link)">
            {{ link }}
          </a>
          <span v-if="i !== links.length - 1" style="margin: 1rem"> / </span>
        </div>
      </div>
    </nav>
    <transition enter-active-class="seperate" appear>
      <h1>
        <span>Full - </span>
        <span>Stack -</span>
        <span>Web -</span>
        <span>Developer</span>
      </h1>
    </transition>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const scroll = location => {
  document.getElementById(location).scrollIntoView({ behavior: 'smooth' })
}

const links = ['about', 'examples']
</script>
