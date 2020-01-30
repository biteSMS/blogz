interface Config {
  title: string
  navLinks: { name: string; url: string }[]
}

const config: Config = {
  title: `Wentz's Blog`,

  navLinks: [
    {
      name: '首页',
      url: '/'
    },
    {
      name: '标签',
      url: '/tags'
    },
    {
      name: '留言板',
      url: '/article/1'
    },
    {
      name: 'Google',
      url: 'https://www.google.com'
    }
  ]
}

export default config
