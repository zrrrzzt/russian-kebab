const { readFileSync } = require('fs')
const marked = require('marked')
const { parse } = require('url')
const { send } = require('micro')
const renderPage = require('./lib/render-page')
const getKebab = require('./lib/get-kebab')

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)
  if (pathname === '/json' || pathname === '/html') {
    const results = getKebab()

    if (pathname === '/json') {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'GET')
      send(response, 200, results)
    } else if (pathname === '/html') {
      send(response, 200, renderPage(results))
    }
  } else {
    const readme = readFileSync(`${__dirname}/README.md`, 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
