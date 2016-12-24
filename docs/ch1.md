# 1 개발환경 설정

## 1.1 webpack 설치
```
$ npm install webpack@2.2.0-rc.1 --save-dev
$ npm install webpack-dev-server@2.2.0-rc.0 --save-dev
```

## 1.2 package.json 파일
```json
"scripts": {
  "start": "webpack --config webpack.config.js"
},
```

## 1.3 babel 설치
```
$ npm install babel-core babel-loader --save-dev
```

## 1.4 webpack.config.js 파일
```javascript
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
  ]
}
```


## 1.5 babel-preset 설치
```
$ npm install babel-preset-env babel-preset-react --save-dev
```

## 1.6 .babelrc 파일
```
{
  "presets": ["env", "react"]
}
```


```
$ npm install rimraf --save-dev
```


```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack --config webpack.config.js",
  "prebuild": "rimraf dist"
},
```


```
$ npm install html-webpack-plugin --save-dev
```


```
$ npm install css-loader style-loader --save-dev
```


```
$ npm install extract-text-webpack-plugin --save-dev
```


```
$ npm install webpack-merge --save-dev
```
