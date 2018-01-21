# y

> y

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
``` 

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##参考资料
1、vux样式库[guide](https://vux.li/#/)
2、vue2 框架 官网[guide](https://cn.vuejs.org/)
3、vue-router 前台路由 官网[guide](https://router.vuejs.org/zh-cn/)
4、手脚架 vue-cli 官网[guide](https://www.npmjs.com/package/vue-cli)
5、axios ajax请求 官网[guide](https://www.npmjs.com/package/axios)
5、sass css编辑 官网[guide](https://www.sass.hk/)

路由命名：
  文件夹/组件名  如：order/list 路由路径：'order/list'
commonJs
  ————src/http.js:全局axios拦截器，具体查看官网
代理解决跨域部分
  ————config/index.js：请求代理，参考http-proxy-middleware
  ```
  proxyTable: {
        '/otc': {
           target: 'http://11495-tech-other-openpawn.test.za-tech.net',
          //target: 'http://192.168.27.46:8080',
          changeOrigin: true,
  
        },
      },
  ```
tool.js
  ————常用数据处理函数

