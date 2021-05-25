---
title: 初次接触JWT——加密用户信息
date: 2020-11-20
categories:
 - 前端
tags:
 - node.js
---

由于公司的项目需要使用到JWT，于是在摸鱼的时候调研了下JWT如何应用在项目中并写了个demo  

## JWT是什么？
::: details 点击查看官方解释  
JSON Web Token（JWT）是一个开放标准（RFC 7519），它定义了一种紧凑且独立的方式，可以在各方之间作为JSON对象安全地传输信息。此信息可以通过数字签名进行验证和信任。JWT可以使用秘密（使用HMAC算法）或使用RSA或ECDSA的公钥/私钥对进行签名。
:::

## 环境搭建与coding
1.[如何搭建koa2环境?](/frontend/ko2Build.md)  
**2.模拟登录**  
  在routes/users.js中编写模拟登录接口，运行项目（默认3000端口），用postman请求
```js
//├─ src
//│  └─ routes 
//│      └─ users.js  
//模拟登录
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  let userInfo
  if (userName === 'zhangsan' && password === 'abc') {
    //登录成功获取用户信息
    userInfo = {
      userId: 1,
      userName: 'zhangsan',
      nickName: '张三',
      gender: 1 //男
    }
  }
  if (userInfo == null) {
    ctx.body = {
      errno: -1,
      msg: '登录失败'
    }
    return
  }
  ctx.body = {
    errno: 0,
    msg: '登录成功'
  }
})
```
请求成功返回如下，可以看到，返回的信息是明文的，存在**安全隐患**  
![登录成功](/frontend/nodeJWT/login.png)  
**3.jwt加密**  
安装中间件用于jwt加密解密
```shell
npm i koa-jwt --save
npm i jsonwebtoken
```
app.js中引入中间件，并创建Jwt密钥
```js
//├─ src
//│  └─ app.js  
const jwtKoa = require('koa-jwt') //引入
const { SECRET } = require('../conf/constants.js') //密钥
app.use(jwtKoa({
  secret:SECRET
}).unless({
  path: [/^\/users\/login/] //自定义哪些目录忽略 jwt 验证
}))

//├─ conf 该文件夹为自己创建，用于存储密钥
//│  └─ constants.js  
//创建密钥 密钥是个常量。可以自定义设置。
module.exports = {
    SECRET: 'USK4*f_2fdKuJ*_1Ij'
}
```
更新登录路由接口，加密返回的信息
```js
const jwt = require('jsonwebtoken') //引入jwt
//模拟登录
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  let userInfo
  if (userName === 'zhangsan' && password === 'abc') {
    //登录成功获取用户信息
    userInfo = {
      userId: 1,
      userName: 'zhangsan',
      nickName: '张三',
      gender: 1 //男
    }
  }

  //加密 userInfo
  let token
  if (userInfo) {
    token = jwt.sign(userInfo, SECRET, { expiresIn: '1h' }) //设置Jwt加密的内容，密钥，过期时间
  }

  if (userInfo == null) {
    ctx.body = {
      errno: -1,
      msg: '登录失败'
    }
    return
  }
  ctx.body = {
    errno: 0,
    data: token
  }
})
```
通过Postman请求成功，看到返回的数据已经被加密了  
![登录加密](/frontend/nodeJWT/loginjwt.png)  
**4.获取加密内容**  
成功加密后，每次向服务端发送请求，都需要带上密钥和登录时返回的加密信息  
在第3步中模拟登录的路由代码下面，新增一个接口尝试获取加密的信息
```js
//├─ src
//│  └─ routes 
//│      └─ users.js  
//获取用户信息
const { SECRET } = require('../../conf/constants') //引入密钥
router.get('/getUserInfo', async (ctx, next) => {
  const token = ctx.header.authorization //获取请求头
  try {
    const payload = await verify(token.split(' ')[1], SECRET) //解密，SECRET为本地的密钥
    ctx.body = {
      errno: 0,
      userInfo: payload
    }
  } catch (ex) {
    ctx.body = {
      errno: -1,
      msg: 'failed'
    }
  }
})
```
在postman中测试请求，需要在header中加入key和value,分别为Authorization和Bearer+空格+登录返回的加密数据
![获取信息](/frontend/nodeJwt/getInfo.png)  
成功请求如上图所示，获得解密后的数据  
一个简单的使用jwt的demo就完成了，参考该流程，可以快速在实际项目中加入jwt加密