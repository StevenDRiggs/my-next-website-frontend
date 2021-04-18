import { gsap } from 'gsap'


const blink = () => {
  const tl = gsap.timeline({id: 'blink', repeat: -1, repeatDelay: gsap.utils.random(4, 7), ease: 'none'})

    tl.to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 0, duration: 0.05}})
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 1.5, duration: 0.05}})
}

const smile = () => {
  const tl = gsap.timeline({id: 'smile', delay: 2})

  tl.to('#caterpillar defs clipPath ellipse', {y: -5, duration: 1})
}

const closeEyes = () => {
  const tl = gsap.timeline({id: 'closeEyes'})

  tl.to('#caterpillar > g > ellipse', {attr: {ry: 0.1}, duration: 0.75})
}

const openEyes = () => {
  const tl = gsap.timeline({id: 'openEyes'})

  tl.to('#caterpillar > g[fill="#fefefe"] > ellipse', {opacity: 1, duration: 0})
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 1.5}, duration: 1.5})
}

const showCaterpillar = () => {
  gsap.to('#caterpillar > g > path', {opacity: 0, duration: 0})
  gsap.to('#caterpillar > g[fill=none] > circle', {opacity: 0, duration: 0})
}

const pageRollIn = () => {
  const tl = gsap.timeline({id: 'pageRollIn', delay: 1})

  tl.addLabel('setup')
    .to('#caterpillar > g > circle', {opacity: 0, duration: 0}, 'setup')
    .to('#caterpillar > g > path', {opacity: 0, duration: 0}, 'setup')
    .to('#caterpillar > g > ellipse', {opacity: 0, duration: 0}, 'setup')
    .to('#caterpillar > circle', {opacity: 0, duration: 0}, 'setup') 
    .to('#caterpillar > path', {opacity: 0, duration: 0}, 'setup') 

    .addLabel('papersRollIn', '+=1')
    .to('#caterpillar > g[fill="#84f"] > path', {opacity: 1, duration: 0}, 'papersRollIn')
    .from('#caterpillar > g[fill="#84f"] > path', {x: 500, duration: 0.5}, 'papersRollIn')
    .to('#caterpillar > g[fill="#4b0081"] > path', {opacity: 1, duration: 0}, 'papersRollIn+=0.1')
    .from('#caterpillar > g[fill="#4b0081"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.1')
    .to('#caterpillar > g[fill="#0000fe"] > path', {opacity: 1, duration: 0}, 'papersRollIn+=0.2')
    .from('#caterpillar > g[fill="#0000fe"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.2')
    .to('#caterpillar > g[fill="#00fe00"] > path', {opacity: 1, duration: 0}, 'papersRollIn+=0.3')
    .from('#caterpillar > g[fill="#00fe00"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.3')
    .to('#caterpillar > g[fill="#fefe00"] > path', {opacity: 1, duration: 0}, 'papersRollIn+=0.4')
    .from('#caterpillar > g[fill="#fefe00"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.4')
    .to('#caterpillar > g[fill="#fea400"] > path', {opacity: 1, duration: 0}, 'papersRollIn+=0.5')
    .from('#caterpillar > g[fill="#fea400"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.5')
    .to('#caterpillar > g[fill="#fe0000"] > path', {opacity: 1, duration: 0}, 'papersRollIn+=0.6')
    .from('#caterpillar > g[fill="#fe0000"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.6')

    .addLabel('cutouts')
    .to('#caterpillar > g[fill^="#"] > circle', {opacity: 1, duration: 0}, 'cutouts')
    .to('#caterpillar > g[fill=none] > circle', {opacity: 1, duration: 0, stagger: 0.3}, 'cutouts')
    .to('#caterpillar > g[fill=none] > circle', {attr: {'stroke-dasharray': '100%'}, duration: 6.5, stagger: 0.3}, 'cutouts')

    .addLabel('papersRollOut', '-=5')
    .to('#caterpillar defs mask circle', {attr: {fill: '#000'}, duration: 0}, 'papersRollOut')

    .addLabel('redRollOut', 'papersRollOut')
    .to('#caterpillar > g[fill="#fe0000"] > path', {x: 5, duration: 0.4}, 'redRollOut')
    .to('#caterpillar > g[fill=none] > circle[cx="39"]', {opacity: 0, duration: 0.4}, 'redRollOut')
    .to('#caterpillar > g[fill="#fe0000"] > path', {x: -500, duration: 7}, 'redRollOut+=1')

    .addLabel('orangeRollOut', 'redRollOut+=1')
    .to('#caterpillar > g[fill="#fea400"] > path', {x: 5, duration: 0.35}, 'orangeRollOut')
    .to('#caterpillar > g[fill=none] > circle[cx="44"]', {opacity: 0, duration: 0.35}, 'orangeRollOut')
    .to('#caterpillar > g[fill="#fea400"] > path', {x: -500, duration: 6}, 'orangeRollOut+=1')

    .addLabel('yellowRollOut', 'orangeRollOut+=0.9')
    .to('#caterpillar > g[fill="#fefe00"] > path', {x: 5, duration: 0.3}, 'yellowRollOut')
    .to('#caterpillar > g[fill=none] > circle[cx="48.5"]', {opacity: 0, duration: 0.3}, 'yellowRollOut')
    .to('#caterpillar > g[fill="#fefe00"] > path', {x: -500, duration: 5}, 'yellowRollOut+=0.9')

    .addLabel('greenRollOut', 'yellowRollOut+=0.8')
    .to('#caterpillar > g[fill="#00fe00"] > path', {x: 5, duration: 0.25}, 'greenRollOut')
    .to('#caterpillar > g[fill=none] > circle[cx="53"]', {opacity: 0, duration: 0.25}, 'greenRollOut')
    .to('#caterpillar > g[fill="#00fe00"] > path', {x: -500, duration: 4}, 'greenRollOut+=0.8')

    .addLabel('blueRollOut', 'greenRollOut+=0.7')
    .to('#caterpillar > g[fill="#0000fe"] > path', {x: 5, duration: 0.2}, 'blueRollOut')
    .to('#caterpillar > g[fill=none] > circle[cx="57"]', {opacity: 0, duration: 0.2}, 'blueRollOut')
    .to('#caterpillar > g[fill="#0000fe"] > path', {x: -500, duration: 3}, 'blueRollOut+=0.7')

    .addLabel('indigoRollOut', 'blueRollOut+=0.6')
    .to('#caterpillar > g[fill="#4b0081"] > path', {x: 5, duration: 0.15}, 'indigoRollOut')
    .to('#caterpillar > g[fill=none] > circle[cx="60"]', {opacity: 0, duration: 0.15}, 'indigoRollOut')
    .to('#caterpillar > g[fill="#4b0081"] > path', {x: -500, duration: 2}, 'indigoRollOut+=0.6')

    .addLabel('violetRollOut', 'indigoRollOut+=0.5')
    .to('#caterpillar > g[fill="#84f"] > path', {x: 5, duration: 0.1}, 'violetRollOut')
    .to('#caterpillar > g[fill=none] > circle[cx="62"]', {opacity: 0, duration: 0.1}, 'violetRollOut')
    .to('#caterpillar > g[fill="#84f"] > path', {x: -500, duration: 1}, 'violetRollOut+=0.5')

    .addLabel('openEyes', '-=1')
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {opacity: 1, duration: 0})
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 1.5}, duration: 1.5})

    .addLabel('narrowEyes', '+=2')
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 0.5, duration: 0.5}}, 'narrowEyes')

    .addLabel('shake', '+=1')
    .to('#caterpillar > g[fill="#84f"] > circle', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#4b0081"] > circle', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#0000fe"] > circle', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#00fe00"] > circle', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fefe00"] > circle', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fea400"] > circle', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fe0000"] > circle', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')

  const tl2 = gsap.timeline({id: 'growBits', delay: 21})

  tl2.addLabel('growAntennae')
    .to('#caterpillar > circle', {opacity: 1, duration: 0}, 'growAntennae')
    .to('#caterpillar > path[stroke="#010101"]', {opacity: 1, duration: 0}, 'growAntennae')
    .from('#caterpillar > circle', {transform: 'scale(0)'}, 'growAntennae')
    .from('#caterpillar > path[stroke="#010101"]', {transform: 'scale(0)'}, 'growAntennae')

    .addLabel('growLegs', 'growAntennae+=0.1')
    .to('#caterpillar > g[stroke="#010102"] > path', {opacity: 1, duration: 0}, 'growLegs')
    .to('#caterpillar > g[stroke="#010102"] > path', {y: 3, duration: 3}, 'growLegs')

    .then(() => tl.kill())

  const tl3 = gsap.timeline({id: 'finale', delay: 26})

  tl3.to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 1.5}, duration: 0.5})
    .to('#caterpillar > g > ellipse[fill=none]', {opacity: 1, duration: 0})
    .to('#caterpillar defs clipPath ellipse', {y: -5, duration: 1})
    
    .addLabel('fadeOut')
    .to('#caterpillar > g', {opacity: 0, duration: 2}, 'fadeOut')
    .to('#caterpillar > path', {opacity: 0, duration: 2}, 'fadeOut')
    .to('#caterpillar > circle', {opacity: 0, duration: 2}, 'fadeOut')
    .to('#caterpillar > text', {fill: '#cccf', duration: 2}, 'fadeOut')
}


export { pageRollIn, showCaterpillar, openEyes, closeEyes, smile, blink }
