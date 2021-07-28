<template>
  <nav>
    <div class="nav_bar">
      <h1 style="font-size: 2rem">PATRICK LAKE</h1>
      <div>
        <div
          style="display: inline; margin-left: 1rem"
          v-for="(link, i) in links"
          :key="i"
        >
          <a style="text-transform: uppercase" @click="scroll(link)"
            >{{ link }}
          </a>
        </div>
      </div>
    </div>
    <transition enter-active-class="seperate" appear>
      <h1>Full - Stack - Web - Developer</h1>
    </transition>
    <div id="moving"></div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const scroll = location => {
  document.getElementById(location).scrollIntoView({ behavior: 'smooth' })
}

const links = ['about', 'examples']

const timer = ref(null)
let baseB = 85
let baseL = 0

const start = el => {
  timer.value = window.setInterval(() => {
    el.setAttribute('style', `bottom: ${baseB}px; left: ${baseL}px`)
    baseB += 0.09
    baseL += 1
  }, 1)
}

onMounted(() => {
  const el = document.getElementById('moving')
  start(el)
})
</script>

<style scoped>
nav {
  position: relative;
}

#moving {
  background-color: red;
  position: absolute;
  bottom: 85px;
  left: 0px;
  transform: rotate(-5deg);
  height: 50px;
  width: 50px;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
