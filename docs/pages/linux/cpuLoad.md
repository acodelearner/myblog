---
title: 云服务器被木马攻击导致CPU负载过高
date: 2021-06-03
categories:
 - linux
tags:
 - centos
---
前段时间收到微信推送通知服务器被攻击，并没有放在心上<font color=#9c9c9c>~~因为不知道怎么办~~</font>。  
但是最近发现云服务器的CPU占用一直处于100%，怀疑是上次攻击被注入了什么奇怪的病毒。  
  
    
      
下面进行排查  
登录控制台，输入<code>top</code>指令，发现有一个进程，占用了大量的cpu，和内存
![未知进程](/linux/centos/unkownpro.png)  
**该进程CPU占用高达99%**  
  
接着输入<code>netstat -antlp</code>指令，发现有个奇怪的进程
![未知IP](/linux/centos/unkownIp.png)  
百度发现该IP来自荷兰...  
使用<code>ls -l /proc/上面的PID/exe</code>查询进程的路径 
进入该路径，使用指令<code>rm -rf kswapd0</code>删除kswapd0文件  
再使用指令<code>kill PID</code>杀掉异常进程  
过了一会儿后，服务器恢复正常。  
![恢复正常](/linux/centos/cpuUsed.png)  