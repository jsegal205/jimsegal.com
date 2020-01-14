const chk = document.getElementById("toggle-chk");
const body = document.getElementsByTagName("body")[0];
const COOKIENAME = "jimsegaldarkmode";
const SETHMODEELE = "seth-bg";

const toggleDarkMode = e => {
  const { checked } = e.target;
  gtag("event", "toggled", {
    event_category: "darkmode",
    event_label: checked
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
  68: "d",
  69: "e",
  72: "h",
  73: "i",
  74: "j",
  77: "m",
  79: "o",
  83: "s",
  84: "t"
};
const sethmode = {
  sequence: ["s", "e", "t", "h", "m", "o", "d", "e"],
  tracker: 0,
  active: false
};
const jimmode = {
  sequence: ["j", "i", "m", "m", "o", "d", "e"],
  tracker: 0
};

const enableJimMode = () => {
  if (sethmode.active) {
    sethmode.active = false;
    const sethEle = document.getElementsByClassName(SETHMODEELE)[0];
    sethEle.remove();

    gtag("event", "toggled", {
      event_category: "sethmode",
      event_label: sethmode.active
    });
  }
};

const enableSethMode = () => {
  if (!sethmode.active) {
    const sethDiv = document.createElement("div");
    sethDiv.className = SETHMODEELE;
    sethDiv.innerHTML = `
      <div class="seth">
        <img src="css/seth.jpg" />
      </div>
      <div class="info">Type "jimmode" to exit out of sethmode</div>
    `;
    body.appendChild(sethDiv);
    sethmode.active = true;

    gtag("event", "toggled", {
      event_category: "sethmode",
      event_label: sethmode.active
    });
  }
};

document.addEventListener("keydown", e => {
  const key = keyMap[e.keyCode];
  const sethRequiredKey = sethmode.sequence[sethmode.tracker];
  const jimRequiredKey = jimmode.sequence[jimmode.tracker];

  switch (key) {
    case sethRequiredKey:
      sethmode.tracker++;
      if (sethmode.tracker === sethmode.sequence.length) {
        enableSethMode();
        sethmode.tracker = 0;
      }
      break;
    case jimRequiredKey:
      jimmode.tracker++;
      if (jimmode.tracker === jimmode.sequence.length) {
        enableJimMode();
        jimmode.tracker = 0;
      }
      break;
    default:
      sethmode.tracker = 0;
      jimmode.tracker = 0;
  }
});
