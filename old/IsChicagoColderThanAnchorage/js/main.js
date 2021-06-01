const getTemperatures = async (lat, long, browserCompare = false) => {
  const response = await fetch(
    `https://api.jimsegal.com/isAnchorageColderThan/${lat}/${long}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Problem retrieving temperatures. Returned ${response.statusText}`
        );
      }
      return response;
    })
    .catch((error) => {
      if (browserCompare) {
        setElementContent(
          "location-header",
          "Error getting temperatures for your local address"
        );
      } else {
        getElementById("well-is-it").className = "error";
        setElementContent("well-is-it", "¯\\_(ツ)_/¯");
        setElementContent("loading", "Error getting temperatures");
      }
      throw new Error(error);
    });

  return await response.json();
};

const getElementById = (eleId) => {
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

(async () => {
  if ("geolocation" in navigator) {
    const localCompare = getElementById("check-my-location");
    localCompare.onclick = browserLocationCompare;
    toggleElementVisible("location-header", false);
  } else {
    toggleElementVisible("browser-location", false);
  }

  const temperatureResults = await getTemperatures(41.8369, -87.6847);

  if (temperatureResults) {
    getElementById("well-is-it").className = "";
    toggleElementVisible("loading", false);

    const {
      anchorageDetails: { temperature: anchorageTemp },
      compareDetails: { temperature: chicagoTemp },
    } = temperatureResults;

    setElementContent("well-is-it", verdictText(anchorageTemp, chicagoTemp));
    setElementContent("chicagoTemp", chicagoTemp);
    setElementContent("anchorageTemp", anchorageTemp);

    toggleElementVisible("chicago", true);
    toggleElementVisible("anchorage", true);
  }
})();

function browserLocationCompare() {
  toggleElementVisible("location-header", false);
  setElementContent("location-header", "");
  setElementContent("location-is-it", "");
  setElementContent("location-temp", "");
  const success = async (position) => {
    const browserLat = position.coords.latitude.toFixed(6);
    const browserLong = position.coords.longitude.toFixed(6);
    const temperatureResults = await getTemperatures(
      browserLat,
      browserLong,
      true
    );
    const {
      anchorageDetails: { temperature: anchorageTemp },
      compareDetails: {
        city: locationCity,
        state: locationState,
        temperature: locationTemp,
      },
    } = temperatureResults;
    const locationDesc = `${locationCity}, ${locationState}`;
    const verdict = verdictText(anchorageTemp, locationTemp);

    setElementContent(
      "location-header",
      `Is ${locationDesc} colder than Anchorage??`
    );
    setElementContent("location-is-it", verdict);
    setElementContent("location-temp", locationTemp);
    toggleElementVisible("location", true);

    gtag("event", `${locationDesc} - ${locationTemp} - Colder? ${verdict}`, {
      event_category: "localTempCompare",
    });
  };

  const error = () => {
    setElementContent(
      "location-header",
      "Unable to retrieve your location to compare temperatures to Anchorage"
    );
  };
  toggleElementVisible("location-header", true);
  setElementContent("location-header", "Checking...");

  navigator.geolocation.getCurrentPosition(success, error);
}
