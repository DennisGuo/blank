#Geobeans 项目复用框架

为了方便项目的快速搭建，整理并编写了基于java的后端框架blankServer,和前端框架blank。
在实际的项目中，可以clone该项目进行快速开发。


## 目录

为了方便查找相关的项目模板特提供目录如下：

### 前端学习项目

- 【AngularJs】    
[https://github.com/DennisGuo/blank](https://github.com/DennisGuo/blank)
- 【jQuery&Bootstrap】    
[https://github.com/DennisGuo/site-boilerplate](https://github.com/DennisGuo/site-boilerplate)
- 【ReactJs】    
[https://github.com/DennisGuo/geobeans-programming-rule](https://github.com/DennisGuo/geobeans-programming-rule)


clone 项目的 git 命令：

> git clone https://git.oschina.net/ghx/blank.git

## 后端：blankServer

后端项目构建和包依赖管理使用gradle, 包依赖仓库使用 `jcenter()`


- 后端接口的安全使用流程

![Alt 接口流程时序图](http://www.plantuml.com/plantuml/img/SoWkIImgAStDuUNYvNe-PSMpZkqAkdOAJpjxdwzUhs2by7pcxgTxf_9oGGL0KXFwe59WrK_NjprVqFYYR_lJ_cab-TcfUKydzK1adknV-AnnFL0hH0EorgSTIvvDMujimBCvdS-cTZnhMFv-JqzCtlCfyvzrJ00R1-G_sT7tOltsPnkRF0DUx9_zOc7FyzqJdwwR1PHvkdCRL6JFvAThPyG0LNT07D6w7MJYz6qmGpj1_eEv1Dc3B_PFUJfx7WwN8pmD3m-mHTYLOmsbfpkMFP_R0DO0yKHHQd79ixwbJ_iNumaQi7fuc01jWdi5lpyW1Z-Rkk5Pxpg4Su3ge55hfV1inwPdyoS_dzhpSkuY0000)

## 前端：blank

前端的集成开发环境需要使用`NodeJS` 以及相关的包

![Alt 前端开发环境](http://plantuml.com/plantuml/png/IylFIKajKdZQsVjyzVgdUngUzazythV-wQ9c1GLbqyH4ezJKQYuk1GZ8oqz9LL3o0v9UnKeAocbfYOa61We8UOIQfFpor28bLF6IL8MYpFIC4gldwnO-dz3sPD_S5rkdOT6RNffJW4EhWfN2yptJNgoV-BYXyTcybgUxTm4PJoTqFDsvBIRlQL_typqhGJBRjp_RtWPYT4v-sjCQa_TyziHdVSj1IlidFjtH39BPslrY_TJdQpjXzjGgSDK20000)

安装NodeJS：到[https://nodejs.org/en/](https://nodejs.org/en/)下载最新的`NodeJS`运行环境，`node -v` 查看版本

由于国外的`npm`源比较慢，建议修改`npm`配置改为国内源:`https://registry.npm.taobao.org`，命令如下：

```shell
# 设置国内源
npm config set registry=https://registry.npm.taobao.org 
# 设置loglevel日志等级为info
npm config set loglevel=info
# 查询npm 配置
npm config list
```
### Gulp 相关内容






