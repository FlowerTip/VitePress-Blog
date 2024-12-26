> 1.  业务背景：公司对接的项目使用的是第三方的摄像头设备，我们需要按照大华的智能物联平台实现功能的二次开发。
> 2.  实现功能：需要实现的是视频功能，包括实时视频，视频回放功能。

## 1. 对接场景概要

1.  文档主要是介绍通过流地址的对接方式播放视频，支持ICC，ICO平台的拉流对接。
2.  文档的接口拉流介绍以大华的ICC平台为例，其他平台接入可参考对接方式。
3.  集成wsplayer时，引入源码无兼容问题，支持vue2，vue3, react等框架中使用。

## 2. 开发前的准备工作

1.  需要第三方也就是大华提供的开发文档，我们使用的是大华提供的无插件开发技术方案。
    对接手册：<https://open-icc.dahuatech.com/wsplayer/#/start>

2.  建议使用他们提供的最新版，截止到目前最新版是**1.3.3**版本

    ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b9818adea6104472a54f6214ca0a6733~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=mDzW6ZBxPbBdoVReD9FCZieXg5I%3D)

3.  下载后的目录如下图所示

    ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1e8f5e69318047878fe0da12ba69318b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=vBTqrKa3STx8y3t0A2NZtVTWcpE%3D)

4.  拷贝资源到自己的项目中

    1.  在下载的资源目录`public/lib`下找到`WSPlayer`目录，复制到自己项目的静态资源目录中，这里以Vue项        目为例，也就是`static`目录

        ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1a4f16e01e4049bdb85e3f673b5a95b7~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=mJVwndCxUIi4B6zVXAbbr5DW7ew%3D)
    2.  在下载的资源目录`public`下找到`icc`目录, 复制到自己项目的开发代码的目录中去，这里以Vue项目为          例，也就是`src`目录

        ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/506d80b54d7d468b84a0e6fe755641c9~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=WdPM%2FNy1ElCPpDLiYFOLyYDkKDw%3D)

5.  大华开放平台地址：<https://open-icc.dahuatech.com/#/home?url=%3Fnav%3Dwiki%2Fadmin%2Freplay.html%23rtsp%E4%BB%A5%E6%97%B6%E9%97%B4%E5%BD%A2%E5%BC%8F%E5%9B%9E%E6%94%BE%E5%BD%95%E5%83%8F&version=enterprisebase/5.0.16&blank=true>

## 3. 项目中如何引入大华资源文件

1.  第一种方式：
    是在静态公开页面index.html文件里面自己手动引入大华视频需要的资源文件，如下图所示

    ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/be073e64903146488dd00abe9c67b43f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=89%2Bkd0I8ZuxZYAOCWO0wzsmy70g%3D)

2.第二种方式：

*   是自己在页面代码中配置自动导入，最新版支持动态导入。
*   需要在初始化播放器的时候，配置`importLoad: true` 开启自动导入资源文件功能，同时还要配置资源文件的静态目录`prefixUrl: './static/dhPro'`, 这样就可以自动加载了。
*   具体操作如下图所示

    ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b446c5c494bf44fc9c9875a9dce2dbc6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=OTxl4J5Eb4k8EN%2F11QPQnK1p59U%3D)

3.  两种方式建议使用第二种，因为不需要我们自己手动导入资源文件，更加简单方便，也是大华推荐的导入方式。

## 4. 如何使用，实现功能

不管上面我们选用第几种方式，我们需要在使用的地方导入`icc/PlayerManager.js`，这里以Vue项目为例，只做参考

