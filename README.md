# Blogz

> ⼀个静态博客前端⻚⾯。⽀持通过 Markdown 语法写博客，可读取并解析博客⽬录下的⽂章，⽣成博客⻚⾯。 

## 创建生成博客

```shell
# 第一次使用执行此命令
npm link

# 创建一篇博客
# 博客创建后会在 articles 目录下生成一个 markdown 文件
# 具体说明可以查看 articles/README.md
blogz create 'articles title'

# 创建/修改博客后发布
blogz build
```

## 构建项目

```shell
# 安装依赖
yarn install

# 启动热更新服务器
yarn start

# 运行所有测试
yarn test

# 构建线上代码
yarn build
```