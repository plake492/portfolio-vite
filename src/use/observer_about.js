import { onMounted } from 'vue'

export const observerAbout = () => {
  // const onElementObserved = entries => {
  //   entries.forEach(({ isIntersecting, intersectionRect }) => {
  //     if (isIntersecting) {
  //       document.addEventListener('scroll', growEl)
  //     }
  //     if (!isIntersecting) {
  //       document.removeEventListener('scroll', growEl)
  //     }
  //   })
  // }
  // let up = 50
  // let down = 50
  // let rotate = 140
  // const growEl = isIntersecting => {
  //   const targetEl = document.getElementById('about')
  //   const change = 0.5
  //   targetEl.setAttribute(
  //     'style',
  //     `  background: linear-gradient(
  //   ${(rotate += change * 0.9)}deg,
  //   rgba(28, 28, 28, 1) ${(down -= change)}%,
  //   rgba(224, 224, 224, 1) ${(down -= change)}%,
  //   rgba(224, 224, 224, 1) ${(up += change)}%,
  //   rgba(28, 28, 28, 1) ${(up += change)}%
  // );`
  //   )
  // }
  // // background: linear-gradient(
  // //   164.2999999999994deg,
  // //   rgba(28, 28, 28, 1) -3.5%,
  // //   rgba(224, 224, 224, 1) -4%,
  // //   rgba(224, 224, 224, 1) 103.5%,
  // //   rgba(28, 28, 28, 1) 104%
  // // );
  // let observer
  // onMounted(() => {
  //   observer = new IntersectionObserver(onElementObserved, {
  //     root: document.getElementById('#app'),
  //     threshold: 0.1
  //   })
  //   observer.observe(document.getElementById('target'))
  // })
}
