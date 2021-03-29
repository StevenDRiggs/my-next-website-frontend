import { gsap } from 'gsap'


const wiggle = () => {
  const tl = gsap.timeline({id: 'wiggle', repeat: -1})

  tl.to('#head', {y: -5})
    .to('#head', {y: 0})
    .to('#body1', {y: -5})
    .to('#body1', {y: 0})
    .to('#body2', {y: -5})
    .to('#body2', {y: 0})
    .to('#body3', {y: -5})
    .to('#body3', {y: 0})
    .to('#tail1', {y: -5})
    .to('#tail1', {y: 0})
    .to('#tail2', {y: -5})
    .to('#tail2', {y: 0})
    .to('#tail3', {y: -5})
    .to('#tail3', {y: 0})

  tl.totalDuration(1.6)
}

const wiggleStop = () => {
const wiggleAnim = gsap.getById('wiggle')
    wiggleAnim.restart()
    wiggleAnim.pause()
}

const walk = () => {
  const tl = gsap.timeline({id: 'walk', repeat: -1}).yoyo(true)

  tl.addLabel('step1')
    .to('#head', {y: 5}, 'step1')
    .to('#head-antennae-left-pistil', {x: -5, y: 7}, 'step1')
    .to('#head-antennae-right-pistil', {x: 5, y: 7}, 'step1')
    .to('#body1', {y: -5}, 'step1')
    .to('#body1-leg-left', {rotation: 45}, 'step1')
    .to('#body1-leg-right', {rotation: 0}, 'step1')
    .to('#body2', {y: 5}, 'step1')
    .to('#body2-leg-right', {rotation: -45}, 'step1')
    .to('#body2-leg-left', {rotation: 0}, 'step1')
    .to('#body3', {y: -5}, 'step1')
    .to('#body3-leg-left', {rotation: 45}, 'step1')
    .to('#body3-leg-right', {rotation: 0}, 'step1')
    .to('#tail1', {y: 5}, 'step1')
    .to('#tail1-leg-right', {rotation: -45}, 'step1')
    .to('#tail1-leg-left', {rotation: 0}, 'step1')
    .to('#tail2', {y: -5}, 'step1')
    .to('#tail3', {y: 5}, 'step1')
    .addLabel('step2')
    .to('#head', {y: 0}, 'step2')
    .to('#head-antennae-left-pistil', {x: 0, y: 0}, 'step2')
    .to('#head-antennae-right-pistil', {x: 0, y: 0}, 'step2')
    .to('#body1', {y: 0}, 'step2')
    .to('#body1-leg-left', {rotation: 0}, 'step2')
    .to('#body1-leg-right', {rotation: -45}, 'step2')
    .to('#body2', {y: 0}, 'step2')
    .to('#body2-leg-right', {rotation: 0}, 'step2')
    .to('#body2-leg-left', {rotation: 45}, 'step2')
    .to('#body3', {y: 0}, 'step2')
    .to('#body3-leg-left', {rotation: 0}, 'step2')
    .to('#body3-leg-right', {rotation: -45}, 'step2')
    .to('#tail1', {y: 0}, 'step2')
    .to('#tail1-leg-right', {rotation: 0}, 'step2')
    .to('#tail1-leg-left', {rotation: 45}, 'step2')
    .to('#tail2', {y: 0}, 'step2')
    .to('#tail3', {y: 0}, 'step2')

  tl.duration(0.8)
}

const walkStop = () => {
  const walkAnim = gsap.getById('walk')
    walkAnim.restart()
    walkAnim.pause()
}

const blink = () => {
  const tl = gsap.timeline({id: 'blink', repeat: -1})

  tl.to('#eyes-clip-path', {y: 20, duration: 0.1})
    .to('#eyes-clip-path', {y: 0, duration: 0.1})

  tl.repeatDelay(1.8)
}

const blinkStop = () => {
  const walkAnim = gsap.getById('blink')
    walkAnim.restart()
    walkAnim.pause()
}

const path = () => {
  const tl = gsap.timeline()

  tl.from('#caterpillar', {x: 1000, duration: 5, onComplete: () => {
    walkStop()
    wiggleStop()
    cocoon()
  }})
}

const cocoon = () => {
  const tl = gsap.timeline({onComplete: () => blinkStop()})
  const random = gsap.utils.random(-100, 100, 10, true)

  tl.addLabel('rotate')
    .to('#caterpillar', {rotation: 50, duration: 1}, 'rotate')
    .to('.segment', {rotation: -50, duration: 1}, 'rotate')
    .to('#head', {x: -10, y: 15, duration: 1}, 'rotate')
    .addLabel('makeCocoon')
    .to('#caterpillar', {height: 0, y: 150, duration: 3}, 'makeCocoon')
    .to('#chrysalis', {opacity: 1, duration: 3}, 'makeCocoon')
    .from('#chrysalis', {height: 0, duration: 3}, 'makeCocoon')
    .addLabel('moveCocoon')
    .to('#chrysalis', {x: random(), y: random(), opacity: 0, duration: 2}, 'moveCocoon')
    .to('.chrysalis-logo', {opacity: 1, duration: 2}, 'moveCocoon')
}

const hideChrysalis = () => {
  gsap.to('.chrysalis-logo', {opacity: 0, duration: 0})
  gsap.to('#chrysalis', {opacity: 0, duration: 0})
}


export { wiggle, walk, blink, path, hideChrysalis }
