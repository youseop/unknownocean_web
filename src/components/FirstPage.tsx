import "../css/FirstPage.scss";
const objectSafariImg = require("../img/object-safari.png");

function FirstPage() {
  return (
    <div className="page">
      <img className="img" src={objectSafariImg} alt="error" />
      <div className="text">
        {
          "‘Object Safari’는 평소 무심코 지나치던 을지로 골목들에 여러 예술가들의 3D 오브젝트들을 전시함으로써, 익숙한 공간들에 낯선 영감을 불어넣는 전시입니다.\n\n사파리에서 동물들을 관찰하듯이 골목을 돌아다니며 3D 오브젝트들을 관람하고 영감을 받아보세요.\n\n\n전시 기간: `23 3 25 - `23 4 16\n\n전시 장소:  을지로 3가 11개 골목\n\n전시 주최:   Unknown Ocean"
        }
      </div>
    </div>
  );
}

export default FirstPage;
