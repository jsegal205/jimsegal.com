const chk = document.getElementById("toggle-chk");
const body = document.getElementsByTagName("body")[0];
const COOKIENAME = "jimsegaldarkmode";

const toggleDarkMode = e => {
  const { checked } = e.target;
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

const setDarkModeCookie = value => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 365);
  document.cookie = `${COOKIENAME}=${value};path=/;expires=${d.toGMTString()}`;
};

const setDarkMode = shouldBeDark => {
  chk.checked = shouldBeDark;
  body.className = shouldBeDark ? "dark" : "";
};

setDarkMode(getDarkModeCookie());

const keyMap = {
  83: "s",
  69: "e",
  84: "t",
  72: "h",
  77: "m",
  79: "o",
  68: "d"
};
let sequenceTracker = 0;
const sethmodeSequence = ["s", "e", "t", "h", "m", "o", "d", "e"];

const toggleSethMode = () => {
  const sethEle = document.getElementsByClassName("seth")[0];
  sethEle.className = `seth${
    sethEle.classList.contains("hidden") ? "" : " hidden"
  }`;
};

document.addEventListener("keydown", e => {
  const key = keyMap[e.keyCode];
  const requiredKey = sethmodeSequence[sequenceTracker];
  if (key === requiredKey) {
    sequenceTracker++;
    if (sequenceTracker === sethmodeSequence.length) {
      toggleSethMode();
      sequenceTracker = 0;
    }
  } else {
    sequenceTracker = 0;
  }
});
