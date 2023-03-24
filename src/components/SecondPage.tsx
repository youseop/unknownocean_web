import "../css/SecondPage.scss";
import { artistCode, contentsOfArtist } from "../util/artistInfo";
import { onClickInstagramIcon } from "../util/util";
const objectVideo = require("../video/objects.mov");
const instagramIcon = require("../img/instagram_icon.png");

function SecondPage() {
  const contentOfArtist = contentsOfArtist[artistCode];

  if (artistCode === 0)
    return (
      <div className="second-page main">
        <video autoPlay muted loop playsInline>
          <source src={objectVideo} type="video/mp4" />
        </video>
        <div className="text">{`11개의 골목들에서 11명의 3D 아티스트와 함께하는 단체전입니다. 아티스트는 골목을 하나씩 맡아, 자신만의 전시를 각 골목의 AR 공간에서 전개합니다.`}</div>
        <div className="title">{"참여 아티스트"}</div>
        <div className="text">{`YAKID
owei
Hyohyun Noh
꿉기
김하영
채연
SEOJIN
SISI
장서원
윤다은
정세윤`}</div>
        <div className="title">{"참여 공간"}</div>
        <div className="text">{`안성도기
선인문화
을지오케이
평래옥
언오디너리
삼미전기
디엣지
우주
하우스파티
을지빈
알렉스룸`}</div>
      </div>
    );
  else
    return (
      <div className="second-page">
        <div className="img-wrapper">
          <img className="img" src={contentOfArtist.src} alt="error" />
        </div>
        <div className="title">{contentOfArtist.title}</div>
        <div className="artist-wrapper">
          <div className="artist">{contentOfArtist.artist}</div>
          <img
            className="instagram-icon"
            src={instagramIcon}
            alt="error"
            onClick={() => {
              onClickInstagramIcon(contentOfArtist.instagramUrl);
            }}
          />
        </div>
        <div className="text">{contentOfArtist.desc}</div>
      </div>
    );
}

export default SecondPage;
