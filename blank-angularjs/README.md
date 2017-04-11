# 使用 gulp + bower 构成的前端集成开发环境

## 项目基于 AngularJS进行开发，具体依赖请参考 `bower.json`

由于国外的`npm`源比较慢，建议修改`npm`配置改为国内源:`https://registry.npm.taobao.org`，命令如下：

```shell
# 设置国内源
npm config set registry=https://registry.npm.taobao.org 
# 设置loglevel日志等级为info
npm config set loglevel=info
# 查询npm 配置
npm config list
```


## 运行步骤

- 执行 `npm install` : 安装 `gulp` 和 `bower` 依赖
- 执行 `gulp serve` : 运行测试服务
- 打开浏览器访问 `localhost:3000` : 访问应用