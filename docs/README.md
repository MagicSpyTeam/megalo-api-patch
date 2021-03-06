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
获取系统信息

``` this.$api.getSystemInfo(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| brand           | string    | 手机品牌 |  |
| model           | string    | 手机型号 |  |
| pixelRatio      | number    | 设备像素比 |  |
| screenWidth     | number    | 屏幕宽度 |  |
| screenHeight    | number    | 屏幕高度 |  |
| windowWidth     | number    | 可使用窗口宽度 |  |
| windowHeight    | number    | 可使用窗口高度 |  |
| statusBarHeight | number    | 状态栏的高度 | 支付宝不支持 |
| language        | string    | 三端设置的语言 |  |
| version         | string    | 三端版本号 |  |
| system          | string    | 操作系统版本 |  |
| platform        | string    | 客户端平台 |  |
| fontSizeSetting | number    | 用户字体大小设置 |  |
| SDKVersion      | string    | 客户端基础库版本 | 支付宝不支持 |
| benchmarkLevel  | number    | 性能等级 | 百度、支付宝不支持 |
| storage         | String    | 设备磁盘容量 | 微信、百度不支持 |
| currentBattery  | String    | 当前电量百分比 | 微信、百度不支持 |
| app             | String    | 当前运行的客户端，当前是支付宝则有效值是"alipay" | 微信、百度不支持 |

---

#### getSystemInfoSync

getSystemInfo 的同步版本

``` this.$api.getSystemInfoSync() ```

---

### 拨打电话

#### makePhoneCall
拨打电话
``` this.$api.makePhoneCall(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| phoneNumber     | string    | 是        | 需要拨打的电话号码 | |
| success         | function  | 否        | 接口调用成功的回调函数 | 支付宝不支持 |
| fail            | function  | 否        | 接口调用失败的回调函数 | 支付宝不支持 |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | 支付宝不支持 |

---

### 扫码

#### scanCode
调起客户端扫码界面进行扫码

``` this.$api.scanCode(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| onlyFromCamera  | boolean   | 否        | 是否只能从相机扫码，不允许从相册选择图片	 | 百度不支持 |
| scanType        | Array     | 否        | 扫码类型 (barCode 或 qrCode) | 百度不支持,支付宝只会对数组中第一个生效 |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| result          | string    | 所扫码的内容 | |
| scanType        | string    | 所扫码的类型 | 支付宝不支持 |
| charSet         | string    | 所扫码的字符集 | 支付宝不支持 |
| path            | string    | 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path | 百度、支付宝不支持 |
| rawData         | string    | 原始数据，base64编码 | 百度、支付宝不支持 |

---

## 界面
### 交互反馈

#### showToast
显示消息提示框

``` this.$api.showToast(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| title           | string    | 是        | 提示的内容	 |  |
| type            | string    | 否        | toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none | 微信、百度不支持 |
| icon            | string    | 否        | 图标 | 支付宝不支持 |
| image           | string    | 否        | 自定义图标的本地路径，image 的优先级高于 icon | 支付宝不支持 |
| duration        | number    | 否        | 提示的延迟时间 |  |
| mask            | boolean   | 否        | 是否显示透明蒙层，防止触摸穿透 | 支付宝不支持 |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---

#### showLoading
显示 loading 提示框

``` this.$api.showLoading(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| title           | string    | 否        | 提示的内容	 |  |
| delay           | Number    | 否        | 延迟显示，单位 ms，默认 0	 | 微信、百度不支持 |
| mask            | boolean   | 否        | 是否显示透明蒙层，防止触摸穿透 | 支付宝不支持 |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---

#### hideToast
隐藏消息提示框

``` this.$api.hideToast() ```

---

#### hideLoading
隐藏 loading 提示框

``` this.$api.hideLoading() ```

---

#### showModal
显示模态对话框

``` this.$api.showModal(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| title           | string    | 是        | 提示的标题 | |
| content         | string    | 是        | 提示的内容 | |
| showCancel      | boolean   | 否        | 是否显示取消按钮 | 支付宝不支持 |
| cancelText      | string    | 否        | 取消按钮的文字 | |
| cancelColor     | string    | 否        | 取消按钮的文字颜色 | 支付宝不支持 |
| confirmText     | string    | 否        | 确认按钮的文字 | |
| confirmColor    | string    | 否        | 确认按钮的文字颜色 | 支付宝不支持 |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型       | 说明 | 多端差异 |
| ------          | ------    | ------ | ------ |
| confirm         | boolean   | 为 true 时，表示用户点击了确定按钮 | |
| cancel          | boolean   | 为 true 时，表示用户点击了取消 |  |

---

### 设置导航条

#### setNavigationBar
动态设置当前页面的标题和颜色

``` this.$api.setNavigationBar(Object object) ```

**obj 入参：**

| 属性              | 类型       | 必填      | 说明 | 多端差异 |
| ------            | ------    | ------    | ------ | ------ |
| title             | string    | 否        | 页面标题 | |
| image             | string    | 否        | 图片连接地址，必须是https，请使用3x高清图片。若设置了image则title参数失效 | 微信、百度不支持 |
| backgroundColor   | string    | 否        | 导航栏背景色，支持十六进制颜色值 | |
| borderBottomColor | string    | 否        | 导航栏底部边框颜色 | 微信、百度不支持 |
| frontColor        | string    | 否        | 前景颜色值 | 支付宝不支持 |
| animation         | string    | 否        | 动画效果 | 支付宝不支持 |
| reset             | string    | 否        | 是否重置导航栏为支付宝默认配色 | 微信、百度不支持 |
| success           | function  | 否        | 接口调用成功的回调函数 | 微信、百度不支持 |
| fail              | function  | 否        | 接口调用失败的回调函数 | 微信、百度不支持 |
| complete          | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | 微信、百度不支持 |

---

#### setNavigationBarTitle
动态设置当前页面的标题 **(支付宝中会和 setNavigationBarColor 互相覆盖)**

``` this.$api.setNavigationBar(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| title           | string    | 是        | 页面标题 | |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---

#### setNavigationBarColor
设置页面导航条颜色 **(支付宝中会和 setNavigationBarTitle 互相覆盖)**

``` this.$api.setNavigationBarColor(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| frontColor      | string    | 是        | 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 | 支付宝不支持 |
| backgroundColor | string    | 是        | 背景颜色值，有效值为十六进制颜色 | |
| animation       | Object    | 是        | 动画效果 | 支付宝不支持 |
| success         | function  | 否        | 接口调用成功的回调函数 | |
| fail            | function  | 否        | 接口调用失败的回调函数 | |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

---

### 位置

#### pageScrollTo
将页面滚动到目标位置

``` this.$api.pageScrollTo(Object object) ```

**obj 入参：**

| 属性            | 类型       | 必填      | 说明 | 多端差异 |
| ------          | ------    | ------    | ------ | ------ |
| scrollTop       | number    | 是        | 滚动到页面的目标位置 |  |
| duration        | number    | 是        | 滚动动画的时长 | 支付宝不支持 |
| success         | function  | 否        | 接口调用成功的回调函数 | 支付宝不支持 |
| fail            | function  | 否        | 接口调用失败的回调函数 | 支付宝不支持 |
| complete        | function  | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | 支付宝不支持 |

---

## 开放接口
### 登录

#### login
调用接口获取登录凭证

``` this.$api.login(Object object) ```

**obj 入参：**

| 属性            | 类型             | 必填      | 说明 | 多端差异 |
| ------          | ------          | ------    | ------ | ------ |
| timeout         | number          | 否        | 超时时间，单位ms | 支付宝不支持 |
| scopes          | String/Array    | 否        | 授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用） | 微信、百度不支持 |
| success         | function        | 否        | 接口调用成功的回调函数 | |
| fail            | function        | 否        | 接口调用失败的回调函数 | |
| complete        | function        | 否        | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success 返回：**

| 属性            | 类型        | 说明 | 多端差异 |
| ------          | ------     | ------ | ------ |
| code            | string     | 用户登录凭证(微信、百度的 code，支付宝的 authCode) | |
| authErrorScope  | Key-Value  | 失败的授权类型，key是授权失败的 scope，value 是对应的错误码 | 微信、百度不支持 |
| authSucessScope | Array      | 成功的授权 scope | 微信、百度不支持 |

---
