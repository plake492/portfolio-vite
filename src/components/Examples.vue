<template>
  <section>
    <div class="container examples">
      <h2 id="examples">EXAMPLES</h2>
      <transition name="slide">
        <div v-if="cardsVisable" class="card_container">
          <div class="card" v-for="(item, i) in items">
            <img :src="item.img" />
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <div>
              <a :href="item.link" target="_blank">Website</a> |
              <a href="#">Github</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="container overlay">
      <transition name="slide">
        <div v-if="cardsVisable" style="transition-delay: 1s" class="card">
          <div style="padding: 1rem">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              inventore totam fuga necessitatibus repellat consequuntur sint rem
              nihil suscipit. Ea facilis impedit odio voluptates libero earum,
              debitis doloribus numquam dolore?
            </p>
            <div class="card_single">
              <div v-for="(icon, i) in icons" :key="i">
                <img :src="icon.img" />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'

import refugeImg from '../assets/imgs/refuge.png'
import esteemedTalent from '../assets/imgs/esteemed_talent.png'

import jsImg from '../assets/imgs/logos/js.png'
import cssImg from '../assets/imgs/logos/css.png'
import htmlImg from '../assets/imgs/logos/html.png'
import { intersectionObserverBase } from '../use/intersectionObserverBase'

const cardsVisable = ref(false)

// watch(cardsVisable, newValue => {
//   console.log('newValue==>>', newValue)
//   if (newValue) {
//     animateCard()
//   }
// })

// const animateCard = () => {
//   console.log('********! Its loggin, Its logging ********!')
//   gsap.from('.card', {
//     duration: 20,
//     opacity: 0.5,
//     scale: 0.5
//   })
// }

const icons = [
  { title: 'vue.js', img: jsImg },
  { title: 'firebase', img: cssImg },
  { title: 'serverless', img: htmlImg }
]

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

intersectionObserverBase('examples', isIntersecting => {
  if (isIntersecting) {
    cardsVisable.value = true
    // const elms = document.querySelectorAll('.card')
    // elms.forEach(el => {
    //   el.classList.add('show')
    //   el.classList.remove('hide')
    // })
    // document.querySelector('.card_single').classList.add('show')
    // document.querySelector('.card_single').classList.remove('hide')
  }
})
</script>
