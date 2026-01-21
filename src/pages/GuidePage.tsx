import Title from "../components/elements/title";

const GuidePage = () => {
  return(
    <div className="flex flex-col w-screen items-center justify-center">
      <Title>ルート検索の使い方</Title>
      <div className="text-black text-2xl m-8">
        <ol className="list-decimal">
          <li>トグルで希望するルートを選択</li>
          <li>出発地と目的地を選択
            <ul><li>入力すると絞り込まれるのでドロップダウンの候補から選択</li></ul>
          </li>
          <li>検索ボタンを押す</li>
          <li>写真が表示されるのでそれに従って移動
            <ul><li>戻るボタンと進むボタンで写真が変わります</li></ul>
          </li>
        </ol>
      </div>
      <Title>検索時の注意点</Title>
      <div className="text-black text-2xl m-8">
        <ul className="list-disc">
          <li>各部屋の名前は学生便覧に準拠
            <ul>
              <li>1-1の場合は"1-1普通教室"</li>
              <li>2-Mの場合は"2年エネルギー機械HR(2M)"</li>
              <li>5-Mの場合は"5年機械システムHR(5M)"</li>
              <li>研究室と教員室はスペースを入れずに"研究室〇〇"</li>
            </ul>
          </li>
          <li>英数字記号はすべて半角文字
            <ul>
              <li>IIIやIVなどのローマ数字はアルファベットで入力</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default GuidePage;