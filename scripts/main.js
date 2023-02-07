let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.0KV2_1920x1080.jpg") {
    myImage.setAttribute("src", "images/PS5_1920x1080.jpg"); //璃月
  } else if (mySrc === "images/PS5_1920x1080.jpg") {
    myImage.setAttribute("src", "images/1920-1080.png"); //稲妻
  } else if (mySrc === "images/1920-1080.png") {
    myImage.setAttribute("src", "images/1920｡ﾁ1080.jpg"); //スメール
  } else {
    myImage.setAttribute("src", "images/1.0KV2_1920x1080.jpg"); //モンド
  }
};
