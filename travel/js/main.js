const chicago = {
  lat: 41.878114,
  lng: -87.629798,
  city: "Chicago, IL",
  content: "Current residence"
};

const getTravels = async () => {
  const response = await fetch("https://api.jimsegal.com/travel")
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Error getting travels. Returned ${response.statusText}`
        );
      }
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });

  return await response.json();
};

async function initMap() {
  destinations = await getTravels();

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: window.matchMedia("(min-width: 420px)").matches
      ? { lat: 39.594096, lng: -52.767187 }
      : chicago
  });

  let activeInfoWindow = null;
  const markerClick = (marker, infoWindow) => {
    marker.addListener("click", function() {
      activeInfoWindow && activeInfoWindow.close();
      infoWindow.open(map, marker);
      activeInfoWindow = infoWindow;
    });
  };

  destinations.forEach(dest => {
    const destInfo = new google.maps.InfoWindow({
      content: `<div>${dest.city}</div>${dest.visits
        .map(visit => `<div>${visit}</div>`)
        .join("")}`
    });

    const marker = new google.maps.Marker({
      position: dest,
      map,
      title: dest.city
    });

    markerClick(marker, destInfo);
  });

  const chicagoInfo = new google.maps.InfoWindow({
    content: `<div>${chicago.city}</div><div>${chicago.content}</div>`
  });

  const chicagoMarker = new google.maps.Marker({
    position: chicago,
    map,
    title: chicago.city,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      strokeColor: "green",
      scale: 8
    }
  });

  markerClick(chicagoMarker, chicagoInfo);

  frequented(destinations);
  furthest(destinations);
}

const frequented = destinations => {
  const frequentEle = document.getElementById("frequent");
  destinations
    .filter(d => d.visits.length > 1)
    .sort((curr, next) => {
      if (
        curr.visits.length < next.visits.length ||
        (curr.visits.length == next.visits.length && curr.city > next.city)
      ) {
        return 1;
      }
      if (
        curr.visits.length > next.visits.length ||
        (curr.visits.length == next.visits.length && curr.city < next.city)
      ) {
        return -1;
      }

      return 0;
    })
    .map(dest => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${dest.city} - Visited <em>${dest.visits.length}</em> times`;
      frequentEle.appendChild(listItem);
    });
};

const furthest = destinations => {
  const furthestEle = document.getElementById("furthest");
  // algorithm taken from https://stackoverflow.com/a/27943/282110
  const deg2rad = deg => deg * (Math.PI / 180);

  const getDistance = ({ lat, lng }) => {
    const dLat = deg2rad(lat - chicago.lat);
    const dLon = deg2rad(lng - chicago.lng);
    const hav =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(chicago.lat)) *
        Math.cos(deg2rad(lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const angleRadians = 2 * Math.atan2(Math.sqrt(hav), Math.sqrt(1 - hav));
    return 3961 * angleRadians; // 3961 is the radius of the earth in miles
  };

  const furthestByDistance = destinations
    .map(dest => {
      return {
        ...dest,
        distance: getDistance(dest)
      };
    })
    .reduce((curr, next) => (curr.distance > next.distance ? curr : next));

  furthestEle.innerHTML = `${
    furthestByDistance.city
  } at ${furthestByDistance.distance.toFixed(2)} miles from ${chicago.city}`;
};
