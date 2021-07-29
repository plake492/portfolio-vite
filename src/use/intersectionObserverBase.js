import { onMounted } from 'vue'

export const intersectionObserverBase = (observeId, cb, threshold = 1) => {
  const elObserved = entries => {
    entries.forEach(({ isIntersecting }) => {
      cb(isIntersecting)
      //   console.log('isIntersecting==>>', isIntersecting)
      //   if (isIntersecting) {
      //     document.querySelector('.profile').classList.add('img_animate_complete')
      //   }
    })
  }

  let observer

  onMounted(() => {
    observer = new IntersectionObserver(elObserved, {
      root: document.getElementById('#app'),
      threshold
    })

    observer.observe(document.getElementById(observeId))
  })
}
