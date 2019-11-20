const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const articlesDir = path.join(__dirname, '../articles')
const articles = fs
  .readdirSync(articlesDir)
  .filter(
    filename =>
      filename.indexOf('.') !== 0 &&
      filename.split('.').splice(-1)[0] === 'md' &&
      filename !== 'README.md'
  )
const parseArticles = articles.map(article =>
  matter(fs.readFileSync(path.join(articlesDir, article)))
)
console.log(parseArticles)

fs.writeFileSync(
  path.join(__dirname, '../public/__blogz__.js'),
  `window.__BLOGZ__ = ${JSON.stringify(parseArticles)}`
)

// fs.writeFileSync(
//   path.join(__dirname, '../src/assets/_gen/__blogz__.json'),
//   JSON.stringify(parseArticles)
// )
