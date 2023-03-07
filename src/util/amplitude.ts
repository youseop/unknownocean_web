import * as amplitude from "@amplitude/analytics-browser";

export const initAmplitude = () => {
  const amplitudeTrackingId = process.env.REACT_APP_AMPLITUDE_TRACKING_ID;
  if (amplitudeTrackingId) {
    amplitude.init(amplitudeTrackingId, undefined, {
      defaultTracking: {
        sessions: true,
        pageViews: true,
        formInteractions: true,
        fileDownloads: true,
      },
    });
  }
};
