# Playing-reward

一个打赏的小功能

修改自 [donate-page](https://github.com/Kaiyuan/donate-page)

![](https://img.shields.io/badge/language-JavaScript-blue.svg?style=flat-square)
![](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
[![](https://img.shields.io/badge/github-ihoey-orange.svg?style=flat-square)](https://github.com/ihoey)
[![](https://img.shields.io/badge/QQ-✘д✘ヽゝだよ-red.svg?style=flat-square)](http://wpa.qq.com/msgrd?v=3&uin=1058221214&site=qq&menu=yes)
[![](https://img.shields.io/badge/blog-ihoey-ff69b4.svg?style=flat-square)](https://blog.ihoey.com)

## 赞赏

如果觉得还可以的话，点个赞呗~

[![Star](https://img.shields.io/github/stars/duiliuliu/sponsor-page?style=social)](https://github.com/duiliuliu/sponsor-page/stargazers)
[![Fork](https://img.shields.io/github/forks/duiliuliu/sponsor-page?style=social)](https://github.com/duiliuliu/sponsor-page/network/members)

打赏一下的话就更好了~

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/E1E81XKC5D)

<table>
  <tr>
    <td align="center">
      <img src="images/WeChatQR.jpg" width="180" alt="微信支付">
      <br>微信支付
    </td>
    <td align="center">
      <img src="images/AliPayQR.jpg" width="180" alt="支付宝支付">
      <br>支付宝支付
    </td>
  </tr>
</table>
 
### 直接 `Fork`

### 修改 html 内链接地址

### 更换图片为你自己的打赏图片

### 特性

- ✨ 自适应布局，支持各种尺寸嵌入
- 📱 响应式设计，在宽度过窄时自动调整
- 🏷️ 超窄宽度（<200px）时垂直堆叠仅展示图标
- 🎯 完美支持 iframe 嵌入

### 使用 iframe 嵌入页面

```html
<iframe
  src="https://duiliuliu.github.io/sponsor-page/"
  style="border:0 none #fff; min-height:60px; width:100%;"
  frameborder="0"
  scrolling="no"
></iframe>
```

**推荐最小尺寸**：
- 常规模式：宽度 300px+，高度 60px+
- 小屏幕模式：宽度 200px+，高度 50px+
- 图标模式：宽度 60px，高度 200px+

### 不展示文字设置

在 iframe URL 中添加 `?no-text=1` 参数即可不展示文字：

```html
<iframe
  src="https://duiliuliu.github.io/sponsor-page/?no-text=1"
  style="border:0 none #fff; min-height:60px; width:100%;"
  frameborder="0"
  scrolling="no"
></iframe>
```

### 作为组件使用

除了 iframe 嵌入，你也可以将其作为组件直接集成到你的项目中：

#### 1. 下载文件
- 将 `style.css`、`script.js` 和 `images` 文件夹复制到你的项目中

#### 2. 引入文件
```html
<link rel="stylesheet" href="path/to/style.css">
<script src="path/to/script.js"></script>
```

#### 3. 添加 HTML 结构
```html
<a id="github" href="https://duiliuliu.github.io/sponsor-page/" target="_blank" class="pos-f tr3" title="Github"></a>
<ul id="donateBox" class="list pos-f tr3">
  <li id="PayPal">
    <a href="https://www.paypal.me/duiliuliu" target="_blank">
      <span class="icon-text">PayPal</span>
    </a>
  </li>
  <li id="QQPay">
    <span class="icon-text">Ko-fi</span>
  </li>
  <li id="AliPay">
    <span class="icon-text">AliPay</span>
  </li>
  <li id="WeChat">
    <span class="icon-text">WeChat</span>
  </li>
</ul>
<div id="QRBox" class="pos-f left-100">
  <div id="MainBox"></div>
</div>
```

#### 4. 自定义配置
- 修改图标路径：更新 `style.css` 中的背景图片路径
- 修改链接地址：更新 HTML 中的 href 属性
- 隐藏文字：添加 `no-text` 类到 `#donateBox` 元素
- 自定义样式：根据需要修改 `style.css`

### 三种模式设置示例

#### 1. 常规模式（默认）
适合标准宽度的页面，显示完整图标和文字
```html
<iframe
  src="https://duiliuliu.github.io/sponsor-page/"
  style="border:0 none #fff; min-height:60px; width:300px;"
  frameborder="0"
  scrolling="no"
></iframe>
```

#### 2. 小屏幕模式
适合中等宽度的页面，图标和文字会自动调整大小
```html
<iframe
  src="https://duiliuliu.github.io/sponsor-page/"
  style="border:0 none #fff; min-height:50px; width:220px;"
  frameborder="0"
  scrolling="no"
></iframe>
```

#### 3. 图标模式
适合窄宽度的页面，只显示图标，垂直堆叠排列
```html
<iframe
  src="https://duiliuliu.github.io/sponsor-page/"
  style="border:0 none #fff; min-height:200px; width:80px;"
  frameborder="0"
  scrolling="no"
></iframe>
```
