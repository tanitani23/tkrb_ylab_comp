import { Link } from "react-router-dom";
import ScrollToTopOnMount from './ScrollToTopOnMount'

export const Page4 = () => {
    return (
      <div>
        <ScrollToTopOnMount/>
        <h1><p class="no4"><font size="7">大池樹 (TATSUKI OIKE)</font></p></h1> 
        <br />
       <h3 class="heading04"><font size="7">写真紹介</font></h3>

          <div id="cards">
            <div class="card">
              <div class="picture"><img src="tatsuki.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                旅行に行った時に、暑すぎてパラソルの下で涼んでます笑<br/>
                ちなみに悠香のサングラスです！
                </p>
              </div>
            </div>
            <div class="card" id="card-center">
              <div class="picture"><img src="tatsuki2.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                3年ぶりのディズニー!<br/>
                めちゃめちゃきめてます笑
                </p>
              </div>
            </div>
            <div class="card">
              <div class="picture"><img src="tatsuki3.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                シュラスコが全然来なくて空腹で死にそうになってました！<br/>
                最初はグー!
                </p>
              </div>
              
            </div>
          </div> 

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />   

          <ul>
          <h3 class="heading04"><font size="7">自己紹介</font></h3>
          <h3><font size="6">生年月日：2000年1月20日</font></h3>  
          <h3><font size="6">星座：水瓶座</font></h3>
          <h3><font size="6">趣味：勉強・youtube</font></h3>
          <h3><font size="6">特技：プログラミング</font></h3>
        </ul>
      <br />
        
        <ul>
          <h3 class="heading04"><font size="7">研究内容</font></h3>
          <h3><font size="6">研究テーマ：ユーザーの属性に合わせた、指定したアイテムの高評価画像生成</font></h3>
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
  