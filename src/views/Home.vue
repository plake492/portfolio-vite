<template>
  <div :class="!selected ? 'body dark' : 'body light'">
    <div style="padding: 1rem">
      <h1>Home</h1>
    </div>
    <hr style="margin-top: 0" />
    <div class="container" style="padding: 2rem">
      <div class="flex_center">
        <img
          class="profile"
          :src="profilePic"
          alt=""
          style="align-self: start"
        />
        <p class="text" style="align-self: start">
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
    <hr />
    <div class="container" style="margin-top: 5rem">
      <div class="card_container">
        <div
          class="card"
          :class="selected === i + 1 && 'animate'"
          v-for="(item, i) in items"
          @mouseover="selected = true"
          @mouseout="selected = null"
        >
          <!-- <template v-if="!selected"> -->
          <img :src="item.img" />
          <h1>{{ item.title }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            praesentium, illo excepturi harum possimus consequuntur blanditiis
            eum vel porro animi assumenda fugit nostrum recusandae, ut ad
            aliquam consectetur magni consequatur.
          </p>
          <div>
            <a :href="item.link" target="_blank">Website</a> |
            <a href="#">Github</a>
          </div>
          <!-- </template> -->
          <!-- <template v-else-if="i + 1 === selected">
            <h1>{{ item.title }}</h1>
          </template> -->
        </div>
      </div>
    </div>
    <hr style="margin-bottom: 0" />
    <div style="padding: 1rem" class="flex_center">
      <h1>Footer</h1>
      <div>
        <div style="display: inline; margin-left: 1rem" v-for="i in 4">hey</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import profilePic from '../assets/imgs/profile.jpeg'
import refugeImg from '../assets/imgs/refuge.png'
import esteemedTalent from '../assets/imgs/esteemed_talent.png'

const items = ref([
  {
    title: 'Refuge',
    link: 'https://app.thesalesrebellion.com/',
    img: refugeImg
  },
  {
    title: 'Esteemed Talent',
    link: 'https://talent.esteemed.io/jobs/',
    img: esteemedTalent
  },
  {
    title: 'Refuge',
    link: 'https://app.thesalesrebllion.com',
    img: refugeImg
  }
])

const selected = ref(null)
</script>

<style>
a:hover {
  color: hsl(0, 0%, 47%);
}

/* .card {
  cursor: pointer;
} */

.text {
  line-height: 2rem;
  font-size: 18px;
}

.profile {
  width: 33%;
  margin-right: 1.5rem;
}
</style>
