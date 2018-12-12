# megalo-api-patch
> 在 [megalo](https://github.com/kaola-fed/megalo) 中使用统一的小程序 API 写法, 可自动转换为对应小程序的API写法。

## 安装
``` bash
npm i megalo-api-patch
```

## 使用
``` bash
// main.js
import Vue from 'vue'
import MegaloApiPatch from 'megalo-api-patch'

Vue.use(MegaloApiPatch)
```

```js
// Page.vue
this.$api.[apiName]
```

## API
#### 请求
##### request
发起 HTTPS 网络请求

``` this.$api.request(obj) ```

**obj 入参：**

| 属性            | 类型       | 必填    | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ | ------ |
| url             | string    | 是     | 地址 | |
| data            | object    | 否     | 请求的参数 | |
| header          | Object    | 否     | 请求的 header | |
| method          | string    | 否     | HTTP 请求方法 | |
| timeout         | Number    | 否     | 超时时间，单位ms，默认30000 | 微信、百度 不支持 |
| dataType        | string    | 否     | 返回的数据格式 | |
| responseType    | string    | 否     | 响应的数据类型 | 支付宝 不支持|
| success         | function  | 否     | 接口调用成功的回调函数 | |
| fail            | function  | 否     | 接口调用失败的回调函数 | |
| complete        | function  | 否     | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| data            |           | 服务器返回的数据 | |
| statusCode      | number    | 服务器返回的 HTTP 状态码 | |
| header          | Object    | 服务器返回的 HTTP Response Header | |

---

#### 上传、下载
##### uploadFile
将本地资源上传到服务器

``` this.$api.uploadFile(obj) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| url             | string    | 是        | 开发者服务器地址 | |
| filePath        | string    | 是        | 要上传文件资源的路径 | |
| name            | string    | 是        | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 | |
| fileType        | string    | 是(支付宝) | 文件类型，image / video / audio | 微信、百度不支持 |
| header          | Object    | 否        | HTTP 请求 Header | |
| formData        | Object    | 否        | HTTP 请求中其他额外的 form data | |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| data            |           | 服务器返回的数据 | |
| statusCode      | number    | 服务器返回的 HTTP 状态码 | |
| header          | Object    | 服务器返回的 HTTP Response Header | 微信、百度不支持 |

---

##### downloadFile
下载文件资源到本地

``` this.$api.uploadFile(obj) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| url             | string    | 是        | 下载资源的 url | |
| header          | Object    | 否        | HTTP 请求的 Header | |
| filePath        | string    | 否        | 指定文件下载后存储的路径 | 百度、支付宝不支持|
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| tempFilePath    | String    | 临时文件路径 | |
| statusCode      | number    | 开发者服务器返回的 HTTP 状态码 | 支付宝不支持 |

---
