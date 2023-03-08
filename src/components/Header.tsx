import "../css/Header.scss";

interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return <div className="header">{text} </div>;
}

export default Header;
