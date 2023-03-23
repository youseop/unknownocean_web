import queryString from "query-string";
const scan1 = require("../img/scan_01.png");
const scan2 = require("../img/scan_02.png");
const scan3 = require("../img/scan_03.png");
const scan4 = require("../img/scan_04.png");
const scan5 = require("../img/scan_05.png");
const scan6 = require("../img/scan_06.png");
const scan7 = require("../img/scan_07.png");
const scan8 = require("../img/scan_08.png");
const scan9 = require("../img/scan_09.png");
const scan10 = require("../img/scan_10.png");
const scan11 = require("../img/scan_11.png");
const artist1 = require("../img/artist_01.png");
const artist2 = require("../img/artist_02.png");
const artist3 = require("../img/artist_02.png");
const artist4 = require("../img/artist_02.png");
const artist5 = require("../img/artist_02.png");
const artist6 = require("../img/artist_02.png");
const artist7 = require("../img/artist_02.png");
const artist8 = require("../img/artist_02.png");
const artist9 = require("../img/artist_02.png");
const artist10 = require("../img/artist_02.png");
const artist11 = require("../img/artist_02.png");

export const contentsOfArtist: {
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

연꽃같이 강인하고 순수한 누군가의 마음을 다채로운 오브젝트로 그려내어본다.`,
    src: artist2,
  },
  {
    title: "의외",
    artist: "YAKID",
    instagramUrl: "https://www.instagram.com/_yakid_/",
    desc: `중학교 2학년 이세계에 대한 열망. 
스물 두살 군대가기전 세상의 멸망. 
서른 두살 실낱같은 최후의 희망. 

철들지 못한 정신세계에는 무지개빛이 드리워져 있다. 세월에 흐름에 반해 멈춰있는 것만 같은 소년은 오늘도 골목을 거닐며 육신을 회피한다.`,
    src: artist1,
  },
  {
    title: "낯설게 보기",
    artist: "owei",
    instagramUrl: "https://www.instagram.com/oweixx/",
    desc: `너무나도 당연한 것들 때문에 많은 것을 잃고, 잊고, 상실하며 살아가는 요즘입니다. 그럴 떄면 흔한 것들을 낯설게 바라보는 연습이 필요하지 않을까 생각합니다.
    
제가 아는 낯설게 바라보는 법은 가장 순수하게 바라보는 것입니다. 마치 어린아이가 부모님의 모든 말에 '왜?'라는 질문을 하듯 말입니다.
    
당연하게만 여기던 주변 환경을 순수한 시선으로 차분하게 바라본다면 잊고 있던 잃어버렸던 놓쳐버렸던 것들을 찾을 수도 있을 것입니다.
    
이 작품이 저에겐 그런 잊고 있던 저의 취향을 찾게 해준 순수한 시선의 표현이었습니다.
    
부디 이 낯선 곳에서 낯선 작품을 보고 조금이나마 순수한 낯섦을 느끼셨으면 합니다.`,
    src: artist2,
  },
  {
    title: "playground (놀이터)",
    artist: "Hyohyun Noh",
    instagramUrl: "https://www.instagram.com/nohh_h_/",
    desc: `을지로 골목길은 골목 구석구석에 자리한 개성이 넘치는 곳이다.

놀 거리가 가득한 을지로 3가,

지나가는 길에 가상공간으로 구경거리를 더해 소소하게나마 놀이할 만한 오브젝트를 준비했어요.같이 사진 찍고 소소한 추억으로 남길 바랄게요.`,
    src: artist3,
  },
  {
    title: "태양의 제단, 2023",
    artist: "꿉끼",
    instagramUrl: "https://www.instagram.com/gupgi_the_titan/",
    desc: `몰두하여 외면하기 위해 만들어낸 태양의 제단 앞에, 머리를 숙이고 마음을 빌어 모든 고통을 덮어버리자.

가슴 위에 놓인 천을 타고 곰팡이가 기어오른다.

홀로 있는 것, 그것에 기대어 함께 흘러가는 법을 알 수 없어 속이 텅 빈 요새를 짓는다.

우리는 모두가 위대한 혼자였다. 살아 있으라, 누구든 살아 있으라.

기형도, 비가 2 - 붉은 달 중에`,
    src: artist4,
  },
  {
    title: "처염상정 處染常淨 : 더러운 진흙 속에서도 꽃은 피어난다.",
    artist: "김하영",
    instagramUrl: "https://www.instagram.com/des2gn/",
    desc: `진나라 도연명은 유독 국화를 사랑하였고, 당나라 이래로 세상 사람들이 모란을 몹시 사랑했으나 나는 홀로 연꽃을 사랑한다.

진흙에서 나왔어도 물들지 않고, 속은 통해 있고 밖은 곧아, 덩굴 지지 않고 가지도 치지 않는다.

향기는 멀수록 더욱 맑고, 우뚝 깨끗하게 서 있으며 멀리서 바라볼 수는 있으나 함부로 가지고 놀 수는 없으니, 꽃의 고고한 풍채가 더욱 도드라진다.

이 풍진(風塵) 세상에서 연꽃같이 곱고 정결하게 살아가는 이 그 몇이나 될까.

연꽃같이 강인하고 순수한 누군가의 마음을 다채로운 오브젝트로 그려내어본다.`,
    src: artist5,
  },
  {
    title: "유영",
    artist: "채연",
    instagramUrl: "https://www.instagram.com/cc.ooou/",
    desc: "눈을 감고 물의 흐름에 따라 자유로움을 느끼다.",
    src: artist6,
  },
  {
    title: "Love me more",
    artist: "SEOJIN",
    instagramUrl: "https://www.instagram.com/iseo_2/",
    desc: `집착, 과도한 사랑에 대하여 3D로 표현한 전시.

._ 천사 or 악마,
구속을 상징하는 체인과 사랑을 상징하는 장미가 포함된 석고상 오브제

._ 체인과 장미가 뒤엉킨 심장 오브제
흘러넘치는 사랑과 속박에 뒤엉킨 심장.

._ LOVE HATE, HATE LOVE
사랑을 증오해, 증오를 사랑해.


An exhibition that expresses obsession and excessive love in 3D.

._ Angel or devil,
Sculpture objet with chains symbolizing restraint and roses symbolizing love

._ Heart object with chains and rose tangled
A heart tangled with overflowing love and bondage.

._ LOVE HATE, HATE LOVE
Hate love and love hate.`,
    src: artist7,
  },
  {
    title: "Way to the Universe",
    artist: "SISI",
    instagramUrl: "https://www.instagram.com/sssi_ssssi/",
    desc: `“경계 속의 아름다움”
Way to the universe는 2층에 자리한 가게의 이름 “우주”와 검은색의 공간적 특징, 영화 “서던 리치:소멸의 땅” 에서 영감을 얻어 만들어진 작품이다.
벽면을 따라 휘감긴 것들은 뱀처럼 길게 이어져 우주로 가는 기묘한 좁은 복도를 나타낸다.
식물처럼 천천히, 몸의 일부를 터뜨리고 분리해내면서 성장하고 있는 외계 물질.
그 속에 들어간 순간만큼은 행성 간의 경계가 모호해진다.

본 작품을 통해 지구에서 우주로 이어지는 경계 속의 아름다움을 느낄 수 있길 바란다.`,
    src: artist8,
  },
  {
    title: `디지털 꽃의 순환 
(Cycles of Digital Blossoms)`,
    artist: "장서원",
    instagramUrl: "https://www.instagram.com/albero1987_official/",
    desc: `형형색색으로 빛나는 디지털 플라워로 구성되어 있으며, 이를 통해 신비로운 분위기를 자아낸다. 

식물과 조화롭게 디자인된 도시 전체를 상상해 볼 수 있는데, 이는 미래 도시의 가능성을 상징한다. 
    
이 작품은 디지털 기술을 활용해 삭막해진 도시에 디지털 가든을 만들어 따뜻함을 불어 넣고자 한다.`,
    src: artist9,
  },
  {
    title: "<Oh, Happy Day!> 2023",
    artist: "윤다은",
    instagramUrl: "https://www.instagram.com/yuniversssee/",
    desc: `<Oh, Happy Day!>는 일상의 소소한 순간에서 우리가 놓치기 쉬운 작은 행복들을 담아낸 그림입니다.
테이블 위에 놓인 케이크는 삶의 선물이자 기쁨을 나눌 수 있는 시간을 상징하고, 꽃과 캔들은 어둠 속에서도 희망과 아름다움을 찾아내는 우리 모두의 상징입니다.
이 외에 일상에서 흔히 볼 수 있는 요소들을 배치해서 우리가 일상에서 찾아낼 수 있는 작은 행복들이 얼마나 소중하고 의미 있는 것인지를 전달하고 싶었습니다.

제 그림을 보시는 분들 모두 일상에서 놓치기 쉬운 소중한 순간들을 발견하고,
그 속에서 행복을 느끼며 살아가기를 바랍니다!`,
    src: artist10,
  },
  {
    title: "도태의 생",
    artist: "정세윤",
    instagramUrl: "https://www.instagram.com/syn.works/",
    desc: "앞서나감에 있어 비교우위에 있다는 자의식을 열망함으로 종국에는 자기파멸에 이르는 일련의 생을 표상",
    src: artist11,
  },
];

export const scanImgs = [
  scan1,
  scan1,
  scan2,
  scan3,
  scan4,
  scan5,
  scan6,
  scan7,
  scan8,
  scan9,
  scan10,
  scan11,
];

const code = queryString.parse(window.location.search).code;

export const artistCode = code ? Number(code) : 0;
