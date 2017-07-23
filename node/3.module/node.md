## 文件模块
- 必须引用是加相对路径

## 第三方模块
- 必须要安装

### 第三方模块全局使用 (命令行)
- http-server,在npm下做了一个映射 当在命令下执行命令时 会去npm下查找，并没有安置的全局的环境变量中
```
npm install http-server -g
npm install -g nrm 帮你切换源头
nrm ls
nrm test 测试网络
nrm use taobao 使用淘宝源
```

### 本地使用 (安装到当前目录在代码中使用)

- 安装之前需要初始化（可以记录在小本上） package.json不能有注释,项目名字不能有中文 不能有特殊字符 不能有大写

```
npm init -y
```

- 下载第三方模块
    - 开发依赖 开发时用的 上线就不要了 less
        ```
        npm install less --save-dev
        ```
    - 项目依赖 开发时用的 上线时也需要 jquery 
        ```
        npm install jquery --save
        ```

## 卸载依赖
```
npm uninstall xxx --save-dev/--save
```
    
## 安装全部依赖
```
npm install
```