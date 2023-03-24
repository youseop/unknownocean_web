import ReactGA from "react-ga";

export const initGa = () => {
  const shouldDebug = false;
  const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
  if (gaTrackingId) {
    ReactGA.initialize(gaTrackingId, { debug: shouldDebug });
  }
};

const sendGa = (category: string, action: string, label: string) => {
  ReactGA.event({ category, action, label });
};

export const gaVisitWebsite = () => {
  sendGa("render", "render-website", "");
};

export const gaClickMainButton = () => {
  sendGa("click", "click-button", "");
};

export const gaToggleModal = () => {
  sendGa("toggle", "toggle-modal", "");
};

export const gaOpenApp = () => {
  sendGa("open", "open-app", "");
};

export const gaOpenAppstore = () => {
  sendGa("open", "open-appstore", "");
};

export const gaOpenAppstoreInAndroid = () => {
  sendGa("open", "try-to-open-appstore-in-android", "");
};

export const gaIsNotIOS = () => {
  sendGa("open", "not-ios", "");
};
