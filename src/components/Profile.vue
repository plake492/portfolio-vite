<template>
  <main class="container">
    <div class="profile_wrapper">
      <img
        id="profile"
        :class="widthType !== 's' && 'under_shadow'"
        :src="profilePic"
        alt="Profile Image"
      />
      <div
        v-if="widthType !== 's'"
        v-for="(card, i) in cards"
        :key="card"
        :class="`underlay_${i + 1}`"
        :style="selected.type === card && 'box-shadow: 0 0 20px 10px #000000;'"
      >
        <h1 class="uppercase">{{ card }}</h1>
      </div>
    </div>
    <div class="icon_list w-100">
      <div class="icon hide" v-for="icon in icons" :key="icon.title">
        <img
          :style="
            icon.active && 'filter: grayscale(0%);transform: scale(1.05);'
          "
          :src="icon.img"
          :alt="`${icon.title} icon`"
        />
      </div>
    </div>
    <div class="icon_wrapper w-100">
      <div class="line"></div>
      <transition name="fade" mode="out-in">
        <h1 :key="selected">
          {{ selected.title }}
        </h1>
      </transition>
      <div class="line"></div>
    </div>
  </main>
  <div v-if="widthType === 's'">
    <transition name="slide">
      <h2 class="capitalize icon_type_sm">{{ selected.type }}</h2>
    </transition>
  </div>
  <br />
  <div id="profile_complete"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { store } from '../store'
import { intersectionObserverBase } from '../use/intersectionObserverBase'
import { iconsAnimation } from '../use/iconsAnimation'

import profilePic from '../assets/imgs/profile.jpeg'

const cards = ['development', 'design']

const { selected, startTimer, icons } = iconsAnimation()

const widthType = ref('')

startTimer()

intersectionObserverBase('profile', isIntersecting => {
  if (isIntersecting) {
    const elms = document.querySelectorAll('.icon')
    elms.forEach(el => {
      el.classList.add('show')
      el.classList.remove('hide')
    })
    document.querySelector('.profile').classList.add('img_animate')
  }
})

intersectionObserverBase('profile_complete', isIntersecting => {
  if (isIntersecting) {
    document.querySelector('.underlay_1').classList.add('animate_card_1')
    document.querySelector('.underlay_2').classList.add('animate_card_2')
  }
})

const onWidthChange = () => {
  store.dispatch('setWidth', window.innerWidth)
  if (window.innerWidth < 550) {
    widthType.value = 's'
  }
  if (window.innerWidth > 549 && window.innerWidth < 1200) {
    widthType.value = 'md'
  }
  if (window.innerWidth > 1199) {
    widthType.value = 'lg'
  }
}

onWidthChange()

onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>
