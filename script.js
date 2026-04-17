const bd = document.querySelector("body");

const QRBox = bd.querySelector("#QRBox");
const MainBox = bd.querySelector("#MainBox");
const donateBox = bd.querySelector("#donateBox");

const qqr = "images/QQPayQR.png";
const aqr = "images/AliPayQR.jpg";
const wqr = "images/WeChatQR.jpg";

// 处理 URL 参数
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('no-text') === '1') {
  donateBox.classList.add('no-text');
}

const isIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

const showQR = (QR) => {
  if (QR) MainBox.style.backgroundImage = `url(${QR})`;

  bd.classList.add("blur");
  QRBox.classList.add("fadeIn");
  MainBox.classList.add("showQR");
};

const openQRInNewWindow = (type) => {
  const baseUrl = window.location.origin + window.location.pathname;
  window.open(`${baseUrl}?qr=${type}`, "_blank", "width=400,height=500,scrollbars=no,resizable=yes");
};

donateBox.addEventListener("click", (e) => {
  let el = e.target;

  if (el.id === "QQPay" || el.closest('#QQPay')) window.open("https://ko-fi.com/E1E81XKC5D", "_blank");
  else if (el.id === "AliPay" || el.closest('#AliPay')) {
    if (isIframe()) {
      openQRInNewWindow("alipay");
    } else {
      showQR(aqr);
    }
  }
  else if (el.id === "WeChat" || el.closest('#WeChat')) {
    if (isIframe()) {
      openQRInNewWindow("wechat");
    } else {
      showQR(wqr);
    }
  }
});

MainBox.addEventListener("click", () => {
  MainBox.classList.remove("showQR");
  MainBox.classList.add("hideQR");

  setTimeout((a) => {
    QRBox.classList.remove("fadeIn");
    MainBox.classList.remove("hideQR");
    bd.classList.remove("blur");
  }, 600);
});

const getUrlParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

const qrType = getUrlParameter("qr");
if (qrType) {
  bd.classList.add("qr-window");
  if (qrType === "alipay") {
    showQR(aqr);
  } else if (qrType === "wechat") {
    showQR(wqr);
  }
}
