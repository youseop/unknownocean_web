import { openApp } from "./ga";

export const isAppInstalled = (appName: string) => {
  return false;
};

export const openUnknownOceanApp = () => {
  window.location.href = "unknownocean://";
  gaOpenApp();
};
