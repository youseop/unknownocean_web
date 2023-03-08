import queryString from "query-string";
import "../css/SecondPage.scss";
import Header from "./Header";
const artist1 = require("../img/artist-1.png");

function SecondPage() {
  const artistCode =
    Number(queryString.parse(window.location.search).code) ?? 1;
  const contentsOfArtist: { text: string; src: string }[] = [
    {
      text: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
  ];
  console.log("artistCode: ", artistCode);

  const contentOfArtist = contentsOfArtist[artistCode - 1];
  return (
    <div className="page">
      <Header text="SURREAL HIGHWAY" />
      <img className="img" src={contentOfArtist.src} alt="error" />
      <div className="text">{contentOfArtist.text}</div>
    </div>
  );
}

export default SecondPage;
