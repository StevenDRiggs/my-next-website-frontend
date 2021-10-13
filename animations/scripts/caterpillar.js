import { gsap } from 'gsap'


const pageRollIn = () => {
  const tl = gsap.timeline({id: 'pageRollIn', delay: 1})

  tl.addLabel('setup')
    .set('#caterpillar > g > circle', {opacity: 0}, 'setup')
    .set('#caterpillar > g > path', {opacity: 0}, 'setup')
    .set('#caterpillar > g > ellipse', {opacity: 0}, 'setup')
    .set('#caterpillar > circle', {opacity: 0}, 'setup') 
    .set('#caterpillar > path', {opacity: 0}, 'setup') 

    .addLabel('papersRollIn', '+=1')
    .set('#caterpillar > g[fill="#84f"] > path', {opacity: 1}, 'papersRollIn')
    .from('#caterpillar > g[fill="#84f"] > path', {x: 500, duration: 0.5}, 'papersRollIn')
    .set('#caterpillar > g[fill="#4b0081"] > path', {opacity: 1}, 'papersRollIn+=0.1')
    .from('#caterpillar > g[fill="#4b0081"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.1')
    .set('#caterpillar > g[fill="#0000fe"] > path', {opacity: 1}, 'papersRollIn+=0.2')
    .from('#caterpillar > g[fill="#0000fe"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.2')
    .set('#caterpillar > g[fill="#00fe00"] > path', {opacity: 1}, 'papersRollIn+=0.3')
    .from('#caterpillar > g[fill="#00fe00"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.3')
    .set('#caterpillar > g[fill="#fefe00"] > path', {opacity: 1}, 'papersRollIn+=0.4')
    .from('#caterpillar > g[fill="#fefe00"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.4')
    .set('#caterpillar > g[fill="#fea400"] > path', {opacity: 1}, 'papersRollIn+=0.5')
    .from('#caterpillar > g[fill="#fea400"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.5')
    .set('#caterpillar > g[fill="#fe0000"] > path', {opacity: 1}, 'papersRollIn+=0.6')
    .from('#caterpillar > g[fill="#fe0000"] > path', {x: 500, duration: 0.5}, 'papersRollIn+=0.6')

    .addLabel('cutouts')
    .set('#caterpillar > g[fill^="#"] > circle', {opacity: 1}, 'cutouts')
    .set('#caterpillar > g[fill=none] > circle', {opacity: 1, stagger: 0.3}, 'cutouts')
    .to('#caterpillar > g[fill=none] > circle', {attr: {'stroke-dasharray': '100%'}, duration: 6.5, stagger: 0.3}, 'cutouts')

    .addLabel('papersRollOut', '-=5')
    .set('#caterpillar defs mask circle', {attr: {fill: '#000'}}, 'papersRollOut')

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
    .set('#caterpillar > g[fill="#fefefe"] > ellipse', {opacity: 1})
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 1.5}, duration: 1.5})

    .addLabel('narrowEyes', '+=2')
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 0.5, duration: 0.5}}, 'narrowEyes')

    .addLabel('shake', '+=1')
    .to('#caterpillar > g[fill="#84f"] > circle', {id: 'violetShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#4b0081"] > circle', {id: 'indigoShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#0000fe"] > circle', {id: 'blueShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#00fe00"] > circle', {id: 'greenShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fefe00"] > circle', {id: 'yellowShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fea400"] > circle', {id: 'orangeShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fe0000"] > circle', {id: 'redShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {id: 'eyesShake', x: 0.1, y: 0.1, duration: 0.1, yoyo: true, repeat: -1}, 'shake')

    .addLabel('growAntennae', 'shake+=1')
    .set('#caterpillar > circle', {opacity: 1}, 'growAntennae')
    .set('#caterpillar > path[stroke="#010101"]', {opacity: 1}, 'growAntennae')
    .from('#caterpillar > circle', {transform: 'scale(0)'}, 'growAntennae')
    .from('#caterpillar > path[stroke="#010101"]', {transform: 'scale(0)'}, 'growAntennae')

    .addLabel('growLegs', 'growAntennae+=0.1')
    .set('#caterpillar > g[stroke="#010102"] > path', {opacity: 1}, 'growLegs')
    .to('#caterpillar > g[stroke="#010102"] > path', {y: 3, duration: 3}, 'growLegs')

    .call(() => {
      tl.getById('redShake').pause()
      tl.getById('eyesShake').pause()
      tl.getById('orangeShake').pause()
      tl.getById('yellowShake').pause()
      tl.getById('greenShake').pause()
      tl.getById('blueShake').pause()
      tl.getById('indigoShake').pause()
      tl.getById('violetShake').pause()
    })

    .addLabel('happyNow')
    .to('#caterpillar > g[fill="#fefefe"] > ellipse', {attr: {ry: 1.5}, duration: 0.5})
    .set('#caterpillar > g > ellipse[fill=none]', {opacity: 1})
    .to('#caterpillar defs clipPath ellipse', {y: -5, duration: 1})
    
    .addLabel('fadeOut')
    .to('#caterpillar > g', {opacity: 0, duration: 2}, 'fadeOut')
    .to('#caterpillar > path', {opacity: 0, duration: 2}, 'fadeOut')
    .to('#caterpillar > circle', {opacity: 0, duration: 2}, 'fadeOut')
    .to('#caterpillar > text', {fill: '#cccf', duration: 2}, 'fadeOut')

    .addLabel('end')
}

const skipAnim = () => {
  const tl = gsap.getById('pageRollIn')

  if (tl) {
    tl.pause('end')
  }
}

const replayAnim = () => {
  const tl = gsap.getById('pageRollIn')

  tl.restart()
}


export { pageRollIn, skipAnim, replayAnim }