```VUE
// 实时预览
import PlayerManager from '@/vendor/icc/PlayerManager.js';
export default {
  data() {
    return {
      realPlayer: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 初始化摄像头
      this.initVideoPlayer();
    });
  },
  methods: {
    /**
     * 获取设备实时预览地址
     * @param channelCode 管道Code
     */
    async getDInfo(channelCode) {
      const { code, data } = await Video_StartVideo({
        channelId: channelCode
      });
      if (code == 1000 && data.url) {
        const config = {
          rtspURL: data.url + '?token=' + data.token,
          wsURL: 'ws://' + data.innerIp + ':9100',
          selectIndex: 0,
          channelId: channelCode,
          streamType: '1',
          playerAdapter: 'selfAdaption',
        }
        console.log(config, 'getDInfo');
        this.playOnline(config);
      }
    },
    /**
     * 初始化大华视频播放器
     */
    initVideoPlayer() {
      this.realPlayer = new PlayerManager({
        importLoad: true, /** 是否引入解码库，true - 引入，false - 不引入 **/
        prefixUrl: './static/dhPro', /** 解码库所在位置的前缀 **/
        el: "ws-real-player", /** 实时预览容器id，创建多个播放器，传入不同的容器id即可 **/
        type: 'real', /** c - 实时预览  record - 录像回放 **/
        maxNum: 1,  /** 一个播放器上限能播放的路数，可根据实际情况设置，支持 1 4 9 16 25 **/
        num: 1,   /** 初始化，页面显示的路数 **/
        showControl: true, /** 是否显示工具栏，默认显示 **/
        showIcons: { // 自定义按钮，需要的请配置true, 不需要的按钮请配置false，所有的按钮属性都要写上
          streamChangeSelect: false, // 主辅码流切换
          ivsIcon: false, // 控制智能帧按钮
          talkIcon: false, // 对讲功能按钮
          localRecordIcon: false, // 录制视频功能按钮
          audioIcon: false, // 开启关闭声音按钮
          snapshotIcon: false, // 抓图按钮
          closeIcon: false, // 关闭视频按钮
        },
        receiveMessageFromWSPlayer: (methods, data, err) => { /* 回调函数，可以在以下回调函数里面做监听 */
          switch (methods) {
            case 'initializationCompleted':
              console.log('初始化完成')
              // 初始化完成，可调用播放方法（适用于动态加载解码库）
              // 若回调未触发时就使用实时预览/录像回放，则无法播放。
              // 此时我们可以调用一个
              this.treeEventData.extID && this.getDInfo(this.treeEventData.extID);
              break;
            case "changeStreamType": // 主/辅码流切换回调
              console.log(data.channelData) // 通道数据
              console.log(data.streamType) // 码流类型 0-主码流  1-辅码流1  2-辅码流2
              console.log(data.selectIndex) // 窗口序号，从 0
              break;
            case "realSuccess": // 实时预览成功
              console.log("实时预览成功")
              break;
            case "realError": // 实时预览失败
              console.log("实时预览失败", err)
              break;
            case "notifyTalk":
              // 点击窗口上的对讲按钮触发的事件回调
              console.log("notifyTalk", data)
            case "talkError": // 对讲失败
              console.log("对讲失败");
              break;
            case 'selectWindowChanged': // 选中的窗口发生改变
              console.log(data, "返回窗口信息")
              break;
            case 'windowNumChanged': // 播放器显示的路数发生改变
              console.log(data, "返回显示的窗口数量")
              break;
            case 'closeVideo': // 视频关闭回调
              // 点击关闭按钮引发的视频关闭进行提示
              // 切换视频引发的视频关闭不进行提示
              if (!data.changeVideoFlag) {
                console.log(`窗口${data.selectIndex}的视频已关闭`)
              }
              break;
            case 'statusChanged': // 视频状态发生改变

              break;
            case 'errorInfo': // 错误信息汇总
              console.log(data, "可打印查看错误消息");
          }
        }
      })
    },
    /**
     * 实时预览播放
     * @param config 
     */
    playOnline(config) {
      this.realPlayer.realByUrl(config)
    },
  },
};
```

