// Controller for our headlines
// ============================
const db = require('../models')
const axios = require('axios')
const cheerio = require('cheerio')

const puppeteer = require('puppeteer')

const captureScreenshot = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({width: 1024, height: 768})
  await page.goto(url)
  const base64 = await page.screenshot({encoding: 'base64'})
  await browser.close()

  return base64
}

module.exports = {
  find: (req, res) => {
    let q = {}
    if(req.params.id) {
      q['_id'] = req.params.id
    }

    db.Link
      .find(q)
      .sort({ date: -1 })
      .then(result => {
        const url = result[0].url
        captureScreenshot(url).then(screenshot => {
          res.send(screenshot)
          // const img = new Buffer(screenshot, 'base64')

          // res.writeHead(200, {
          //   'Content-Type': 'image/png',
          //   'Content-Length': img.length
          // })
          // res.end(img)
        })
      })
  },

  create: (req, res) => {
    let newLink = {
      url: req.body.url
    }
    axios
      .get(newLink.url)
      .then(site => {
        const $ = cheerio.load(site.data)
        const title = $('head title').text()
        newLink.title = title || ''

        db.Link
          .create(newLink)
          .then(result => {
            res.json(result)
          })
      })
  },

  update: (req, res) => {
    db.Link
    .findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
    .then(result => {
      res.json(result)
    })
  },

  delete: (req, res) => {
    db.Link
      .remove({ _id: req.params.id })
      .then(result => {
        res.json(result)
      })
  }
}
