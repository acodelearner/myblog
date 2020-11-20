---
title: koa2项目创建与目录结构
date: 2020-11-19
categories:
 - 前端
tags:
 - node.js
---

koa2是Node.js的框架，记录下学习搭建koa2开发环境的过程

**1.安装koa**  
::: warning 注意  
请确保你的 Node.js 版本 >= 8.0。
:::
首先安装Koa，再创建项目，koa2-code为项目名
```shell
npm install -g koa-generator
koa2 -e koa2-code
```

**2.运行**  
安装依赖
```shell
npm i
npm run dev
```
启动项目成功，默认运行在3000端口

目录结构如下
```
├─ bin
│  └─ www （配置文件）
├─ conf （手动添加）
│  └─ constants.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ app.js
   ├─ public （静态资源）
   │  ├─ images
   │  ├─ javascripts
   │  └─ stylesheets
   │     └─ style.css
   ├─ routes （路由示例）
   │  ├─ index.js
   │  └─ users.js
   └─ `views` （页面）
      ├─ error.ejs
      └─ index.ejs

```

**成功示例**  
![成功实例](/frontend/koa2Build/koa2.png)
