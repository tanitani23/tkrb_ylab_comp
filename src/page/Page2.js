import { Link } from "react-router-dom";
import ScrollToTopOnMount from './ScrollToTopOnMount'

export const Page2 = () => {
    return (
      <div>
        <ScrollToTopOnMount/>
        <h1><p class="no4"><font size="7">坂牧悠香 (SAKAMAKI YUKA)</font></p></h1> 
        <br />
       <h3 class="heading04"><font size="7">写真紹介</font></h3>

          <div id="cards">
            <div class="card">
              <div class="picture"><img src="yuka.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                  高校の友人と大阪と京都に旅行しに行った時に、着物を着て観光した時の写真です！
                </p>
              </div>
            </div>
            <div class="card" id="card-center">
              <div class="picture"><img src="yuka2.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                  友人の誕生日にディズニーシーで大好きな餃子ドッグ食べてる時の顔！なんでこんな顔したのか謎です笑
                </p>
              </div>
            </div>
            <div class="card">
              <div class="picture"><img src="yuka3.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                  豊洲のチームラボに行った時の写真です！すごくキラキラしてて神秘的な空間でした！！
                </p>
              </div>
              
            </div>
          </div> 

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />   

          <ul>
          <h3 class="heading04"><font size="7">自己紹介</font></h3>
          <h3><font size="6">生年月日：2000年2月3日</font></h3>  
          <h3><font size="6">星座：水瓶座</font></h3>
          <h3><font size="6">趣味：映画・音楽鑑賞</font></h3>
          <h3><font size="6">特技：マッサージ</font></h3>
        </ul>
      <br />
        
        <ul>
          <h3 class="heading04"><font size="7">研究内容</font></h3>
          <h3><font size="6">研究テーマ：実験計画法とベイズ最適化を用いた最適なパラメータ推定</font></h3>
          <h3><font size="6">利用するデータ：野村総合研究所のアンケートデータ</font></h3>
         </ul>
      
         <br />
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
  