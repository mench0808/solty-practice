let icecream="チョコレート";
if (icecream==="チョコレート"){
    alert("やった！チョコレート大好き！")
}else{
    alert("あれれ、でもチョコレートが好きなのに......");
}

function multiply(num1,num2){
    let result =num1*num2;
    return result;
}

document.querySelector("html").addEventListener("click", function () {
    alert("痛っ! つつかないで!");
  });
// html要素を選択して、addEventListener()関数を呼び出し、待ち受けるイベントの名前（今回はクリック）とその時に起こる挙動を記載
// addEventListener(event,listener,options)関数は指定したイベントが特定の要素で発生したときに実行される関数（イベントリスナー）を登録するために使われます。

// アロー関数 functionの代わりに() => を使う
document.querySelector("html").addEventListener("click", () =>{
    alert("痛っ! つつかないで!");
 } );

