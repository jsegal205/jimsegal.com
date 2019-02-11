const getTemp = async (lat, long) => {
  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?appid=9bf0ee26559265f94c44015dbce8177d&units=imperial";
  const response = await fetch(`${API_URL}&lat=${lat}&lon=${long}`);
  if (!response.ok) {
    getElementById("well-is-it").className = "error";
    setElementContent("well-is-it", "¯\\_(ツ)_/¯");
    setElementContent("loading", "Error getting temperatures");
    return false;
  }
  const json = await response.json();

  return parseFloat(json.main.temp);
};

const getElementById = eleId => {
  return document.getElementById(eleId);
};

const setElementContent = (eleId, content) => {
  getElementById(eleId).innerHTML = content;
};

const toggleElementVisible = (eleId, isVisible) => {
  getElementById(eleId).hidden = !isVisible;
};

const verdictText = (anchorageTemp, compareTemp) => {
  if (anchorageTemp > compareTemp) {
    return "YUP";
  }

  if (anchorageTemp > compareTemp - 5) {
    return "ALMOST";
  }

  return "NOPE";
};

let anchorageTemp;

// page load
(async () => {
  if ("geolocation" in navigator) {
    const localCompare = getElementById("check-my-location");
    localCompare.onclick = browserLocationCompare;
  } else {
    toggleElementVisible("browser-location", false);
  }

  const chicagoTemp = await getTemp(41.8369, -87.6847);
  anchorageTemp = await getTemp(61.2175, -149.8584);

  if (chicagoTemp && anchorageTemp) {
    getElementById("well-is-it").className = "";
    toggleElementVisible("loading", false);

    setElementContent("well-is-it", verdictText(anchorageTemp, chicagoTemp));
    setElementContent("chicagoTemp", chicagoTemp);
    setElementContent("anchorageTemp", anchorageTemp);

    toggleElementVisible("chicago", true);
    toggleElementVisible("anchorage", true);
  }
})();

function browserLocationCompare() {
  const success = async position => {
    const browserLat = position.coords.latitude.toFixed(6);
    const browserLong = position.coords.longitude.toFixed(6);
    const locationTemp = await getTemp(browserLat, browserLong);

    setElementContent("location-header", `Is ${browserLat}, ${browserLong} colder than Anchorage??`);
    setElementContent("location-is-it", verdictText(anchorageTemp, locationTemp));
    setElementContent("location-temp", locationTemp);
    toggleElementVisible("location", true);
  };

  const error = () => {
    setElementContent("location-header", "Unable to retrieve your location");
  };

  setElementContent("location-header", "Checking...");

  navigator.geolocation.getCurrentPosition(success, error);
}
