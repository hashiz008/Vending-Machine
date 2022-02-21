class Product {
  constructor(name,price,img) {
      this.name = name;
      this.price = price;
      this.img = img;
  }
}

let products = [
  new Product("Jack Daniel's","2000","https://cdn.pixabay.com/photo/2018/03/06/18/00/liquor-3204101_1280.png"),
  new Product("Jim Beam","1800","https://www.suntory.co.jp/products/pimg/YJBWB_R1_20160826.jpg"),
  new Product("Monster Energy","200","https://m.media-amazon.com/images/I/71AGNrVcLPL._AC_SY606_.jpg"),
  new Product("Red Bull","220","https://images-na.ssl-images-amazon.com/images/I/41tTLeInBZL._AC_.jpg"),
  new Product("GEORGIA(ジョージア)","120","https://askul.c.yimg.jp/img/product/3L1/364158_3L1.jpg"),
  new Product("ワンダ","110","https://images-na.ssl-images-amazon.com/images/I/71InYwAGo7L._AC_SY606_.jpg"),
  new Product("ボス 贅沢微糖","130","https://images-na.ssl-images-amazon.com/images/I/71Ef1v6DRVL._AC_SL1447_.jpg"),
  new Product("ボス BLACK","130","https://www.suntory.co.jp/softdrink/news/l_img/l_sbf0134-1.jpg"),
  new Product("キリン FIRE","110","https://shop.r10s.jp/mashimo/cabinet/pd02/10000775_1.jpg")
]

let target = document.getElementById("target");


let parentDiv = document.createElement("div");;
target.append(parentDiv);
parentDiv.classList.add("d-flex","justify-content-center","pt-3","m-2");

let topDiv = document.createElement("div");
parentDiv.append(topDiv);
topDiv.classList.add("bg-primary","p-3","d-flex","align-items-center","w-100","vh-100");

let imgDiv = document.createElement("div");
topDiv.append(imgDiv);
imgDiv.style.height = "500px"
imgDiv.classList.add("m-5","col-5","bg-white","d-flex","justify-content-center")

let imgDiv2 = document.createElement("div");
imgDiv.append(imgDiv2)
imgDiv2.classList.add("d-none")
  for (let i=0; i<products.length; i++) {
       let img = document.createElement("img");
       img.src = products[i].img
       img.classList.add("imgDate")
       imgDiv2.append(img)
  }

let sliderItem = document.querySelectorAll(".imgDate");

let sliderShow = document.createElement("div");
let main = document.createElement("div")
let extra = document.createElement("div")

sliderShow.classList.add("d-flex","flex-nowrap","overflow-hiddens")
imgDiv.append(sliderShow);
sliderShow.append(main);
sliderShow.append(extra);

main.append(sliderItem[0]);
main.setAttribute("data-index","0")


let panelDiv = document.createElement("div");
topDiv.append(panelDiv);
panelDiv.classList.add("col-5","ml-2","bg-secondary","h-100")

let infoDiv = document.createElement("div");
panelDiv.append(infoDiv);
infoDiv.classList.add("d-flex","align-items-start")

let infoLeft = document.createElement("div");
infoDiv.append(infoLeft);
infoLeft.classList.add("bg-danger","col-3","mt-5","ml-4","pt-2","d-flex","justify-content-center","num")

let number = document.createElement("h2");
infoLeft.append(number);
number.innerHTML = "1"
number.style.fontSize = "60px"
number.style.color = "white"
number.style.height="70px"

let infoRight = document.createElement("div");
infoDiv.append(infoRight);
infoRight.classList.add("col-5","ml-5","mt-5","bg-info");

let name = document.createElement("h2")
let price = document.createElement("h2")
infoRight.append(name);
infoRight.append(price);
name.classList.add("pl-3")
price.classList.add("pl-3")
name.innerHTML = products[0].name;
price.innerHTML = products[0].price+"円";

let buttonDiv = document.createElement("div");
panelDiv.append(buttonDiv);
buttonDiv.classList.add("d-flex","flex-wrap","justify-content-around","my-2","mt-5")
  for (let i=0; i<products.length; i++) {
      let btn = document.createElement("button");
      btn.id = "numBtn"
      btn.style.color = "purple"
      btn.style.fontSize = "30px"
      btn.classList.add("btn","btn-warning","col-3","m-2");
      btn.innerHTML = i+1
      buttonDiv.append(btn)
  }


let pushBtnDiv = document.createElement("div");
panelDiv.append(pushBtnDiv);
pushBtnDiv.classList.add("d-flex","mt-5")

let pushBtn = document.createElement("button");
pushBtnDiv.append(pushBtn);
pushBtnDiv.classList.add("d-flex","pushBtn","justify-content-center");
pushBtn.innerHTML = "PUSH"
pushBtn.style.width = "300px"
pushBtn.style.backgroundColor = "rgb(235, 110, 21)"
pushBtn.style.color = "white"

function sliderMove(nextImg) {
  let currImg = main.getAttribute("data-index");

  if(currImg == nextImg-1) return;

  main.innerHTML = "";
  main.append(sliderItem[nextImg-1]);

  extra.innerHTML = "";
  extra.append(sliderItem[currImg]);

  main.classList.add("expand-animation")
  extra.classList.add("deplete-animation")

  if (currImg < nextImg) {
      sliderShow.innerHTML = "";
      sliderShow.append(extra);
      sliderShow.append(main);
  } else {
      sliderShow.innerHTML = "";
      sliderShow.append(main);
      sliderShow.append(extra);
  }
      main.setAttribute("data-index",(nextImg-1).toString())
}

function updateDate(numBtn) {
  let items = products[numBtn-1];
  number.innerHTML = numBtn.toString();
  name.innerHTML = items.name;
  price.innerHTML = items.price+"円"
}

let numBtn = document.querySelectorAll(".btn-warning");

  for (let i=0; i<numBtn.length; i++) {
      numBtn[i].addEventListener("click",function() {
          sliderMove(numBtn[i].innerHTML)
      })
  }

  for (let i=0; i<numBtn.length; i++) {
      numBtn[i].addEventListener("click",function() {
          updateDate(numBtn[i].innerHTML)
      })
  }

  pushBtn.addEventListener("click",function() {
      alert(name.innerHTML + "をお買い上げありがとうございます！")
  })