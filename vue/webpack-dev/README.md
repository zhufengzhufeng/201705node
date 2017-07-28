## 先安装webpack
- 不建议安装到全局,最好选用本地安装，不会导致版本问题
```
npm install webpack -g
```
- 本地安装webpack
```
npm install webpack --save-dev
```
## 跑起webpack 
```
npm run start
```

> 会将代码打包到dist目录下，自动识别commonjs规范和es6规范

## 安装babel
```
npm install babel-core babel-loader --save-dev
```

## 创建.babelrc文件
- 告诉翻译如何翻译
```
npm install babel-preset-es2015 --save-dev
```
- 翻译es7语法
```
npm install babel-preset-stage-0 --save-dev
```

## css加载器
- css-loader是为了识别css样式
- style-loader 为了插入到html中
```
npm install css-loader style-loader --save-dev
```

## less加载器
```
npm install less-loader less --save-dev
```

## 图片加载器
```
npm install url-loader file-loader --save-dev
```

## 打包html
```
npm install html-webpack-plugin --save-dev
```

## 启动webpack服务 实现热更新
- 在内存中打包
```
npm install webpack-dev-server --save-dev
```


## vue-cli
```
npm install vue-cli -g
```

## 初始化项目
- vue init 模板名 项目名
```
vue init simple simple-demo
vue init webpack-simple webpack-simple
vue init webpack webpack-pro
```


## vue的组成
```
runtime + compiler
```


## 初始化成功后
```
cd 项目名 && npm install
npm run dev
```




