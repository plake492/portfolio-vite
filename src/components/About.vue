<template>
  <div id="about">
    <div id="target" class="container">
      <h2>ABOUT ME</h2>
      <p class="text" style="align-self: start; margin-top: 5rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum
        consectetur quidem tempore expedita velit exercitationem aut sint iure
        tempora, eaque ut blanditiis quasi tenetur reiciendis, numquam sit
        corporis temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Totam maxime sit assumenda sapiente, natus molestias reprehenderit
        sequi repellendus est quisquam quaerat earum tempora possimus eos
        doloribus nostrum atque hic. Consectetur. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Vero asperiores quisquam ad. Culpa neque
        molestiae impedit laudantium magni est nostrum esse, ducimus, excepturi
        deserunt accusantium eum rerum sunt dolores quam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Eius, illum consectetur quidem
        tempore expedita velit exercitationem aut sint iure tempora, eaque ut
        blanditiis quasi tenetur reiciendis, numquam sit corporis temporibus.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam maxime
        sit assumenda sapiente, nat
      </p>
    </div>
  </div>
</template>

<script setup>
import { intersectionObserverBase } from '../use/intersectionObserverBase'

let up = 50
let down = 50
let rotate = 140
const change = 0.5
let id

intersectionObserverBase(
  'target',
  isIntersecting => {
    if (isIntersecting) {
      if (up >= 100 && down <= 0) {
        window.clearInterval(id)
      } else {
        openDoorTimer()
      }
    }
  },
  0.25
)

// const closeDoor = () => {
//   id = window.setInterval(() => {
//     if (up === 50 && down === 50) {

//       return window.clearInterval(id)
//     }
//     up -= change
//     down += change
//     rotate -= change * 1.76
//     growEl()
//   }, 20)
// }

const openDoorTimer = () => {
  id = window.setInterval(() => {
    if (up >= 100 && down <= 0) {
      return window.clearInterval(id)
    }
    up += change
    down -= change
    rotate += change * 0.76
    growEl()
  }, 20)
}

const growEl = () => {
  const targetEl = document.getElementById('about')
  targetEl.setAttribute(
    'style',
    `background: linear-gradient(
          ${rotate}deg,
          rgba(28, 28, 28, 1) ${down}%,
          rgba(224, 224, 224, 1) ${down}%,
          rgba(224, 224, 224, 1) ${up}%,
          rgba(28, 28, 28, 1) ${up}%
        );`
  )
}
</script>
