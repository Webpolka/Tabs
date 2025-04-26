import Tabs from "./tabs.js";

window.addEventListener("DOMContentLoaded", function () {
  const tabInPage = document.querySelector("[data-tab]");
  tabInPage &&
    new Tabs({
      button: "data-tab",
      panel: "data-panel",
      index: 0,
    });
});
