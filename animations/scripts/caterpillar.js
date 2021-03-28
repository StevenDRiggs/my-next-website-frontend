import { gsap } from 'gsap'


const wiggle = () => {
  const tl = gsap.timeline({repeat: -1})

  tl.to('#head', {y: -15})
    .to('#head', {y: 0})
  tl.to('#body1', {y: -15})
    .to('#body1', {y: 0})
  tl.to('#body2', {y: -15})
    .to('#body2', {y: 0})
  tl.to('#body3', {y: -15})
    .to('#body3', {y: 0})
  tl.to('#tail1', {y: -15})
    .to('#tail1', {y: 0})
  tl.to('#tail2', {y: -15})
    .to('#tail2', {y: 0})
  tl.to('#tail3', {y: -15})
    .to('#tail3', {y: 0})

  tl.duration(0.8)
  tl.repeatDelay(4.8)
}


export { wiggle }
