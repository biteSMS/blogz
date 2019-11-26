const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const moment = require('moment')

const __BLOGZ__ = {
  blogs: [],
  tags: {}
}
const articlesDir = path.join(__dirname, '../articles')
const _articlesDir = path.join(__dirname, '../public/_articles')
const articleFileNames = fs
  .readdirSync(articlesDir)
  .filter(
    filename =>
      filename.indexOf('.') !== 0 &&
      filename.split('.').splice(-1)[0] === 'md' &&
      filename !== 'README.md'
  )
const articlePaths = articleFileNames.map(filename => path.join(articlesDir, filename))

// 解析 Markdown
const parseArticles = articleFileNames.map(filename => ({
  ...matter(fs.readFileSync(path.join(articlesDir, filename))),
  en_title: filename.split('.')[0],
  url: `/_articles/${filename}`
}))

// 按时间倒叙排序 blogs
parseArticles.sort((a, b) => (moment(a.data.date).isBefore(b.data.date) ? 1 : -1))

// 归纳 tags
parseArticles.map((s, i) =>
  s.data.tags.map(r =>
    __BLOGZ__.tags.hasOwnProperty(r) ? __BLOGZ__.tags[r].push(i) : (__BLOGZ__.tags[r] = [i])
  )
)
console.log(__BLOGZ__.tags)

// 所有博客摘要
__BLOGZ__.blogs = parseArticles.map(s => ({ ...s.data, en_title: s.en_title, url: s.url }))

// 将 __BLOGZ__ 写入 /public/__blogz__.js
fs.writeFileSync(
  path.join(__dirname, '../public/__blogz__.js'),
  `window.__BLOGZ__ = ${JSON.stringify(__BLOGZ__)}`
)

// 将 articles 文件夹中的文章移动到 public/_articles 下
articleFileNames.map(filename => {
  const articlePath = path.join(articlesDir, filename)
  const _articlePath = path.join(_articlesDir, filename)
  if (!fs.existsSync(_articlesDir)) {
    fs.mkdirSync(_articlesDir)
  }
  fs.writeFileSync(_articlePath, fs.readFileSync(articlePath))
})
