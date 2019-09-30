const chicago = { lat: 41.878114, lng: -87.629798, city: "Chicago, IL", content: "Current residence" };
const destinations = [
  { lat: 27.739783, lng: -82.752435, city: "St. Pete Beach, FL", visit: ["October 2011", "May 2008"] },
  { lat: 29.959882, lng: -90.067956, city: "New Orleans, LA", visit: ["October 2017"] },
  { lat: 29.424122, lng: -98.493628, city: "San Antonio, TX", visit: ["February 2018", "February 2016", "April 2014"] },
  { lat: 30.267153, lng: -97.743061, city: "Austin, TX", visit: ["February 2018", "April 2014"] },
  { lat: 34.052234, lng: -118.243685, city: "Los Angeles, CA", visit: ["October 2012"] },
  { lat: 35.142753, lng: -120.641283, city: "Pismo Beach, CA", visit: ["October 2012"] },
  { lat: 36.555239, lng: -121.923288, city: "Carmel, CA", visit: ["October 2012"] },
  { lat: 37.774929, lng: -122.419416, city: "San Fransisco, CA", visit: ["October 2012"] },
  { lat: 36.110524, lng: -115.172896, city: "Las Vegas, NV", visit: ["April 2013", "May 2010"] },
  { lat: 45.523062, lng: -122.676482, city: "Portland, OR", visit: ["July 2015"] },
  { lat: 44.012122, lng: -92.480199, city: "Rochester, MN", visit: ["June 2015"] },
  { lat: 42.416674, lng: -90.429017, city: "Galena, IL", visit: ["August 2010"] },
  {
    lat: 45.822448,
    lng: -91.889343,
    city: "Spooner, WI",
    visit: ["June 2019", "May 2019", "July 2018", "August 2017", "June 2017"]
  },
  { lat: 43.038902, lng: -87.906474, city: "Milwaukee, WI", visit: ["April 2012"] },
  { lat: 39.768403, lng: -86.158068, city: "Indianapolis, IN", visit: ["2009"] },
  { lat: 42.331427, lng: -83.045754, city: "Detroit, MI", visit: ["April 2012"] },
  { lat: 43.086818, lng: -79.066544, city: "Niagara Falls, NY", visit: ["April 2012"] },
  { lat: 43.156578, lng: -77.608847, city: "Rochester, NY", visit: ["April 2012"] },
  { lat: 38.907192, lng: -77.036871, city: "Washington, DC", visit: ["October 2013"] },
  { lat: 39.739236, lng: -104.990251, city: "Denver, CO", visit: ["May 2015"] },
  { lat: 41.902783, lng: 12.496366, city: "Rome, Italy", visit: ["October 2014"] },
  { lat: 43.76956, lng: 11.255814, city: "Florence, Italy", visit: ["October 2014"] },
  { lat: 45.440847, lng: 12.315515, city: "Venice, Italy", visit: ["October 2014"] },
  { lat: 40.416775, lng: -3.70379, city: "Madrid, Spain", visit: ["May 2018"] },
  { lat: 39.862832, lng: -4.027323, city: "Toledo, Spain", visit: ["May 2018"] },
  { lat: 41.385064, lng: 2.173403, city: "Barcelona, Spain", visit: ["May 2018"] },
  { lat: 37.389092, lng: -5.984459, city: "Seville, Spain", visit: ["May 2018"] },
  { lat: 26.122439, lng: -80.137317, city: "Fort Lauderdale, FL", visit: ["November 2016"] },
  { lat: 38.627003, lng: -90.199404, city: "St. Louis, MO", visit: ["July 2009"] },
  { lat: 38.955603, lng: -90.186776, city: "Godfrey, IL", visit: ["July 2018"] },
  { lat: 36.685863, lng: -93.330578, city: "West Branson, MO", visit: ["July 2018"] },
  { lat: 43.64535, lng: -79.380215, city: "Toronto, Ontario, Canada", visit: ["October 2018"] },
  { lat: 28.47521, lng: -81.47493, city: "Orlando, FL", visit: ["January 2019"] },
  { lat: 21.306944, lng: -157.858337, city: "Honolulu, HI", visit: ["August 2019"] },
  { lat: 20.92269, lng: -156.69296, city: "Kaanapali, HI", visit: ["August 2019"] },
  { lat: 39.9563, lng: -83.0041, city: "Columbus, OH", visit: ["September 2019"] }
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: window.matchMedia("(min-width: 420px)").matches ? { lat: 39.594096, lng: -52.767187 } : chicago
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
      content: `<div>${dest.city}</div>${dest.visit.map(visit => `<div>${visit}</div>`).join("")}`
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
}

const frequented = () => {
  const frequentEle = document.getElementById("frequent");
  destinations
    .filter(d => d.visit.length > 1)
    .sort((curr, next) => {
      if (curr.visit.length < next.visit.length || (curr.visit.length == next.visit.length && curr.city > next.city)) {
        return 1;
      }
      if (curr.visit.length > next.visit.length || (curr.visit.length == next.visit.length && curr.city < next.city)) {
        return -1;
      }

      return 0;
    })
    .map(dest => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${dest.city} - Visited <em>${dest.visit.length}</em> times`;
      frequentEle.appendChild(listItem);
    });
};

const furthest = () => {
  const furthestEle = document.getElementById("furthest");
  // algorithm taken from https://stackoverflow.com/a/27943/282110
  const deg2rad = deg => deg * (Math.PI / 180);

  const getDistance = ({ lat, lng }) => {
    const dLat = deg2rad(lat - chicago.lat);
    const dLon = deg2rad(lng - chicago.lng);
    const hav =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(chicago.lat)) * Math.cos(deg2rad(lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
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

  furthestEle.innerHTML = `${furthestByDistance.city} at ${furthestByDistance.distance.toFixed(2)} miles from ${
    chicago.city
  }`;
};

frequented();
furthest();
