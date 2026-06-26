// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let correct=false;
// そのほか，必要に応じて変数を宣言してもよい
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu=kaisu+1;
  let spanKaisu=document.querySelector('span#kaisu');
  spanKaisu.textContent=kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso=document.querySelector('input#yosou');
  let nyoso=parseInt(yoso.value,10);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  let result=document.querySelector('p#result');
  if(kaisu>=4 ||correct===true){
    result.textContent="答えは"+kotae+"でした.すでにゲームは終わっています;"
  }else{
    if (nyoso===kotae){
      result.textContent="正解です．おめでとう!"
      correct=true;
    }else if(kaisu===3){
      result.textContent="まちがい．残念でした答えは"+kotae+"です．";
    }else if(nyoso<kotae){
      result.textContent="まちがい．答えはもっと大きいですよ";
    }else if(nyoso>kotae){
      result.textContent="まちがい．答えはもっと小さいですよ";
    }
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b=document.querySelector('button#kaitou');
b.addEventListener('click',hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
