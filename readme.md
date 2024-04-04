# ChatServer（测试服务）主要用于测试 WebSocket

该服务依托于[SimpCloud](https://github.com/chelizichen/Simp)平台进行发布部署与运维。

通常，主函数的结构如下

````go
// 主函数初始化配置文件与上下文
// 加载对应的服务与静态资源后
// 监听端口 启动服务
func main() {
    ctx := h.NewSimpHttpCtx("simp.yaml") // 加载配置文件
    ctx.Use(service.BlogService) // 加载服务
    ctx.UseSPA("/web", "dist") // 使用SPA
    ctx.Static("/imgs", "imgs") // 使用存储
    h.NewSimpHttpServer(ctx) // 启动服务
}
````

总结构如下

* client 前端
* configuration 加载配置文件
* service 服务入口
* storage 数据存储
* build\.sh 自动打包脚本文件
* simp.yaml 配置文件
* main.go  主服务入口
  