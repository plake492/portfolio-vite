<template>
  <div class="body dark">
    <div class="container" style="padding: 20rem 2rem">
      <div class="img_section">
        <img id="profile" class="profile" :src="profilePic" alt="" />
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
        <div style="margin-top: 5rem">
          <transition name="fade" mode="out-in">
            <h1
              :key="selected"
              class="icon_title"
              style="text-transform: uppercase"
            >
              {{ selected }}
            </h1>
          </transition>
        </div>
      </div>
    </div>
    <div id="profile_complete"></div>
    <div id="about">
      <div id="target" class="container">
        <h2>ABOUT ME</h2>
        <p class="text" style="align-self: start; margin-top: 5rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum
          consectetur quidem tempore expedita velit exercitationem aut sint iure
          tempora, eaque ut blanditiis quasi tenetur reiciendis, numquam sit
          corporis temporibus. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Totam maxime sit assumenda sapiente, natus molestias
          reprehenderit sequi repellendus est quisquam quaerat earum tempora
          possimus eos doloribus nostrum atque hic. Consectetur. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Vero asperiores quisquam
          ad. Culpa neque molestiae impedit laudantium magni est nostrum esse,
          ducimus, excepturi deserunt accusantium eum rerum sunt dolores quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum
          consectetur quidem tempore expedita velit exercitationem aut sint iure
          tempora, eaque ut blanditiis quasi tenetur reiciendis, numquam sit
          corporis temporibus. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Totam maxime sit assumenda sapiente, nat
        </p>
      </div>
    </div>
    <div id="examples">
      <div class="container" style="margin-top: 10rem; padding-bottom: 10rem">
        <h2 style="margin: 5rem 0">EXAMPLES</h2>
        <div id="target_ex" class="card_container">
          <div class="card hide" v-for="(item, i) in items">
            <img :src="item.img" />
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <div>
              <a :href="item.link" target="_blank">Website</a> |
              <a href="#">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container overlay">
      <div class="card_single hide">
        <div style="padding: 1rem">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            inventore totam fuga necessitatibus repellat consequuntur sint rem
            nihil suscipit. Ea facilis impedit odio voluptates libero earum,
            debitis doloribus numquam dolore?
          </p>
          <div class="flex_center" style="padding: 3rem 10rem 0">
            <div class="icon" v-for="(icon, i) in icons2" :key="i">
              <img :src="icon.img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import profilePic from '../assets/imgs/profile.jpeg'
import refugeImg from '../assets/imgs/refuge.png'
import esteemedTalent from '../assets/imgs/esteemed_talent.png'
import vueImg from '../assets/imgs/logos/vue.png'
import serverlessImg from '../assets/imgs/logos/serverless.png'
import firebaseImg from '../assets/imgs/logos/firebase.png'
import reactImg from '../assets/imgs/logos/react.png'
import stripeImg from '../assets/imgs/logos/stripe.png'
import nodeImg from '../assets/imgs/logos/nodejs.png'
import expressImg from '../assets/imgs/logos/express.png'
import bootstrapImg from '../assets/imgs/logos/bootstrap.png'
import jsImg from '../assets/imgs/logos/js.png'
import cssImg from '../assets/imgs/logos/css.png'
import htmlImg from '../assets/imgs/logos/html.png'

import { observerAbout } from '../use/observer_about'

const selected = ref('Vue')

const selectIcon = item => {
  selected.value = item
}

const beforeEnter = el => {
  el.style.opactity = 0
}

const showIcons = () => {
  const elms = document.querySelectorAll('.icon')
  elms.forEach(el => {
    el.classList.add('show')
    el.classList.remove('hide')
  })
}

const icons = ref([
  { title: 'vue.js', img: vueImg, active: true },
  { title: 'firebase', img: firebaseImg, active: false },
  { title: 'bootstrap', img: bootstrapImg, active: false },
  { title: 'serverless', img: serverlessImg, active: false },
  { title: 'stripe', img: stripeImg, active: false },
  { title: 'node.js', img: nodeImg, active: false },
  { title: 'express.js', img: expressImg, active: false },
  { title: 'react.js', img: reactImg, active: false }
])

const icons2 = [
  { title: 'vue.js', img: jsImg },
  { title: 'firebase', img: cssImg },
  { title: 'serverless', img: htmlImg }
]

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
  }, 4000)
}

startTimer()

const items = ref([
  {
    title: 'Refuge',
    link: 'https://app.thesalesrebellion.com/',
    img: refugeImg,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      praesentium, illo excepturi harum possimus consequuntur blanditiis
      eum vel porro animi assumenda fugit nostrum recusandae, ut ad
      aliquam consectetur magni consequatur.`
  },
  {
    title: 'Esteemed Talent',
    link: 'https://talent.esteemed.io/jobs/',
    img: esteemedTalent,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      praesentium, illo excepturi harum possimus consequuntur blanditiis
      eum vel porro animi assumenda fugit nostrum recusandae, ut ad
      aliquam consectetur magni consequatur.`
  },
  {
    title: 'Refuge',
    link: 'https://app.thesalesrebllion.com',
    img: refugeImg,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
      praesentium, illo excepturi harum possimus consequuntur blanditiis
      eum vel porro animi assumenda fugit nostrum recusandae, ut ad
      aliquam consectetur magni consequatur.`
  }
])

const profileObservedComplete = entries => {
  entries.forEach(({ isIntersecting }) => {
    console.log('isIntersecting==>>', isIntersecting)
    if (isIntersecting) {
      document.querySelector('.profile').classList.add('img_animate_complete')
    }
  })
}

let observer4

onMounted(() => {
  observer4 = new IntersectionObserver(profileObservedComplete, {
    root: document.getElementById('#app'),
    threshold: 1,
    rootMargin: '1000px 0px 0px 0px'
  })

  observer4.observe(document.getElementById('profile_complete'))
})

const profileObserved = entries => {
  entries.forEach(({ isIntersecting }) => {
    if (isIntersecting) {
      const elms = document.querySelectorAll('.icon')
      elms.forEach(el => {
        el.classList.add('show')
        el.classList.add('rotate')
        el.classList.remove('hide')
      })
      document.querySelector('.profile').classList.add('img_animate')
    }
  })
}

let observer3

onMounted(() => {
  observer3 = new IntersectionObserver(profileObserved, {
    root: document.getElementById('#app'),
    threshold: 1
  })

  observer3.observe(document.getElementById('profile'))
})

const elementObserved = entries => {
  entries.forEach(({ isIntersecting }) => {
    if (isIntersecting) {
      const elms = document.querySelectorAll('.card')
      elms.forEach(el => {
        el.classList.add('show')
        el.classList.remove('hide')
      })
      document.querySelector('.card_single').classList.add('show')
      document.querySelector('.card_single').classList.remove('hide')
    }
  })
}

let observer2

onMounted(() => {
  observer2 = new IntersectionObserver(elementObserved, {
    root: document.getElementById('#app'),
    threshold: 0.25
  })

  console.log('document.getElemen', document.getElementById('#target_ex'))
  observer2.observe(document.getElementById('target_ex'))
})

observerAbout()
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
