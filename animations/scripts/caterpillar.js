import { gsap } from 'gsap'


const closeEyes = () => {
  const tl = gsap.timeline({id: 'closeEyes'})

  tl.to('#caterpillar > ellipse', {attr: {ry: 0.1}, duration: 1})
}

const openEyes = () => {
  const tl = gsap.timeline({id: 'openEyes'})

  tl.to('#caterpillar > ellipse', {opacity: 1, duration: 0})
    .to('#caterpillar > ellipse', {attr: {ry: 1.5}, duration: 1.5})
}

const showCaterpillar = () => {
  gsap.to('#caterpillar > path', {opacity: 0, duration: 0})
  gsap.to('#caterpillar > circle[fill=none]', {opacity: 0, duration: 0})
}

const pageRollIn = () => {
  const tl = gsap.timeline({id: 'pageRollIn'})

  tl.addLabel('setup')
    .to('#caterpillar > circle', {opacity: 0, duration: 0}, 'setup')
    .to('#caterpillar > path', {opacity: 0, duration: 0}, 'setup')
    .to('#caterpillar > ellipse', {opacity: 0, duration: 0}, 'setup')

    .addLabel('redRollIn', '+=1')
    .to('#caterpillar > path[fill="#fe0000"]', {opacity: 1, duration: 0}, 'redRollIn')
    .from('#caterpillar > path[fill="#fe0000"]', {x: 500}, 'redRollIn')
    .to('#caterpillar > circle[fill="#fe0000"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="39"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="39"]', {'stroke-dasharray': '100%', duration: 0.1})

    .addLabel('removeRedPaper')
    .to('#caterpillar > path[fill="#fe0000"]', {opacity: 0}, 'removeRedPaper')
    .to('#caterpillar > circle[fill=none]', {opacity: 0}, 'removeRedPaper')

    .addLabel('orangeRollIn')
    .to('#caterpillar > path[fill="#fea400"]', {opacity: 1, duration: 0}, 'orangeRollIn')
    .from('#caterpillar > path[fill="#fea400"]', {x: 500}, 'orangeRollIn')
    .to('#caterpillar > circle[fill="#fea400"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="44"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="44"]', {'stroke-dasharray': '100%', duration: 0.1})

    .addLabel('removeOrangePaper')
    .to('#caterpillar > path[fill="#fea400"]', {opacity: 0}, 'removeOrangePaper')
    .to('#caterpillar > circle[fill=none][cx="44"]', {opacity: 0}, 'removeOrangePaper')

    .addLabel('yellowRollIn')
    .to('#caterpillar > path[fill="#fefe00"]', {opacity: 1, duration: 0}, 'yellowRollIn')
    .from('#caterpillar > path[fill="#fefe00"]', {x: 500}, 'yellowRollIn')
    .to('#caterpillar > circle[fill="#fefe00"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="48.5"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="48.5"]', {'stroke-dasharray': '100%', duration: 0.1})

    .addLabel('removeYellowPaper')
    .to('#caterpillar > path[fill="#fefe00"]', {opacity: 0}, 'removeYellowPaper')
    .to('#caterpillar > circle[fill=none][cx="48.5"]', {opacity: 0}, 'removeYellowPaper')

    .addLabel('greenRollIn')
    .to('#caterpillar > path[fill="#00fe00"]', {opacity: 1, duration: 0}, 'greenRollIn')
    .from('#caterpillar > path[fill="#00fe00"]', {x: 500}, 'greenRollIn')
    .to('#caterpillar > circle[fill="#00fe00"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="53"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="53"]', {'stroke-dasharray': '100%', duration: 0.1})

    .addLabel('removeGreenPaper')
    .to('#caterpillar > path[fill="#00fe00"]', {opacity: 0}, 'removeGreenPaper')
    .to('#caterpillar > circle[fill=none][cx="53"]', {opacity: 0}, 'removeGreenPaper')

    .addLabel('blueRollIn')
    .to('#caterpillar > path[fill="#0000fe"]', {opacity: 1, duration: 0}, 'blueRollIn')
    .from('#caterpillar > path[fill="#0000fe"]', {x: 500}, 'blueRollIn')
    .to('#caterpillar > circle[fill="#0000fe"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="57"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="57"]', {'stroke-dasharray': '100%', duration: 0.1})

    .addLabel('removeBluePaper')
    .to('#caterpillar > path[fill="#0000fe"]', {opacity: 0}, 'removeBluePaper')
    .to('#caterpillar > circle[fill=none][cx="57"]', {opacity: 0}, 'removeBluePaper')

    .addLabel('indigoRollIn')
    .to('#caterpillar > path[fill="#4b0081"]', {opacity: 1, duration: 0}, 'indigoRollIn')
    .from('#caterpillar > path[fill="#4b0081"]', {x: 500}, 'indigoRollIn')
    .to('#caterpillar > circle[fill="#4b0081"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="60"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="60"]', {'stroke-dasharray': '100%', duration: 0.1})

    .addLabel('removeIndigoPaper')
    .to('#caterpillar > path[fill="#4b0081"]', {opacity: 0}, 'removeIndigoPaper')
    .to('#caterpillar > circle[fill=none][cx="60"]', {opacity: 0}, 'removeIndigoPaper')

    .addLabel('violetRollIn')
    .to('#caterpillar > path[fill="#84f"]', {opacity: 1, duration: 0}, 'violetRollIn')
    .from('#caterpillar > path[fill="#84f"]', {x: 500}, 'violetRollIn')
    .to('#caterpillar > circle[fill="#84f"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="62"]', {opacity: 1, duration: 0})
    .to('#caterpillar > circle[fill=none][cx="62"]', {'stroke-dasharray': '100%', duration: 0.1})

    .addLabel('removeVioletPaper')
    .to('#caterpillar > path[fill="#84f"]', {opacity: 0}, 'removeVioletPaper')
    .to('#caterpillar > circle[fill=none][cx="62"]', {opacity: 0}, 'removeVioletLabel')

    .then(openEyes)
}


export { pageRollIn, showCaterpillar, openEyes, closeEyes }
//export { wiggle, walk, blink, path, hideChrysalis }
