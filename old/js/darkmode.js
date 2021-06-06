const chk = document.getElementById("toggle-chk");
const body = document.getElementsByTagName("body")[0];
const COOKIENAME = "jimsegaldarkmode";

const toggleDarkMode = (e) => {
  const { checked } = e.target;
  gtag("event", "toggled", {
    event_category: "darkmode",
    event_label: checked,
  });
  setDarkModeCookie(checked);
  setDarkMode(checked);
};

chk.addEventListener("change", toggleDarkMode, false);

const getDarkModeCookie = () => {
  const darkModeValue = document.cookie.match(
    `(^|;) ?${COOKIENAME}=([^;]*)(;|$)`
  );
  return darkModeValue ? darkModeValue[2].toLowerCase() === "true" : null;
};

const setDarkModeCookie = (value) => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 365);
  document.cookie = `${COOKIENAME}=${value};path=/;expires=${d.toGMTString()}`;
};

const setDarkMode = (shouldBeDark) => {
  chk.checked = shouldBeDark;
  body.className = shouldBeDark ? "dark" : "";
};

setDarkMode(getDarkModeCookie());
