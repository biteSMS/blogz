const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const moment = require('moment')

const __BLOGZ__ = {
  blogs: []
}

// 解析 Markdown
const articlesDir = path.join(__dirname, '../articles')
const articles = fs
  .readdirSync(articlesDir)
  .filter(
    filename =>
      filename.indexOf('.') !== 0 &&
      filename.split('.').splice(-1)[0] === 'md' &&
      filename !== 'README.md'
  )
const parseArticles = articles.map(article => ({
  ...matter(fs.readFileSync(path.join(articlesDir, article))),
  enTitle: article.split('.')[0]
}))

// 按时间倒叙排序
parseArticles.sort((a, b) => (moment(a.data.date).isBefore(b.data.date) ? 1 : -1))
//console.log(parseArticles)

// 所有博客摘要
__BLOGZ__.blogs = parseArticles.map(s => ({ ...s.data, enTitle: s.enTitle }))
console.log(__BLOGZ__.blogs)

fs.writeFileSync(
  path.join(__dirname, '../public/__blogz__.js'),
  `window.__BLOGZ__ = ${JSON.stringify(__BLOGZ__)}`
)
