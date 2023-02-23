import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

export const initGa = () => {
  const shouldDebug = true;
  const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
  console.log("gaTrackingId", gaTrackingId);
  if (gaTrackingId) {
    ReactGA.initialize(gaTrackingId, { debug: shouldDebug });
    const history = createBrowserHistory();
    history.listen((response) => {
      ReactGA.set({ page: response.location.pathname });
      ReactGA.pageview(response.location.pathname);
    });
  } else {
    console.log("ga setting failed");
  }
};
