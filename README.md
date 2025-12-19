# mini-constellation
个人版微信小程序，提供十二星座每日运势查询功能，界面简洁美观，无需安装即可使用。

## 项目截图

### 扫码预览

<img src="./assets/img/showpic.jpg" width = "260" height = "260"  align=center>

### 页面展示

<img src="./assets/img/starInfo.png" width="260px"><img src="./assets/img/starInfo1.png" width="260px">

## 功能特性

- **十二星座运势查询**：支持查询全部十二星座的每日运势
- **多日期运势查询**：支持查询今日、明日、本周、本月的运势
- **运势详细信息**：提供运势描述、爱情运势、事业运势、财运运势等详细信息
- **星座信息展示**：展示每个星座的名称、日期范围和图标
- **响应式设计**：适配不同尺寸的手机屏幕
- **简洁美观的界面**：采用现代化的UI设计，用户体验良好

## 技术栈

- **开发框架**：微信小程序原生框架
- **数据请求**：封装了统一的API请求函数
- **日期处理**：使用dayjs库处理日期
- **UI设计**：使用微信小程序原生组件和自定义样式进行UI设计
- **图标字体**：引入了iconfont多色图标
- **全局状态管理**：使用微信小程序的globalData进行全局状态管理

## 项目结构

```
mini-constellation/
├── api/                # API请求相关文件
│   ├── index.js        # API请求入口文件
│   ├── request.js      # 统一的API请求函数
│   └── path.js         # API请求路径配置文件
├── assets/             # 静态资源文件夹
│   ├── images/         # 图片资源文件夹
│   └── img/            # 其他图片资源文件夹
├── components/          # 自定义组件文件夹
│   ├── NavCustom/      # 自定义导航栏组件
│   ├── loading-custom/ # 自定义加载组件
│   └── tip-dialog/     # 自定义提示对话框组件
├── iconfont/           # 图标字体文件夹
├── pages/              # 小程序页面文件夹
│   └── index/          # 首页文件夹
│       ├── index.js    # 首页逻辑文件
│       ├── index.json  # 首页配置文件
│       ├── index.wxml  # 首页结构文件
│       ├── index.wxss  # 首页样式文件
│       └── initData.js # 初始化数据文件
├── utils/              # 工具类文件夹
│   └── index.js        # 工具函数文件
├── app.js              # 小程序入口文件
├── app.json            # 小程序配置文件
├── app.wxss            # 小程序全局样式文件
├── project.config.json  # 小程序项目配置文件
├── project.private.config.json  # 小程序私有配置文件
├── sitemap.json        # 小程序站点地图文件
└── README.md           # 项目说明文档
```

## 使用方法

### 1. 环境准备

- 下载并安装微信开发者工具
- 注册微信小程序账号（可选，用于发布）

### 2. 项目运行

- 克隆或下载本项目代码
- 打开微信开发者工具，导入本项目代码
- 点击“编译”按钮，即可运行本项目

### 3. 项目配置

- **API接口配置**：在`/api/path.js`文件中配置API请求路径
- **图标字体配置**：在`/iconfont/`文件夹中配置图标字体
- **全局样式配置**：在`/app.wxss`文件中配置全局样式

## 注意事项

- 本项目不提供接口服务，需要自行配置API接口
- 项目中使用了iconfont多色图标，需要按照说明文档进行配置
- 项目中使用了dayjs库处理日期，需要确保库的版本正确

## 其他

### 引入 iconfont 多色图标

使用示例 [原博](https://blog.csdn.net/Simoral/article/details/103804310)

```
<iconfont name="A" size="38" />

npm install mini-program-iconfont-cli --save-dev
npx iconfont-init
npx iconfont-wechat
```

### 字体压缩

> 在某些模块需要使用特定的字体，当字体包过大时就会存在压缩的需求
> 
> 压缩需要的文字使用 font-spider 插件
> 
> 然后使用[字体转 base64](https://transfonter.org/)

## MIT 许可协议

[MIT](./LICENSE)

## 声明

本项目仅做技术交流和学习，不建议用于商业目的！
