---
title: 网站上线流程
date: 2020-09-14
categories:
 - linux
tags:
 - js
---

**记录下自己搭建网站的过程，并附上一些教程网址**

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
1.windows本地安装git,关联本地git仓库至github;  
2.centos通过github拉取项目，[Linux 下建立 Git 与 GitHub 的连接](https://www.cnblogs.com/woider/p/6533709.html)
3.通过nginx运行项目