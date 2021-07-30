class Item {
  constructor(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

//グローバル変数
let items = [
  new Item(
    "Jack Daniel's",
    "2000",
    "https://image.yodobashi.com/product/100/000/001/004/189/903/100000001004189903_10203.jpg"
  ),
  new Item(
    "Jim Beam",
    "1800",
    "https://image.yodobashi.com/product/100/000/001/004/190/010/100000001004190010_10203.jpg"
  ),
  new Item(
    "Monster Energy",
    "200",
    "https://www.asahiinryo.co.jp/company/newsrelease/2018/image/0807_1_1.jpg"
  ),
  new Item(
    "Red Bull",
    "220",
    "https://scdn.line-apps.com/stf/linenews-issue-784/item-654099/ae1f4e93902bcd385cacd3e78b6a4d7e65f9b784.png"
  ),
  new Item(
    "GEORGIA(ジョージア)",
    "120",
    "https://askul.c.yimg.jp/img/product/3L1/364158_3L1.jpg"
  ),
  new Item(
    "ワンダ",
    "110",
    "https://tshop.r10s.jp/sake-king/cabinet/drink/425.jpg?fitin=300:300"
  ),
  new Item(
    "ボス 贅沢微糖",
    "130",
    "https://cdn1.esimg.jp/resize/320x320/image/food/02/15/16/1864483.jpg"
  ),
  new Item(
    "ボス BLACK",
    "130",
    "https://www.eatsmart.jp/image/food/02/15/16/962854.jpg"
  ),
  new Item(
    "キリン FIRE",
    "110",
    "https://shop.r10s.jp/mashimo/cabinet/pd02/10000775_1.jpg"
  ),
];

class VendingMachine {
  //自販機 レイアウト
    static layout() {
        let vendingBody = "<div>";
        vendingBody += `
            <div class="mt-5 d-flex justify-content-center">
                <div class="bg-primary p-5 col-10">
                    <div class="col-5 d-flex">
                        <div class="bg-secondary p-3 d-flex justify-content-center">
                            <div id="itemImg" style="width:200px; height:200px" class="bg-dark">
                            </div>
                        </div>
                        <div class="ml-3 col-5">
                        <div style="width:400px" class="bg-secondary p-2">
                            <div class="d-flex justify-content-center">
                                <p style="font-size:30px; color:white" id="itemDate"></p>
                            </div>
                            <div class="d-flex">
                                <div style="font-size:30px; color:white" id="itemNum" class="bg-danger p-3">
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <div id="btnNum" class="bg-secondary p-2 mr-5">
                        </div>
                    </div>
                    <div class="ml-2">
                    <button id="push" style="font-size:20px; color:white; background-color:#a5aab0" class="col-3 p-2 ml-4">
                        PUSH
                    </button>
                </div>
            </div>
        </div>
        `;
        vendingBody += "</div>";
        document.getElementById("target").innerHTML = vendingBody;
    }
  // ボタン 作成
    static numBtn() {
        document.getElementById("itemNum").innerHTML = "1";
        document.getElementById("itemDate").innerHTML =
        items[0].name + "<br>" + items[0].price;
        for (let i = 1; i <= items.length; i++) {
            let button = document.createElement("button");
            button.classList.add("btn-primary", "col-3", "m-1", "p-2");
            button.type = "button";
            button.style = "font-size:20px";
            button.id = i;
            button.innerHTML = i;
            document.getElementById("btnNum").append(button);
        }
        //ボタン メソッド
        for (let i = 1; i <= items.length; i++) {
            let itemBtn = document.getElementById(i);
            itemBtn.addEventListener("click", function() {
                Slider.itemDate(i);
                Slider.sliderImg(i);
            });
        }

        document.getElementById("push").addEventListener("click", function() {
            let pushBtn = Number(document.getElementById("itemImg").getAttribute("display-num"));
            alert(items[pushBtn - 1].name +"購入しました！" +"\n" +items[pushBtn - 1].price +"円！");
        });
    }
    //初期画像 配置
    static itemImg() {
        document.getElementById("itemImg").setAttribute("display-num", "1");
        let img = document.createElement("img");
        img.classList.add("w-100", "h-100");
        img.src = items[0].img;
        document.getElementById("itemImg").append(img);
    }
}

class Slider {
    static sliderImg(btnNum) {
        document.getElementById("itemImg").innerHTML = "";

        let main = document.createElement("div");
        main.classList.add("expand-animation");
        let mainImg = document.createElement("img");
        mainImg.classList.add("w-100", "h-100");
        mainImg.src = items[btnNum - 1].img;
        main.append(mainImg);

        let extra = document.createElement("div");
        extra.classList.add("deplete-animation");
        let extraImg = document.createElement("img");
        let extraNum = Number(
            document.getElementById("itemImg").getAttribute("display-num")
        );
        extraImg.classList.add("w-100", "h-100");
        extraImg.src = items[extraNum - 1].img;
        extra.append(extraImg);
        document.getElementById("itemImg").setAttribute("display-num", String(btnNum));

        if (btnNum > extraNum) {
            document.getElementById("itemImg").append(main);
            document.getElementById("itemImg").append(extra);
        } else if (btnNum < extraNum) {
            document.getElementById("itemImg").append(extra);
            document.getElementById("itemImg").append(main);
        } else {
            document.getElementById("itemImg").append(mainImg);
        }
    }

    static itemDate(btnNum) {
        document.getElementById("itemNum").innerHTML = btnNum;
        document.getElementById("itemDate").innerHTML =
        items[btnNum - 1].name + "<br>" + items[btnNum - 1].price;
  }
}

VendingMachine.layout();
VendingMachine.numBtn();
VendingMachine.itemImg();