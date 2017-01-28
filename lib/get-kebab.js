'use strict'

const shuffle = require('knuth-shuffle').knuthShuffle

module.exports = () => {
  const data = [
    {
      title: 'Ohhh, nooooooo!',
      imageUrl: 'https://robots.kebabstudios.party/the-baaaaaaad-kebab.png',
      description: 'http://i.giphy.com/a2YSruRtReIAo.gif'
    },
    {
      title: 'Yummy!!',
      imageUrl: 'http://i.giphy.com/3o85xkqfu7tMeLyh8I.gif',
      description: 'You ate the really yummy kebab'
    },
    {
      title: 'Meh!',
      imageUrl: 'http://i.giphy.com/6MzgKYjeIR5EA.gif',
      description: 'You ate the meh kebab'
    },
    {
      title: 'Happy!',
      imageUrl: 'http://i.giphy.com/3oz8xRF0v9WMAUVLNK.gif',
      description: 'You ate the happy kebab'
    },
    {
      title: 'Tasty!',
      imageUrl: 'http://i.giphy.com/nuRXXyy020kta.gif',
      description: 'You ate the tasty kebab'
    },
    {
      title: 'Gourmet!',
      imageUrl: 'http://i.giphy.com/3o7qDWp7hxhi1N8oF2.gif',
      description: 'You ate the seriously gourmet kebab'
    }
  ]

  const shuffled = shuffle(data.slice(0))

  return shuffled[0]
}
