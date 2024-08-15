// const MyHeading= document.querySelector("h1");
// MyHeading.textContent="Hello World!";

// const myHeading = document.querySelector("h1");:

// この部分は、前回説明した通り、HTML ドキュメント内から最初に見つかる <h1> 要素を取得し、その要素を myHeading という変数に格納しています。
// myHeading.textContent = "Hello world!";:

// ここでは、myHeading 変数に格納された <h1> 要素のテキスト内容を "Hello world!" に設定しています。textContent は、要素内のすべてのテキストを操作するプロパティです。

const myImage= document.querySelector("img");

myImage.onclick=()=>{
   const mySrc=myImage.getAttribute("src");
   if (mySrc=== "images/firefox-icon.png"){
    myImage.setAttribute("src","images/google.png")
   }else{
    myImage.setAttribute("src","images/firefox-icon.png");
   }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// 変数にボタンとｈ１を格納

function setUserName(){
    const myName = prompt("あなたの名前を入力してください");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozila はかっこいいよ、${myName}
        さん、Mozillaはかっこいいよ。`;
    }
}
// promptでユーザーにデータの入力を求め、そのデータをmyNameに格納
// localstorageにmyNameを保存　これで次に立ち上げても同じ名前がデータとして格納されたままになる。
// テキストを表示　＄を使った文字列の埋め込みの際はダブルクォーテーションではなく、バッククォートをつかう　ここでつまった

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent=`Mozilla はかっこいいよ、${storedName}`;
}
// 最初の!localstrage~は name のデータが存在しているかどうかをチェックする　セットされていない時はsetUserName関数を実行

myButton.onclick = () =>{
    setUserName();
};




  