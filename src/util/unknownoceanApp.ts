import { gaOpenApp } from "./ga";

export const openUnknownOceanApp = () => {
  window.location.href = "unknownocean://";
  gaOpenApp();
};
