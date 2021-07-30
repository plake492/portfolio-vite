import { ref, onUnmounted } from 'vue'
import vueImg from '../assets/imgs/logos/vue.png'
import serverlessImg from '../assets/imgs/logos/serverless.png'
import firebaseImg from '../assets/imgs/logos/firebase.png'
import reactImg from '../assets/imgs/logos/react.png'
import stripeImg from '../assets/imgs/logos/stripe.png'
import nodeImg from '../assets/imgs/logos/nodejs.png'
import expressImg from '../assets/imgs/logos/express.png'
import bootstrapImg from '../assets/imgs/logos/bootstrap.png'

export const iconsAnimation = () => {
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
    {
      title: 'express.js',
      img: expressImg,
      active: false,
      type: 'development'
    },
    { title: 'react.js', img: reactImg, active: false, type: 'design' }
  ])

  const selected = ref(icons.value[0])

  let index = 0

  const timer = ref(null)

  const selectIcon = item => {
    selected.value = item
  }
  const startTimer = () => {
    timer.value = window.setInterval(() => {
      icons.value[index].active = false
      index++
      if (index === icons.value.length) {
        index = 0
      }
      icons.value[index].active = true
      selectIcon(icons.value[index])
    }, 4000)
  }

  onUnmounted(() => {
    timer.value = null
  })

  return { selected, startTimer, icons }
}
