---
layout: doc
---

### 前言

想必大家一定听说过 Nginx，若没听说过它，那么一定听过它的 同行 Apache 吧！Nginx 同 Apache 一样都是一种 Web 服务器。如果你还是对它不够了解，可以自己去深入的学习一下 Nginx 相关的知识，这里不做过多的介绍了，今天我们就来聊聊使用 Nginx 如何来部署我们开发好的前端 Vue 项目。

### Nginx 环境搭建

我们要使用 Nginx 那么就必须先要安装它。这里做的演示是本地服务，所以就安装到了自己的本地电脑上，如果是真正的要部署到线上服务器的话，我们需要在公司的服务器上安装 Nginx 来帮助我们来实现前端项目的部署工作。

本地电脑环境： MAC OS

至于怎么安装的话，我这边不做详细的介绍了，网络上像 Windows 上安装 Nginx、Mac 上安装 Nginx，这样的帖子还是非常多的，下面给大家贴出两个链接地址：

- [Mac系统下nginx的安装](https://www.jianshu.com/p/fae1c72e2b6e)

- [windows下nginx的安装及使用](https://www.cnblogs.com/jiangwangxiang/p/8481661.html)


下面是我的 Nginx 的安装目录

![Nginx安装目录位置](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/19/170f1e14cadbe5fc~tplv-t2oaga2asx-image.image)

安装路径：

```bash
/usr/local/Cellar/nginx/1.17.8
```

如果是你安装的，可能版本号不一样，改一下版本号就可以了


### 前端项目打包

首先我们的前端项目不可能直接放到服务器的根目录下去，一般都会起一个前端服务的项目名称，那么就需要先在打包之前在 Vue 的配置文件里去修改公共路径的配置，改成我们前端项目服务的名字，这里是 admin, 如下图

![Vue配置文件](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/19/170f1e14cac065a4~tplv-t2oaga2asx-image.image)

同时在项目的 router 目录下 index.js 为 Vue 项目指定路由基本路径为 /admin/

![修改路由文件](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/19/170f1e14c5c4201d~tplv-t2oaga2asx-image.image)

在 Vue 项目的根目录执行下面的命令，打包成 dist 目录 

```bash
npm run build
```

将打包生成好的 dist 目录重命名为 admin


### Nginx 部署项目

将命名好的 admin 前端项目放到 Nginx 的 html 目录下去

命令行在 Finder 打开 html 目录：

```bash
open /usr/local/Cellar/nginx/1.17.8/
```

![打开html目录](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/19/170f1e14c6fd9fc9~tplv-t2oaga2asx-image.image)

然后将 admin 拖到 html 中就可以了


### 修改 Nginx 配置文件

现在我们需要修改一下 Nginx 的配置文件 nginx.conf

配置改动：

- 端口号为   9200

- 服务名称为 localhost

- root目录为 html

- location地址为 /admin

- 处理前台路由 history 模式刷新 404 的问题

```conf
http {
   server {
        # 监听的端口号
        listen       9200;

        # 服务名称 生产环境要修改成 公网ip 如 47.105.134.120
        server_name  localhost;

        # 配置根目录的地址是以 nginx 下的 html 文件夹为根目录来查找的
        root html;

        # 配置默认的主页显示 比如 47.105.134.120:8080 显示的 index 页面
        location / {
            try_files $uri $uri/ /index.html;	    
        }
        # 配置我们的 admin 的前台服务 比如 47.105.134.120:8080/admin/index.html
        location ^~ /admin {
            # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
            try_files $uri $uri/ /admin/index.html;
        }
        # 如果你想配置多个项目的话，可以复制上面的，修改一下就可以同时部署多个前端项目了
        # 比如
        # location ^~ /blog {
            # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
            # try_files $uri $uri/ /blog/index.html;
        # }
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    include servers/*;
}
```

### 启动 Nginx 访问项目

配置修改好之后，我们就可以使用 Nginx 的命令来启动 Nginx 服务

```bash
cd /usr/local/Cellar/nginx/1.17.8/bin/
nginx -s reload
```
如果没有任何提示，就说明 Nginx 服务重新加载配置成功了

然后我们就可以在浏览器地址栏里访问`http://localhost:9200/admin`了。

![项目访问演示](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/19/170f1e14c7c726f0~tplv-t2oaga2asx-image.image)

---

**总结**：

Nginx是一款自由的、开源的、高性能的HTTP服务器和反向代理服务器。同时也是一个IMAP、POP3、SMTP代理服务器。Nginx可以作为一个HTTP服务器进行网站的发布处理，另外Nginx可以作为反向代理进行负载均衡的实现。本文主要总结了在使用 Nginx 部署前端项目时应该如何配置，同时还可以通过 Nginx 来配置后台服务。
