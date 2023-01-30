import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

export const initGa = () => {
  const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
  if (gaTrackingId) {
    ReactGA.initialize(gaTrackingId, { debug: true });
    const history = createBrowserHistory();
    history.listen((response) => {
      console.log(response.location.pathname);
      ReactGA.set({ page: response.location.pathname });
      ReactGA.pageview(response.location.pathname);
    });
  } else {
    console.log("ga setting failed");
  }
};
