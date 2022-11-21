import { Link } from "react-router-dom";
import ScrollToTopOnMount from './ScrollToTopOnMount'

export const Page3 = () => {
    return (
      <div>
        <ScrollToTopOnMount/>
        <h1><p class="no4"><font size="7">三橋可奈 (MITSUHASHI KANA)</font></p></h1> 
        <br />
       <h3 class="heading04"><font size="7">写真紹介</font></h3>

          <div id="cards">
            <div class="card">
              <div class="picture"><img src="kana.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                先日、熊本に旅行してきました！<br/>
                くまモンの像がそこらじゅうにいました！
                </p>
              </div>
            </div>
            <div class="card" id="card-center">
              <div class="picture"><img src="kana2.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                卒業式に高校時代の友達が祝いに来てくれました♡しかも、友達の彼氏がカメラマン役で登場！
                </p>
              </div>
            </div>
            <div class="card">
              <div class="picture"><img src="kana3.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                学科の友達と糸島に行った時の写真です！ずーと雨でしたがこの瞬間だけ晴れました！
                </p>
              </div>
              
            </div>
          </div> 

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />   

          <ul>
          <h3 class="heading04"><font size="7">自己紹介</font></h3>
          <h3><font size="6">生年月日：1999年11月13日</font></h3>  
          <h3><font size="6">星座：蠍座</font></h3>
          <h3><font size="6">趣味：K-POP・韓ドラマ鑑賞</font></h3>
          <h3><font size="6">特技：パワポ作成</font></h3>
        </ul>
      <br />
        
        <ul>
          <h3 class="heading04"><font size="7">研究内容</font></h3>
          <h3><font size="6">研究テーマ：画像処理とXAIを組み合わせた高く評価される画像の特徴抽出</font></h3>
          <h3><font size="6">利用するデータ：ファッションコーディネートアプリWEARの投稿データ</font></h3>
         </ul>
        
         <br /><br />

          <Link to="/">
          
          <h6 class="btn btn-3d-circle">
            <span class="btn-3d-circle-content">
              <span class="btn-3d-circle-front">
                HOME
              </span>
              </span>
              <span class="btn-3d-circle-back">
                <i class="fas fa-mouse-pointer">
                </i>
              </span>
            
          </h6>

          </Link>

      </div>
    );
  };
  