import queryString from "query-string";
import "../css/SecondPage.scss";
import { onClickInstagramIcon } from "../util/util";
const artist1 = require("../img/artist_01.png");
const artist2 = require("../img/artist_02.png");
const instagramIcon = require("../img/instagram_icon.png");

function SecondPage() {
  const code = queryString.parse(window.location.search).code;
  const artistCode = code ? Number(code) : 0;
  const contentsOfArtist: {
    title: string;
    artist: string;
    instagramUrl: string;
    desc: string;
    src: string;
  }[] = [
    {
      title: `처염상정 處染常淨 : 더러운 진흙 속에서도 꽃은 피어난다.`,
      artist: "김하영",
      instagramUrl: "https://www.instagram.com/_youseop/",
      desc: `진나라 도연명은 유독 국화를 사랑하였고, 당나라 이래로 세상 사람들이 모란을 몹시 사랑했으나 나는 홀로 연꽃을 사랑한다.

진흙에서 나왔어도 물들지 않고, 속은 통해 있고 밖은 곧아, 덩굴 지지 않고 가지도 치지 않는다.

향기는 멀수록 더욱 맑고, 우뚝 깨끗하게 서 있으며 멀리서 바라볼 수는 있으나 함부로 가지고 놀 수는 없으니, 꽃의 고고한 풍채가 더욱 도드라진다.

이 풍진(風塵) 세상에서 연꽃같이 곱고 정결하게 살아가는 이 그 몇이나 될까.

연꽃같이 강인하고 순수한 누군가의 마음을 다채로운 오브젝트로 그려내어본다.`,
      src: artist2,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
    {
      title: "",
      artist: "",
      instagramUrl: "",
      desc: "〈MANNA〉는 ‘이것이 무엇이냐’를 뜻하는 히브리어로, 관람자는 첫 번째 가상 공간에서 의문을 자아내는 알 수 없고 기이한 조각들을 만나게 됩니다.\n\n현실과 디지털 환경의 중간지대인 ’화면’이라는 차원에서, 관람자는 부유하는 조각들의 외형과 색상을 감상할 수 있습니다. 형태를 명확하게 특정할 수 없는 이미지들을 통해 ‘이것이 무엇인지’ 스스로 답을 내려볼 수 있습니다.\n\n해당 가상 공간에서 총 22점의 조각들이 전시되며, 이는 서리얼 하이웨이가 지난 8월 공개했던 시리즈 8집 《MANNA》의 작품 16점과 신작 6점을 더한 것입니다.",
      src: artist1,
    },
  ];
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
