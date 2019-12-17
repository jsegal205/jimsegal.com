const chk = document.getElementById("toggle-chk");
const body = document.getElementsByTagName("body")[0];
const toggleDarkMode = e => {
  if (e.target.checked) {
    body.className = "dark";
  } else {
    body.className = "";
  }
};

chk.addEventListener("change", toggleDarkMode, false);
