# 安装
``` bash
npm i megalo-api-patch
```

# 使用
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

# API
## 网络
### 请求
#### request
发起 HTTPS 网络请求

``` this.$api.request(Object object) ```

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

### 上传、下载
#### uploadFile
将本地资源上传到服务器

``` this.$api.uploadFile(Object object) ```

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

#### downloadFile
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

## 媒体
### 图片
#### chooseImage
从本地相册选择图片或使用相机拍照

``` this.$api.chooseImage(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| count           | number    | 否        | 最多可以选择的图片张数 | |
| sizeType        | Array     | 否        | 所选的图片的尺寸 | |
| sourceType	  | Array     | 否        | 选择图片的来源 | |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| tempFilePaths   | Array     | 图片的本地文件路径列表 | |
| tempFiles       | Array     | 图片的本地文件列表，每一项是一个 File 对象 | 支付宝不支持 |

---

### 相机组件控制
#### createCameraContext
创建 camera 上下文 CameraContext 对象**（支付宝小程序不支持）**

``` this.$api.createCameraContext() ```

**返回值：**

CameraContext

---

## 数据缓存
### Storage
#### setStorage
将数据存储在本地缓存中指定的 key 中

``` this.$api.setStorage(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| key             | string    | 是        | 本地缓存中指定的 key | |
| data            |           | 是        | 需要存储的内容 | |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---
#### setStorageSync
setStorage 的同步版本

``` this.$api.setStorage(string key, any data) ```

**入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| key             | string    | 是        | 本地缓存中指定的 key | |
| data            |           | 是        | 需要存储的内容 | |

---
#### getStorage
从本地缓存中异步获取指定 key 的内容

``` this.$api.getStorage(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| key             | string    | 是        | 本地缓存中指定的 key | |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---
#### getStorageSync
getStorage 的同步版本

``` this.$api.setStorage(string key) ```

**入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| key             | string    | 是        | 本地缓存中指定的 key | |

---
#### getStorageInfo
异步获取当前storage的相关信息

``` this.$api.getStorageInfo(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| keys            | Array     | 当前 storage 中所有的 key | |
| currentSize     | number    | 当前占用的空间大小, 单位 KB |  |
| limitSize       | number    | 限制的空间大小，单位 KB |  |

---
#### getStorageInfoSync
getStorageInfo 的同步版本

``` this.$api.getStorageInfoSync() ```

**返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| keys            | Array     | 当前 storage 中所有的 key | |
| currentSize     | number    | 当前占用的空间大小, 单位 KB |  |
| limitSize       | number    | 限制的空间大小，单位 KB |  |

---
#### removeStorage
从本地缓存中移除指定 key

``` this.$api.removeStorage(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| key             | string    | 是        | 本地缓存中指定的 key | |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---

#### removeStorageSync
removeStorage 的同步版本

``` this.$api.removeStorageSync(string key) ```

**入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| key             | string    | 是        | 本地缓存中指定的 key | |

---
#### clearStorage
清理本地数据缓存

``` this.$api.removeStorage(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---
#### clearStorageSync
clearStorage 的同步版本

``` this.$api.clearStorageSync() ```

---

## 位置
### 获取位置
#### getLocation
获取当前的地理位置

``` this.$api.getLocation(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| type            | string    | 否        | wgs84 返回 gps 坐标，gcj02 返回可用于 openLocation 的坐标 | 支付宝不支持 |
| altitude        | string    | 否        | 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度 | 支付宝不支持 |
| cacheTimeout    | Number    | 否        | 支付宝客户端经纬度定位缓存过期时间 | 微信、百度不支持 |
| aliType         | Number    | 否        | 0：默认，获取经纬度 1：获取经纬度和详细到区县级别的逆地理编码数据 2：获取经纬度和详细到街道级别的逆地理编码数据，不推荐使用 3：获取经纬度和详细到POI级别的逆地理编码数据，不推荐使用 | 微信、百度不支持 |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性              | 类型       | 说明 | 多端差异 |
| ------            | ------    | ------ | ------ |
| latitude          | number    | 纬度，范围为 -90~90，负数表示南纬 | |
| longitude         | number    | 经度，范围为 -180~180，负数表示西经 |  |
| speed             | number    | 速度，单位 m/s | 支付宝不支持 |
| accuracy          | number    | 位置的精确度 |  |
| altitude          | number    | 高度，单位 m | 支付宝不支持 |
| verticalAccuracy  | number    | 垂直精度，单位 m（Android 无法获取，返回 0） | 支付宝不支持 |
| horizontalAccuracy| number    | 水平精度，单位 m |  |
| street            | string    | 街道名称 | 微信、支付宝不支持 |
| cityCode          | string    | 城市编码 | 微信不支持 |
| city              | string    | 城市名称 | 微信不支持 |
| country           | string    | 国家 | 微信不支持 |
| province          | string    | 省份 | 微信不支持 |
| streetNumber      | string    | 街道号码 | 微信不支持 |
| district          | string    | 区 | 微信不支持 |
| countryCode       | string    | 区 | 微信、百度不支持 |
| districtCode    | string    | 区 | 微信、百度不支持 |
| pois              | string    | 区 | 微信、百度不支持 |

---

## 设备
### 系统信息

#### getSystemInfo
---

#### getSystemInfoSync
---

### 拨打电话

#### makePhoneCall
---

### 扫码

#### scanCode
---

## 界面
### 交互反馈

#### showToast
---

#### showLoading
---

#### hideToast
---

#### hideLoading
---

#### showModal
---

### 设置导航条

#### setNavigationBar
---

#### setNavigationBarTitle
---

#### setNavigationBarColor
---

### 位置

#### pageScrollTo
---

## 开放接口
### 登录

#### login
---
