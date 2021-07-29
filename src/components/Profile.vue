<template>
  <div class="container" style="padding: 15rem 2rem">
    <div class="img_section">
      <div class="profile_img_wrapper">
        <img id="profile" class="profile" :src="profilePic" alt="" />
        <div
          class="underlay_1"
          :style="
            type === 'development' && 'box-shadow: 0 0 20px 10px #000000;'
          "
        >
          <h1>Development</h1>
        </div>
        <div
          class="underlay_2"
          :style="type === 'design' && 'box-shadow: 0 0 20px 10px #000000;'"
        >
          <h1>Design</h1>
        </div>
      </div>
      <div class="icon_list">
        <div class="icon hide" v-for="(icon, i) in icons" :key="i">
          <div style="width: 100%">
            <img
              :style="
                icon.active && 'filter: grayscale(0%);transform: scale(1.05);'
              "
              :src="icon.img"
            />
          </div>
        </div>
      </div>
      <div style="margin-top: 5rem" class="icon_show_wrapper">
        <div class="line"></div>
        <transition name="fade" mode="out-in">
          <h1
            :key="selected"
            class="icon_title"
            style="text-transform: uppercase"
          >
            {{ selected }}
          </h1>
        </transition>
        <div class="line"></div>
      </div>
    </div>
  </div>
  <div id="profile_complete"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { intersectionObserverBase } from '../use/intersectionObserverBase'

import profilePic from '../assets/imgs/profile.jpeg'
import vueImg from '../assets/imgs/logos/vue.png'
import serverlessImg from '../assets/imgs/logos/serverless.png'
import firebaseImg from '../assets/imgs/logos/firebase.png'
import reactImg from '../assets/imgs/logos/react.png'
import stripeImg from '../assets/imgs/logos/stripe.png'
import nodeImg from '../assets/imgs/logos/nodejs.png'
import expressImg from '../assets/imgs/logos/express.png'
import bootstrapImg from '../assets/imgs/logos/bootstrap.png'

const selected = ref('Vue')
const type = ref('desgin')

const selectIcon = item => {
  selected.value = item
}
const selectType = item => {
  type.value = item
}

const showIcons = () => {
  const elms = document.querySelectorAll('.icon')
  elms.forEach(el => {
    el.classList.add('show')
    el.classList.remove('hide')
  })
}

const icons = ref([
  { title: 'vue.js', img: vueImg, active: true, type: 'design' },
  { title: 'firebase', img: firebaseImg, active: false, type: 'development' },
  { title: 'bootstrap', img: bootstrapImg, active: false, type: 'design' },
  {
    title: 'serverless',
    img: serverlessImg,
    active: false,
    type: 'development'
  },
  { title: 'stripe', img: stripeImg, active: false, type: 'development' },
  { title: 'node.js', img: nodeImg, active: false, type: 'development' },
  { title: 'express.js', img: expressImg, active: false, type: 'development' },
  { title: 'react.js', img: reactImg, active: false, type: 'design' }
])
const timer = ref(null)
let index = 0

const startTimer = () => {
  timer.value = window.setInterval(() => {
    icons.value[index].active = false
    index++
    if (index === icons.value.length) {
      index = 0
    }
    icons.value[index].active = true
    selectIcon(icons.value[index].title)
    selectType(icons.value[index].type)
  }, 4000)
}

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
</script>
