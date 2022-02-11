let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1920-1080.png") {
    myImage.setAttribute("src", "images/1.0KV2_1920x1080.jpg");
  } else if (mySrc === "images/1.0KV2_1920x1080.jpg") {
    myImage.setAttribute("src", "images/PS5_1920x1080.jpg");
  } else {
    myImage.setAttribute("src", "images/1920-1080.png");
  }
};
