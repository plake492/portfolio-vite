<template>
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
</template>

<script setup>
import { ref } from 'vue'

import refugeImg from '../assets/imgs/refuge.png'
import esteemedTalent from '../assets/imgs/esteemed_talent.png'

import jsImg from '../assets/imgs/logos/js.png'
import cssImg from '../assets/imgs/logos/css.png'
import htmlImg from '../assets/imgs/logos/html.png'
import { intersectionObserverBase } from '../use/intersectionObserverBase'

const icons2 = [
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

intersectionObserverBase('target_ex', isIntersecting => {
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
</script>
