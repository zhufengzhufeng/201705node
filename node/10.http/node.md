## 服务端
- 要有特定ip 和特定的端口
- 能返回静态页面，而且还要做到返回动态内容
- response 响应给客户端一些内容

## 客户端
- 能像特定ip 和特定的端口发送请求的
- request 发给服务端的请求

> 数据交互一般json字符串格式来传输，JSON.stringify 解析的时候采用JSON.parse

## 常用的http动词
- 查询GET(URL地址) 增加POST(请求体发的数据) 修改PUT 删除DELETE  试探OPTIONS(跨域)

## referer判断来源


## 请求
- 可以通过url传递参数
- 可以通过请求头传递参数
- 请求体传递数据

## 响应
- 可以通过响应行设置状态码
- 可以通过响应头设置响应类型
- 可以通过响应体返回数据

## mac
- sudo vi /etc/host