```VUE
// 视频回放
import PlayerManager from '@/vendor/icc/PlayerManager.js';
export default {
  data() {
    return {
      searchForm: {
        beginTime: dayjs(dayjs().subtract(1, 'day').startOf('day')).format('YYYY-MM-DD HH:mm:ss'),
        endTime: dayjs(dayjs().subtract(1, 'day').endOf('day')).format('YYYY-MM-DD HH:mm:ss'),
      },
      recordPlayer: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 初始化摄像头
      this.initVideoPlayer();
    });
  },
  methods: {
    searchData() {
      this.treeEventData && this.treeEventData.extID && this.getDInfo(this.treeEventData.extID);
    },
    /**
     * 获取视频回放地址
     * @param channelCode 管道Code
     */
    async getDInfo(options) {
      this.loadingmain = true;
      const req = {
        channelId: options.channelCode,
        st: options.st,
        et: options.et
      }
      console.log(req.st, req.et, dayjs(dayjs.unix(req.st)).format('YYYY-MM-DD HH:mm:ss'), dayjs(dayjs.unix(req.et)).format('YYYY-MM-DD HH:mm:ss'), 'req.st,req.et');
      const { code, data } = await Video_Playback(req);
      if (code == 200 && data.url) {
        // const wsUrl = data.url.split('rtsp://')[1].split(':')[0];
        // console.log(wsUrl, ';wsUrl');
        const hConfig = {
          wsURL: 'ws://' + data.innerIp + ':9320',
          rtspURL: data.url + '?token=' + data.token,
          channelId: options.channelCode,
          selectIndex: 0,
          playerAdapter: 'selfAdaption', // 选传
          startTime: req.st,
          endTime: req.et,
          records: [], // 选传
        }
        options.playRecordByTime != undefined && (hConfig.playRecordByTime = options.playRecordByTime);
        console.log(hConfig, 'hConfig');
        this.playHistory(hConfig);
        this.loadingmain = false;
      } else {
        this.loadingmain = false;
      }
    },
    /**
     * 初始化大华视频播放器
     */
    initVideoPlayer() {
      this.recordPlayer = new PlayerManager({
        importLoad: true, /** 是否引入解码库，如果不引入，需要在页面引入解码库js文件 **/
        prefixUrl: './static/dhPro', /** 解码库所在位置的前缀 **/
        el: "ws-record-player", /** 实时预览容器id，创建多个播放器，传入不同的容器id即可 **/
        type: 'record', /** c - 实时预览  record - 录像回放 **/
        maxNum: 1,  /** 一个播放器上限能播放的路数，可根据实际情况设置，支持 1 4 9 16 25 **/
        num: 1,   /** 初始化，页面显示的路数 **/
        showControl: true, /** 是否显示工具栏，默认显示 **/
        receiveMessageFromWSPlayer: (methods, data, err) => { /* 回调函数，可以在以下回调函数里面做监听 */
          switch (methods) {
            case 'initializationCompleted':
              // 初始化完成，可以调用拉流方法，实现播放器加载后立即显示画面
              this.treeEventData.extID && this.getDInfo({
                channelCode: this.treeEventData.extID,
                st: dayjs(this.searchForm.beginTime).unix(),
                et: dayjs(this.searchForm.endTime).unix()
              });
              break;
            case "recordSuccess": // 录像回放成功
              console.log("录像回放成功")
              break;
            case "recordError": // 录像回放失败
              console.log("录像回放失败", err)
              break;
            case "recordFinish": // 录像回放完成
              console.log("录像回放完成");
              break;
            // 拖拽时间戳的回调
            case 'switchStartTime':
              this.treeEventData.extID && this.getDInfo({
                channelCode: this.treeEventData.extID,
                st: data.timeStamp || dayjs(this.searchForm.beginTime).unix(),
                et: dayjs(this.searchForm.endTime).unix(),
                playRecordByTime: false
              });
              break;
            case 'selectWindowChanged': // 选中的窗口发生改变
              console.log(data, "返回窗口信息")
              break;
            case 'windowNumChanged': // 播放器显示的路数发生改变
              console.log(data, "返回显示的窗口数量")
              break;
            case 'closeVideo': // 视频关闭回调
              // 点击关闭按钮引发的视频关闭进行提示
              // 切换视频引发的视频关闭不进行提示
              if (!data.changeVideoFlag) {
                console.log(`窗口${data.selectIndex}的视频已关闭`)
              }
              break;
            case 'statusChanged': // 视频状态发生改变

              break;
            case 'errorInfo': // 错误信息汇总
              console.log(data, "可打印查看错误消息");
          }
        }
      })
    },
    /**
     * 历史回放播放
     */
    playHistory(config) {
      this.recordPlayer.recordByUrl(config)
    }
  },
};
```

## 5. 注意事项

1.  静态资源目录的位置要注意，可能你放大华资源文件的位置不同，所以在配置解码库前缀位置的时候也不一样
    这里我的放到了`static/dhPro`下面，所以配置`prefixUrl: './static/dhPro'`，具体看项目实际情况

2.  在实现视频回放功能的时候，注意让后台参考大华平台提供的第二种方式来获取视频回放，如下图所示

    ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8e848262571c49ec81a6dd132ecb7326~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=d2tv2XTYER0i7W1YhkyOEJm3S90%3D)

3.  因为提供的最新版里面有.data文件，服务器有的需要配置开启允许加载以.data后缀的文件，不然会报404,导致程序无法运行。

    ![cb491377bf35bb79151ff0e6a04f82f.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3d0e96b7e56641da8cdd98674865295b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg54uX5bC-5be06Iqx55qE5bCW:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjI5NTQzNjAwOTU0NjkyMCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735795504&x-orig-sign=kL9TsbVZF%2FBTZZW8JsjqTBroqN0%3D)

4.  如果实在遇到解决不了的问题，大华提供的有在线客服的功能，工作时间09点-17点，联系技术人员提供辅助解决问题。
