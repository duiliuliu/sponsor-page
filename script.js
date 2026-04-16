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

const showQR = (QR) => {
  if (QR) MainBox.style.backgroundImage = `url(${QR})`;

  bd.classList.add("blur");
  QRBox.classList.add("fadeIn");
  MainBox.classList.add("showQR");
};

donateBox.addEventListener("click", (e) => {
  let el = e.target;

  if (el.id === "QQPay" || el.closest('#QQPay')) window.open("https://ko-fi.com/E1E81XKC5D", "_blank");
  else if (el.id === "AliPay" || el.closest('#AliPay')) showQR(aqr);
  else if (el.id === "WeChat" || el.closest('#WeChat')) showQR(wqr);
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
