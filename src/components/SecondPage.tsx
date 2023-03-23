import "../css/SecondPage.scss";
import { artistCode, contentsOfArtist } from "../util/artistInfo";
import { onClickInstagramIcon } from "../util/util";
const instagramIcon = require("../img/instagram_icon.png");

function SecondPage() {
  const contentOfArtist = contentsOfArtist[artistCode];

  return (
    <div className="second-page">
      <img className="img" src={contentOfArtist.src} alt="error" />
      <div className="title">{contentOfArtist.title}</div>
      <div className="artist-wrapper">
        <div className="artist">{contentOfArtist.artist}</div>
        <img
          className="instagram-icon"
          src={instagramIcon}
          alt="error"
          onClick={() => {
            onClickInstagramIcon("https://www.instagram.com/unknowwnocean/");
          }}
        />
      </div>
      <div className="text">{contentOfArtist.desc}</div>
    </div>
  );
}

export default SecondPage;
