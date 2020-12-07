## 简介

* 一个针对ts node cli的模板项目
* 使用yarn build构建，构建产物在lib目录
* 使用本地测试需要执行export NODE_ENV=dev，把dev导入环境变量，没有环境变量则使用构建后的产物运行
* 执行yarn publish会自动构建
