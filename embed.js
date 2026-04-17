// Playing-reward 打赏组件 - 仅 JS 引用版本
(function() {
  // 默认配置
  const defaultConfig = {
    position: 'bottom-right',
    noText: false,
    githubLink: 'https://duiliuliu.github.io/sponsor-page/',
    paypalLink: 'https://www.paypal.me/duiliuliu',
    kofiLink: 'https://ko-fi.com/E1E81XKC5D',
    aliPayQR: 'https://duiliuliu.github.io/sponsor-page/images/AliPayQR.jpg',
    weChatQR: 'https://duiliuliu.github.io/sponsor-page/images/WeChatQR.jpg'
  };

  // 合并配置
  const config = Object.assign({}, defaultConfig, window.PlayingRewardConfig || {});

  // 注入 CSS 样式
  const injectCSS = () => {
    const style = document.createElement('style');
    style.textContent = `
      .playing-reward {
        position: fixed;
        z-index: 9999;
      }
      
      .playing-reward.bottom-right {
        bottom: 20px;
        right: 20px;
      }
      
      .playing-reward.bottom-left {
        bottom: 20px;
        left: 20px;
      }
      
      .playing-reward.top-right {
        top: 20px;
        right: 20px;
      }
      
      .playing-reward.top-left {
        top: 20px;
        left: 20px;
      }
      
      #donateBox {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 6px;
        width: auto;
        min-width: 299px;
        max-width: 100%;
        height: 48px;
        display: flex;
        flex-wrap: nowrap;
      }
      
      #donateBox.no-text {
        height: 24px;
        min-width: 110px;
      }
      
      #donateBox li {
        flex: 1;
        min-width: 70px;
        float: left;
        text-align: center;
        border-left: 1px solid #ddd;
        background: no-repeat center center;
        background-color: rgba(204, 217, 220, 0.1);
        background-size: 36px;
        background-position: center;
        background-repeat: no-repeat;
        transition: all .3s;
        cursor: pointer;
        overflow: hidden;
        line-height: 600px;
        height: 48px;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        opacity: 0.5;
        position: relative;
      }
      
      #donateBox.no-text li {
        height: 24px;
        background-size: 18px;
        min-width: 25px;
      }
      
      #donateBox li:hover {
        background-color: rgba(204, 217, 220, 0.3);
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
        opacity: 1;
      }
      
      #donateBox>li:first-child {
        border-width: 0;
      }
      
      #donateBox a {
        display: block;
      }
      
      #donateBox .icon-text {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        white-space: nowrap;
      }
      
      #donateBox.no-text .icon-text {
        display: none;
      }
      
      #donateBox #PayPal {
        background-image: url(https://duiliuliu.github.io/sponsor-page/images/PayPal.svg);
      }
      
      #donateBox>#QQPay {
        background-image: url(https://duiliuliu.github.io/sponsor-page/images/kofi_logo.svg);
      }
      
      #donateBox #AliPay {
        background-image: url(https://duiliuliu.github.io/sponsor-page/images/AliPay.svg);
      }
      
      #donateBox #WeChat {
        background-image: url(https://duiliuliu.github.io/sponsor-page/images/WeChat.svg);
      }
      
      #QRBox {
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: rgba(255, 255, 255, 0.3);
        display: none;
        perspective: 400px;
        position: fixed;
        width: 100%;
        height: 100%;
      }
      
      #MainBox {
        cursor: pointer;
        position: absolute;
        text-align: center;
        width: 200px;
        height: 200px;
        left: calc(50% - 100px);
        top: calc(50% - 100px);
        background: #fff no-repeat center center;
        background-size: 190px;
        border-radius: 6px;
        box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: all 1s ease-in-out;
        transform-style: preserve-3d;
        transform-origin: center center;
        overflow: hidden;
      }
      
      #github {
        width: 24px;
        height: 24px;
        background: no-repeat center center url(https://duiliuliu.github.io/sponsor-page/images/Github.svg);
        background-size: contain;
        opacity: 0.3;
        transform: rotateZ(15deg);
        position: fixed;
        z-index: 9999;
      }
      
      .blur #donateBox, .blur #github {
        -webkit-filter: blur(3px);
        filter: blur(3px);
      }
      
      .tr3 {
        transition: all .3s;
      }
      
      .pos-f {
        position: fixed;
      }
      
      .left-100 {
        width: 100%;
        height: 100%;
      }
      
      /* 响应式设计 */
      @media screen and (max-width: 300px) {
        #donateBox {
          min-width: 240px;
          max-width: 100%;
          height: 44px;
        }
        
        #donateBox li {
          min-width: 58px;
          background-size: 32px;
          height: 44px;
        }
        
        #donateBox.no-text {
          height: 36px;
          min-width: 200px;
        }
        
        #donateBox.no-text li {
          height: 36px;
          background-size: 28px;
          min-width: 50px;
        }
      }
      
      @media screen and (max-width: 240px) {
        #donateBox {
          min-width: 200px;
          height: 40px;
        }
        
        #donateBox li {
          min-width: 48px;
          background-size: 28px;
          height: 40px;
        }
        
        #donateBox.no-text {
          height: 32px;
          min-width: 160px;
        }
        
        #donateBox.no-text li {
          height: 32px;
          background-size: 24px;
          min-width: 40px;
        }
      }
      
      @media screen and (max-width: 200px) {
        #donateBox:not(.no-text) {
          flex-direction: column;
          min-width: auto;
          width: 100%;
          max-width: 70px;
          height: auto;
          padding: 2px 0;
          margin: 0 auto;
        }
        
        #donateBox:not(.no-text) li {
          width: 100%;
          min-width: 44px;
          height: 44px;
          border-left: none;
          border-top: 1px solid #ddd;
          background-size: 28px;
          margin: 1px 0;
        }
        
        #donateBox:not(.no-text)>li:first-child {
          border-top: none;
          margin-top: 0;
        }
        
        #donateBox:not(.no-text)>li:last-child {
          margin-bottom: 0;
        }
        
        #donateBox.no-text {
          max-width: 100%;
          flex-direction: row;
          min-width: 110px;
          height: 28px;
        }
        
        #donateBox.no-text li {
          width: auto;
          min-width: 27px;
          height: 28px;
          background-size: 20px;
          border-left: 1px solid #ddd;
          border-top: none;
          margin: 0;
        }
        
        #donateBox.no-text>li:first-child {
          border-left: none;
        }
      }
      
      /* 超小宽度 - 紧凑模式 */
      @media screen and (max-width: 150px) {
        #donateBox.no-text {
          min-width: 110px;
          height: 24px;
        }
        
        #donateBox.no-text li {
          height: 24px;
          background-size: 18px;
          min-width: 27px;
        }
      }
      
      @keyframes showQR {
        from {
          transform: rotateX(90deg);
        }
        8% {
          opacity: 1;
          transform: rotateX(-60deg);
        }
        18% {
          opacity: 1;
          transform: rotateX(40deg);
        }
        34% {
          opacity: 1;
          transform: rotateX(-28deg);
        }
        44% {
          opacity: 1;
          transform: rotateX(18deg);
        }
        58% {
          opacity: 1;
          transform: rotateX(-12deg);
        }
        72% {
          opacity: 1;
          transform: rotateX(9deg);
        }
        88% {
          opacity: 1;
          transform: rotateX(-5deg);
        }
        96% {
          opacity: 1;
          transform: rotateX(2deg);
        }
        to {
          opacity: 1;
        }
      }
      
      #MainBox.showQR {
        animation-name: showQR;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-delay: 300ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
      
      @keyframes hideQR {
        from {}
        20%, 50% {
          transform: scale(1.08, 1.08);
          opacity: 1;
        }
        to {
          opacity: 0;
          transform: rotateZ(40deg) scale(0.6, 0.6);
        }
      }
      
      #MainBox.hideQR {
        opacity: 1;
        animation-name: hideQR;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      #QRBox.fadeIn {
        display: block;
        animation: fadeIn 300ms;
      }
    `;
    document.head.appendChild(style);
  };

  // 创建 HTML 结构
  const createHTML = () => {
    const container = document.createElement('div');
    container.className = `playing-reward ${config.position}`;
    
    const githubLink = document.createElement('a');
    githubLink.id = 'github';
    githubLink.href = config.githubLink;
    githubLink.target = '_blank';
    githubLink.title = 'Github';
    
    const donateBox = document.createElement('ul');
    donateBox.id = 'donateBox';
    donateBox.className = `list ${config.noText ? 'no-text' : ''}`;
    
    const paypalItem = document.createElement('li');
    paypalItem.id = 'PayPal';
    const paypalLink = document.createElement('a');
    paypalLink.href = config.paypalLink;
    paypalLink.target = '_blank';
    const paypalText = document.createElement('span');
    paypalText.className = 'icon-text';
    paypalText.textContent = 'PayPal';
    paypalLink.appendChild(paypalText);
    paypalItem.appendChild(paypalLink);
    
    const qqpayItem = document.createElement('li');
    qqpayItem.id = 'QQPay';
    const qqpayText = document.createElement('span');
    qqpayText.className = 'icon-text';
    qqpayText.textContent = 'Ko-fi';
    qqpayItem.appendChild(qqpayText);
    
    const alipayItem = document.createElement('li');
    alipayItem.id = 'AliPay';
    const alipayText = document.createElement('span');
    alipayText.className = 'icon-text';
    alipayText.textContent = 'AliPay';
    alipayItem.appendChild(alipayText);
    
    const wechatItem = document.createElement('li');
    wechatItem.id = 'WeChat';
    const wechatText = document.createElement('span');
    wechatText.className = 'icon-text';
    wechatText.textContent = 'WeChat';
    wechatItem.appendChild(wechatText);
    
    donateBox.appendChild(paypalItem);
    donateBox.appendChild(qqpayItem);
    donateBox.appendChild(alipayItem);
    donateBox.appendChild(wechatItem);
    
    const qrBox = document.createElement('div');
    qrBox.id = 'QRBox';
    qrBox.className = 'pos-f left-100';
    
    const mainBox = document.createElement('div');
    mainBox.id = 'MainBox';
    qrBox.appendChild(mainBox);
    
    container.appendChild(githubLink);
    container.appendChild(donateBox);
    document.body.appendChild(container);
    document.body.appendChild(qrBox);
  };

  // 初始化事件处理
  const initEvents = () => {
    const bd = document.body;
    const QRBox = bd.querySelector('#QRBox');
    const MainBox = bd.querySelector('#MainBox');
    const donateBox = bd.querySelector('#donateBox');
    
    const showQR = (QR) => {
      if (QR) MainBox.style.backgroundImage = `url(${QR})`;
      bd.classList.add('blur');
      QRBox.classList.add('fadeIn');
      MainBox.classList.add('showQR');
    };
    
    donateBox.addEventListener('click', (e) => {
      let el = e.target;
      if (el.id === 'QQPay' || el.closest('#QQPay')) {
        window.open(config.kofiLink, '_blank');
      } else if (el.id === 'AliPay' || el.closest('#AliPay')) {
        showQR(config.aliPayQR);
      } else if (el.id === 'WeChat' || el.closest('#WeChat')) {
        showQR(config.weChatQR);
      }
    });
    
    MainBox.addEventListener('click', () => {
      MainBox.classList.remove('showQR');
      MainBox.classList.add('hideQR');
      setTimeout(() => {
        QRBox.classList.remove('fadeIn');
        MainBox.classList.remove('hideQR');
        bd.classList.remove('blur');
      }, 600);
    });
  };

  // 初始化
  const init = () => {
    injectCSS();
    createHTML();
    initEvents();
  };

  // 当 DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();