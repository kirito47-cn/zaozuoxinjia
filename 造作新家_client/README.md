# zaozuoxinjia

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



页面分析

1、名字 造作新家

2、页面：首页 购物车 登录注册 商品详情 分类页面 服务页面 （我的订单 我的资料） 后台管理页面

3、首页：商品下滑菜单显示 轮播图 所有商品 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml8040\wps1.jpg) 

尾部介绍

4、登录：未登录 快捷登录/密码登录 注册

5、商品详情

图片 名字 价格 介绍 颜色分类 数量 立即购买 购物车

6、分类  数据库中展示

7、服务页面 折叠面板 右边文字

8、后台管理界面 ：增删改查

数据库分析

商品表：

| 字段名     | 类型 | 长度 | 描述     |
| ---------- | ---- | ---- | -------- |
| Shop_id    | int  |      | 主键     |
| Shop_name  | char | 20   | 商品名称 |
| Shop_price | int  |      | 商品价格 |
| Shop_desc  | text |      | 商品描述 |
| Shop_color | char | 25   | 商品颜色 |
| Shop_type  | int  |      | 商品类型 |

 

类型表

| 字段名  | 类型 | 长度 | 描述        |
| ------- | ---- | ---- | ----------- |
| Type_id | int  |      | 主键 类型id |
| type    | text |      | 商品大类    |

 

具体类型表

| 字段名              | 类型 | 长度 | 描述                |
| ------------------- | ---- | ---- | ------------------- |
| Particular_id       | int  |      | 主键 商品具体类型id |
| Particular_type     | char |      | 商品具体类型        |
| Particulat_parentid | int  |      | 对应的大类          |

 

 

 

 

 

 

 

 

 

用户表

| 字段名        | 类型 | 长度 | 描述        |
| ------------- | ---- | ---- | ----------- |
| User_id       | int  |      | 主键 用户id |
| User_username |      |      | 用户登录名  |
| User_password |      |      | 用户密码    |
| User_address  |      |      | 用户地址    |

订单表

| 字段名       | 类型 | 长度 | 描述        |
| ------------ | ---- | ---- | ----------- |
| Order_id     | int  |      | 订单id 主键 |
| Order_name   | char |      | 订单名字    |
| Order_price  | int  |      | 订单价格    |
| Order_color  | char |      | 订单颜色    |
| Order_number | int  |      | 订单数目    |
| Order_imgsrc | text |      | 订单图片    |

 

 前端路由

首页：‘/’

登录/注册页面:’/login’ “/register” 

分类页面:’/chair’ “/desk” “/sofa”

详情页面：”/item?shopID = ##”

购物车页:’/cart’

 

后台路由

首页:”/getall”

购物车页:’/getCart’

登录/注册页面:’/login’ “/register” 

分类页面:’/getchair’ “/getdesk” “/getsofa”

详情页面：’/getItem?shopID = ##’