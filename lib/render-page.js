'use strict'

module.exports = (data) => {
  return `<html><div style="text-align: center"><h1 style="font-size: 4em">${data.title}</h1><div style="font-size: 3em; margin-bottom: 1em">${data.description}</div><img src="${data.imageUrl}"></body></html>`
}
