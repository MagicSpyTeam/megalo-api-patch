# megalo-api-patch
> 在 [megalo](https://github.com/kaola-fed/megalo) 中使用统一的小程序 API 写法, 可自动转换为对应小程序的API写法。

## 开发中...
![Progress](http://progressed.io/bar/16?title=26%2F166)

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

## TODO

### 网络

#### 请求
- [x] request

#### 上传、下载
- [x] uploadFile
- [x] downloadFile

#### WebSocket
- [ ] connectSocket
- [ ] closeSocket
- [ ] onSocketClose
- [ ] onSocketError
- [ ] onSocketMessage
- [ ] onSocketOpen
- [ ] sendSocketMessage

### 媒体
#### 图片
- [x] chooseImage
- [ ] previewImage
- [ ] getImageInfo
- [ ] saveImageToPhotosAlbum

#### 录音
- [ ] startRecord
- [ ] stopRecord
- [ ] getRecorderManager

#### 音频播放控制
- [ ] playVoice
- [ ] pauseVoice
- [ ] stopVoice

#### 音乐播放控制
- [ ] getBackgroundAudioPlayerState
- [ ] playBackgroundAudio
- [ ] pauseBackgroundAudio
- [ ] seekBackgroundAudio
- [ ] stopBackgroundAudio
- [ ] onBackgroundAudioPlay
- [ ] onBackgroundAudioPause
- [ ] onBackgroundAudioStop

#### 背景音频播放管理
- [ ] getBackgroundAudioManager

#### 音频组件控制
- [ ] createAudioContext
- [ ] createInnerAudioContext

#### 视频
- [ ] chooseVideo
- [ ] saveVideoToPhotosAlbum

#### 视频组件控制
- [ ] createVideoContext

#### 相机组件控制
- [x] createCameraContext

### 文件
- [ ] saveFile
- [ ] getFileInfo
- [ ] getSavedFileList
- [ ] getSavedFileInfo
- [ ] removeSavedFile
- [ ] openDocument

### 数据缓存
- [x] setStorage
- [x] setStorageSync
- [x] getStorage
- [x] getStorageSync
- [x] getStorageInfo
- [x] getStorageInfoSync
- [x] removeStorage
- [x] removeStorageSync
- [x] clearStorage
- [x] clearStorageSync

### 位置
#### 获取位置
- [x] getLocation
- [ ] chooseLocation

#### 查看位置
- [ ] openLocation

#### 地图组件控制
- [ ] createMapContext

### 设备
#### 系统信息
- [x] getSystemInfo
- [x] getSystemInfoSync
- [ ] canIUse

#### 网络状态
- [ ] getNetworkType
- [ ] onNetworkStatusChange

#### 加速度计
- [ ] onAccelerometerChange
- [ ] startAccelerometer
- [ ] stopAccelerometer

#### 罗盘
- [ ] onCompassChange
- [ ] startCompass
- [ ] stopCompass

#### 拨打电话
- [ ] makePhoneCall

#### 扫码
- [ ] scanCode

#### 剪贴板
- [ ] setClipboardData
- [ ] getClipboardData

#### 蓝牙
- [ ] openBluetoothAdapter
- [ ] closeBluetoothAdapter
- [ ] getBluetoothAdapterState
- [ ] onBluetoothAdapterStateChange
- [ ] startBluetoothDevicesDiscovery
- [ ] stopBluetoothDevicesDiscovery
- [ ] getBluetoothDevices
- [ ] getConnectedBluetoothDevices
- [ ] onBluetoothDeviceFound
- [ ] createBLEConnection
- [ ] closeBLEConnection
- [ ] getBLEDeviceServices
- [ ] getBLEDeviceCharacteristics
- [ ] readBLECharacteristicValue
- [ ] writeBLECharacteristicValue
- [ ] notifyBLECharacteristicValueChange
- [ ] onBLEConnectionStateChange
- [ ] onBLECharacteristicValueChange

#### iBeacon
- [ ] startBeaconDiscovery
- [ ] stopBeaconDiscovery
- [ ] getBeacons
- [ ] onBeaconUpdate

#### 屏幕亮度
- [ ] setScreenBrightness
- [ ] getScreenBrightness
- [ ] setKeepScreenOn

#### 用户截屏事件
- [ ] onUserCaptureScreen

#### 振动
- [ ] vibrateLong
- [ ] vibrateShort

#### 手机联系人
- [ ] addPhoneContact

#### NFC
- [ ] getHCEState
- [ ] startHCE
- [ ] stopHCE
- [ ] onHCEMessage
- [ ] sendHCEMessage

#### Wi-Fi
- [ ] startWifi
- [ ] stopWifi
- [ ] connectWifi
- [ ] getWifiList
- [ ] onGetWifiList
- [ ] setWifiList
- [ ] onWifiConnected
- [ ] getConnectedWifi


### 界面
#### 交互反馈
- [x] showToast
- [x] showLoading
- [x] hideToast
- [x] hideLoading
- [x] showModal
- [ ] showActionSheet

#### 设置导航条
- [x] setNavigationBar
- [x] setNavigationBarTitle
- [ ] showNavigationBarLoading
- [ ] hideNavigationBarLoading
- [x] setNavigationBarColor

#### 设置 tabBar
- [ ] setTabBarBadge
- [ ] removeTabBarBadge
- [ ] showTabBarRedDot
- [ ] hideTabBarRedDot
- [ ] setTabBarStyle
- [ ] setTabBarItem
- [ ] showTabBar
- [ ] hideTabBar

#### 设置置顶信息
- [ ] setTopBarText

#### 导航
- [ ] navigateTo
- [ ] redirectTo
- [ ] switchTab
- [ ] navigateBack
- [ ] reLaunch
- [ ] getCurrentPages

#### 动画
- [ ] createAnimation

#### 位置
- [ ] pageScrollTo

#### 绘图
- [ ] createCanvasContext

#### 下拉刷新
- [ ] startPullDownRefresh
- [ ] stopPullDownRefresh

#### 节点信息
- [ ] createSelectorQuery

### 开放接口
#### 设置
- [ ] getSetting
- [ ] openSetting

#### 收货地址
- [ ] chooseAddress

#### 授权
- [ ] authorize

#### 卡券
- [ ] addCard
- [ ] openCard

#### 发票
- [ ] chooseInvoice
- [ ] chooseInvoiceTitle

#### 支付
- [ ] faceVerifyForPay
- [ ] requestPayment

#### 用户信息
- [ ] getUserInfo

#### 微信运动
- [ ] getWeRunData

#### 登录
- [ ] login
- [ ] checkSession

#### 生物认证
- [ ] checkIsSoterEnrolledInDevice
- [ ] checkIsSupportSoterAuthentication
- [ ] startSoterAuthentication

#### 小程序跳转
- [ ] navigateBackMiniProgram
- [ ] navigateToMiniProgram

#### 更新
- [ ] getUpdateManager

#### 拓展接口
- [ ] arrayBufferToBase64
- [ ] base64ToArrayBuffer