import queryString from "query-string";
import "../css/SecondPage.scss";
import Header from "./Header";

function SecondPage() {
  const artistCode = queryString.parse(window.location.search).code;
  console.log("artistCode: ", artistCode);

  return (
    <div className="page">
      <Header text="SURREAL HIGHWAY" />
    </div>
  );
}

export default SecondPage;
