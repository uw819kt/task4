function emailValidation() { //エラーメッセージの表示、一致で消える処理
  const form = document.getElementById('form');
  let error_element = null;                  //エラーメッセージ格納、何度も使用するためletにしてメソッドの外へ

  form.email_confirm.addEventListener('input', () => {
  
    if (form.email.value !== form.email_confirm.value) {       //メールアドレス不一致の時

      if (!error_element) {
        error_element = document.createElement("td");                 //td要素作成
        const message = document.createTextNode("Eメールが一致しません");   //テキスト作成
        parent = document.querySelector(".contact_line").parentElement;    //<tr>の親要素取得(自動生成された<tbody>タグ取得)・.querySelectorは指定されたselecterのうち最初にヒットしたものを返す
        const target = document.querySelector(".contact_line").parentElement.children[3];    //<table>タグ(自動生成された<tbody>タグ)から子要素配列取得、[3]の<tr>タグ指定
        
        error_element.classList.add("alert")                     //alertクラス追加
        form.email_confirm.classList.add("bg_confirm");

        parent.insertBefore(error_element,target);
        error_element.appendChild(message);
      }
    } else if (error_element) {                           //メールアドレスが一致している時
      parent.removeChild(document.querySelector(".contact_line").parentElement.children[3]);                     //<td>Eメールが一致しません</td>削除
      form.email_confirm.classList.remove("bg_confirm");
      error_element = null;
    }; 
  });
};
window.onload = emailValidation;
 
/*

・メッセージが作成されている場合は増えないようにする
・アドレス一致時にメッセージを削除する
・tr要素を取得して<td>を挿入する

*/
