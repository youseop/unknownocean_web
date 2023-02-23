import ReactGA from "react-ga";

export const initGa = () => {
  const shouldDebug = true;
  const gaTrackingId = "UA-255652251-2";
  ReactGA.initialize(gaTrackingId, { debug: shouldDebug });
};

const sendGa = (category: string, action: string, label: string) => {
  ReactGA.event({ category, action, label });
};

export const visitWebsiteTest = () => {
  sendGa("render", "render-website", "test");
};

export const clickMainButton = () => {
  sendGa("click", "click-button", "");
};

export const toggleModal = () => {
  sendGa("toggle", "toggle-modal", "");
};

export const openApp = () => {
  sendGa("open", "open-app", "");
};

export const openAppstore = () => {
  sendGa("open", "open-appstore", "");
};
