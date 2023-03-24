import "../css/FirstPage.scss";
import { onClickInstagramIcon } from "../util/util";
const objectSafariImg = require("../img/object-safari.png");
const instagramIcon = require("../img/instagram_icon.png");

function FirstPage() {
  return (
    <div className="first-page">
      <img className="img" src={objectSafariImg} alt="error" />

      <div className="text">
        <span className="orange-text">{"OBJECT SAFARI"}</span>
        {` 는 평소 무심코 지나치던 을지로 골목들에 여러 예술가들의 3D 오브젝트들을 전시함으로써, 익숙한 공간들에 낯선 영감을 불어넣는`}
        <span className="orange-text">{` AR `}</span>
        {`전시입니다. 
        
사파리에서 동물들을 관찰하듯이 골목을 돌아다니며 오브젝트들을 관람하고 영감을 받아보세요. 🦥
        `}
        <span className="small-text">
          {`
          
전시 기간 : 2023.03.25 - 2023.04.16
전시 장소 : 을지로 3가 11개 골목
전시 주최 : UNKNOWN OCEAN
`}
          <img
            className="instagram-icon"
            src={instagramIcon}
            alt="error"
            onClick={() => {
              onClickInstagramIcon("https://www.instagram.com/unknowwnocean/");
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default FirstPage;
