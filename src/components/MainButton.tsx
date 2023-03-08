import "../css/MainButton.scss";

interface MainButtonProps {
  onClickMainBtn: () => void;
}

function MainButton({ onClickMainBtn }: MainButtonProps) {
  return (
    <div className="main-button-wrapper">
      <div className="button-background" />
      <div className="main-button" onClick={onClickMainBtn}>
        MainButton
      </div>
    </div>
  );
}

export default MainButton;
