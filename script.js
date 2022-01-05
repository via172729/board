let i = 0, imgArr = new Array;
imgArr[0] = "https://www.ncyu.edu.tw/files/list/secretary/%E7%AC%AC%E4%BA%8C%E6%A0%A1%E5%BE%BD%20(1).jpg";
imgArr[1] = "https://www.ncyu.edu.tw/files/list/secretary/%E7%AC%AC%E4%BA%8C%E6%A0%A1%E5%BE%BD.png";
imgArr[2] = "https://www.ncyu.edu.tw/files/site_content/ann/%E7%99%BE%E5%B9%B4%E6%A0%A1%E6%85%B6LOGO%20(2).jpg";
function showImg(){
  document.getElementById('ico').src = imgArr[i];
  i = (i + 1) % 3;
}
function show(){
  setInterval(showImg, 2000);
}

let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML + `
  <div class = "news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
  `
  title.value = "";
  content.value = "";
}