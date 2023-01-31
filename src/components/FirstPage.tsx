import "../css/FirstPage.scss";

interface FirstPageProps {
  isUnknownOceanInstalled: boolean;
}

function FirstPage({ isUnknownOceanInstalled }: FirstPageProps) {
  return (
    <div className="page">{`firstPage ${
      isUnknownOceanInstalled ? "installed" : "uninstalled"
    }`}</div>
  );
}

export default FirstPage;
