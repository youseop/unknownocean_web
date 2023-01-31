export const isAppInstalled = (appName: string) => {
  const nav = window.navigator as any;
  if (nav.standalone) {
    return nav.canOpenURL(`${appName}://`);
  }
};

export const openUnknownOceanApp = () => {
  window.location.href = "unknownocean://";
};
