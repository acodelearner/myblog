---
title: 网站上线与jenkins自动化部署
date: 2020-09-14
categories:
 - linux
tags:
 - centos
---

**记录下自己搭建网站的大体过程，并附上一些教程网址**  
**由于时间有点久了，没办法具体到每个步骤的细节，但是通过附链基本可以解决遇到的问题**  

## 服务器及域名购买
选用的腾讯云centos7学生优惠版本。  
建议提前做好域名备案，备案流程时长各地区有所不同。
## vue-press搭建个人博客 
vuepress快速搭建参考[官方文档](https://vuepress.vuejs.org/zh/)，自定义主题我选用了[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)。
## 服务器部署
我是在windows上进行网站开发，开发工作完成后下一步便是上传到服务器上进行部署。     
可以使用ftp把项目文件传到服务器上然后进行部署，但是每次更新都要手动上传文件到服务器，较为繁琐。    
[Linux 云服务器搭建 FTP 服务](https://cloud.tencent.com/document/product/213/10912)  
为了一劳永逸，最终选择了通过github作为中转站提交和拉取代码，步骤如下：  
1.windows本地安装git,关联本地git仓库至github（参考下面第二点的链接）;  
2.centos通过github拉取项目，[Linux 下建立 Git 与 GitHub 的连接](https://www.cnblogs.com/woider/p/6533709.html)  
3.通过nginx运行项目（如果服务器有Npm的话可以直接使用npm运行项目，就已经可以通过域名加端口的方式访问到项目了）  
[手动搭建 LNMP 环境（CentOS 7）](https://cloud.tencent.com/document/product/213/38056)
需要修改nginx配置文件，例如:
```js
    //server部分配置如下
    server{
        listen 8080;
        root /var/ftp/test/vuepress-master/dist;//指向项目打包后的路径
        server_name www.huangzhenyu.top;//域名
        index index.html index.htm;
        ...
    }
    location / {
        try_files $uri $uri/ /index.html;
    }
```
## 自动化部署
每次提交更新后需要手动到服务器拉取打包重启Nginx未免太过麻烦，调研了下jenkins自动化部署  
刚好公司工作也需要使用到jenkins,正好一起学习。  
配置流程如下：  
1.安装jdk  
2.配置jenkins，自定义部署脚本  
3.配置github webhooks  
参考链接：  
1.[构建jenkins](https://www.cnblogs.com/loveyouyou616/p/8714544.html)  
2.[配置github](https://segmentfault.com/a/1190000019212628)  

配置好之后便可以实现windows推送到github,服务器自动打包部署更新~