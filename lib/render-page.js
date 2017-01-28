'use strict'

module.exports = (data) => {
  return `<html><body style="text-align: center"><h1 style="font-size: 4em">${data.title}</h1><div style="font-size: 3em; margin-bottom: 1em">${data.description}</div><img src="${data.imageUrl}"><div style="margin: 1em"><button style="font-size: 3em" onclick="window.location.reload()">Give me another kebab</button></div></body></html>`
}
