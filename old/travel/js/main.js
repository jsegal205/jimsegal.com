const chicago = {
  lat: 41.878114,
  lng: -87.629798,
  city: "Chicago, IL",
  content: "Current residence",
};

const apiFetch = async (url) => {
  const response = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error getting travels. Returned ${response.statusText}`
        );
      }
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return await response.json();
};

const getTravels = async () => {
  return await apiFetch("https://api.jimsegal.com/travel");
};

const getTravelFrequented = async () => {
  return await apiFetch("https://api.jimsegal.com/travel/frequented");
};

const getTravelFurthest = async () => {
  return await apiFetch("https://api.jimsegal.com/travel/furthest");
};

async function initMap() {
  destinations = await getTravels();

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: window.matchMedia("(min-width: 420px)").matches
      ? { lat: 39.594096, lng: -52.767187 }
      : chicago,
  });

  let activeInfoWindow = null;
  const markerClick = (marker, infoWindow) => {
    marker.addListener("click", function () {
      activeInfoWindow && activeInfoWindow.close();
      infoWindow.open(map, marker);
      activeInfoWindow = infoWindow;
    });
  };

  destinations.forEach((dest) => {
    const destInfo = new google.maps.InfoWindow({
      content: `<div>${dest.city}</div>${dest.visits
        .map((visit) => `<div>${visit}</div>`)
        .join("")}`,
    });

    const marker = new google.maps.Marker({
      position: dest,
      map,
      title: dest.city,
    });

    markerClick(marker, destInfo);
  });

  const chicagoInfo = new google.maps.InfoWindow({
    content: `<div>${chicago.city}</div><div>${chicago.content}</div>`,
  });

  const chicagoMarker = new google.maps.Marker({
    position: chicago,
    map,
    title: chicago.city,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      strokeColor: "green",
      scale: 8,
    },
  });

  markerClick(chicagoMarker, chicagoInfo);
}

const frequented = async () => {
  const frequentEle = document.getElementById("frequent");
  const destinations = await getTravelFrequented();

  destinations.map((dest) => {
    const { city, state, visitCount } = dest;
    const listItem = document.createElement("li");
    listItem.innerHTML = `${city}, ${state} - Visited <em>${visitCount}</em> times`;
    frequentEle.appendChild(listItem);
  });
};

const furthest = async () => {
  const furthestEle = document.getElementById("furthest");
  const furthestByDistance = await getTravelFurthest();

  furthestEle.innerHTML = `${furthestByDistance.city} ${
    furthestByDistance.country
  } at ${furthestByDistance.distance.toFixed(2)} miles from ${chicago.city}`;
};

frequented();
furthest();
