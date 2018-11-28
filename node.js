console.log('Started')

let axios = require('axios')
let cheerio = require('cheerio')
let fs = require('fs')
let trackList = []

axios.get('https://vipmp3.me/vipmp3/ozodbek-nazarbekov/page/3')
    .then((response) => {
        if (response.status === 200) {
            const html = response.data
            const $ = cheerio.load(html)
            const art = $('.track')

            for (let i = 0; i < art.length; i++) {
                if (art[i].hasOwnProperty('attribs')) {
                    trackList[i] = {
                        artist: art[i].attribs['data-artist'],
                        title: art[i].attribs['data-title'],
                        url: art[i].attribs['data-track']
                    }
                }
            }
            fs.writeFile('ozodbek3.json', JSON.stringify(trackList, null, 4),
                (err) => console.log('File successfully written!'))
        }
    }, (error) => console.log(err))
