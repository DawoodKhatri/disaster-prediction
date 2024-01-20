const types = ["Windstorm", "Landslide", "Flood", "Earthquake"];
const type = initialSetup(types);

const predictBtn = document.getElementById("predict");

const API_KEY = "";

const handleWindstormPrediction = () => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      ).then((res) =>
        res
          .json()
          .then(({ main: { temp, humidity, pressure }, wind: { deg } }) => {
            document.getElementById(`${type.toLowerCase()}_temperature`).value =
              temp;
            document.getElementById(
              `${type.toLowerCase()}_relative_humidity`
            ).value = humidity;
            document.getElementById(`${type.toLowerCase()}_pressure`).value =
              pressure;
            document.getElementById(
              `${type.toLowerCase()}_wind_direction`
            ).value = deg;
          })
      );
    },
    (error) => {},
    { enableHighAccuracy: true }
  );

  predictBtn.addEventListener("click", () => {
    const [
      temperature,
      relativeHumidity,
      pressure,
      windDirection,
      precipitation,
      windGustSpeed,
    ] = [
      document.getElementById(`${type.toLowerCase()}_temperature`).value,
      document.getElementById(`${type.toLowerCase()}_relative_humidity`).value,
      document.getElementById(`${type.toLowerCase()}_pressure`).value,
      document.getElementById(`${type.toLowerCase()}_wind_direction`).value,
      document.getElementById(`${type.toLowerCase()}_precipitation`).value,
      document.getElementById(`${type.toLowerCase()}_wind_gust_speed`).value,
    ];

    if (
      isNull([
        temperature,
        relativeHumidity,
        pressure,
        windDirection,
        precipitation,
        windGustSpeed,
      ])
    ) {
      showPrediction("");
      alert("All fields are required");
    } else {
      getPrediction(type, {
        temperature,
        relativeHumidity,
        pressure,
        windDirection,
        precipitation,
        windGustSpeed,
      })
        .then((prediction) => {
          showPrediction(prediction);
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
};
const handleLandslidePrediction = () => {
  predictBtn.addEventListener("click", () => {
    const [height, slope, rainfall, historicalPrecipitation] = [
      document.getElementById(`${type.toLowerCase()}_height`).value,
      document.getElementById(`${type.toLowerCase()}_slope`).value,
      document.getElementById(`${type.toLowerCase()}_rainfall`).value,
      document.getElementById(`${type.toLowerCase()}_historical_precipitation`)
        .value,
    ];

    if (isNull([height, slope, rainfall, historicalPrecipitation])) {
      showPrediction("");
      alert("All fields are required");
    } else {
      getPrediction(type, {
        height,
        slope,
        rainfall,
        historicalPrecipitation,
      })
        .then((prediction) => {
          showPrediction(prediction);
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
};
const handleFloodPrediction = () => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      ).then((res) =>
        res
          .json()
          .then(
            ({ main: { temp_max, temp_min, humidity }, wind: { speed } }) => {
              document.getElementById(
                `${type.toLowerCase()}_max_temperature`
              ).value = temp_max;
              document.getElementById(
                `${type.toLowerCase()}_min_temperature`
              ).value = temp_min;
              document.getElementById(
                `${type.toLowerCase()}_relative_humidity`
              ).value = humidity;
              document.getElementById(
                `${type.toLowerCase()}_wind_speed`
              ).value = speed;

              document.getElementById(`${type.toLowerCase()}_latitude`).value =
                latitude;
              document.getElementById(`${type.toLowerCase()}_longitude`).value =
                longitude;
            }
          )
      );
    },
    (error) => {},
    { enableHighAccuracy: true }
  );

  predictBtn.addEventListener("click", () => {
    const [
      maxTemperature,
      minTemperature,
      rainfall,
      relativeHumidity,
      windSpeed,
      cloudCoverage,
      brightSunshine,
      latitude,
      longitude,
      altitude,
    ] = [
      document.getElementById(`${type.toLowerCase()}_max_temperature`).value,
      document.getElementById(`${type.toLowerCase()}_min_temperature`).value,
      document.getElementById(`${type.toLowerCase()}_rainfall`).value,
      document.getElementById(`${type.toLowerCase()}_relative_humidity`).value,
      document.getElementById(`${type.toLowerCase()}_wind_speed`).value,
      document.getElementById(`${type.toLowerCase()}_cloud_coverage`).value,
      document.getElementById(`${type.toLowerCase()}_bright_sunshine`).value,
      document.getElementById(`${type.toLowerCase()}_latitude`).value,
      document.getElementById(`${type.toLowerCase()}_longitude`).value,
      document.getElementById(`${type.toLowerCase()}_altitude`).value,
    ];

    if (
      isNull([
        maxTemperature,
        minTemperature,
        rainfall,
        relativeHumidity,
        windSpeed,
        cloudCoverage,
        brightSunshine,
        latitude,
        longitude,
        altitude,
      ])
    ) {
      showPrediction("");
      alert("All fields are required");
    } else {
      getPrediction(type, {
        maxTemperature,
        minTemperature,
        rainfall,
        relativeHumidity,
        windSpeed,
        cloudCoverage,
        brightSunshine,
        latitude,
        longitude,
        altitude,
      })
        .then((prediction) => {
          showPrediction(prediction);
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
};

const handleEarthquakePrediction = () => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      console.log(latitude, longitude);
      document.getElementById(`${type.toLowerCase()}_latitude`).value =
        latitude;
      document.getElementById(`${type.toLowerCase()}_longitude`).value =
        longitude;
    },
    (error) => {},
    { enableHighAccuracy: true }
  );

  predictBtn.addEventListener("click", () => {
    const [latitude, longitude, depth] = [
      document.getElementById(`${type.toLowerCase()}_latitude`).value,
      document.getElementById(`${type.toLowerCase()}_longitude`).value,
      document.getElementById(`${type.toLowerCase()}_depth`).value,
    ];

    if (isNull([latitude, longitude, depth])) {
      showPrediction("");
      alert("All fields are required");
    } else {
      getPrediction(type, { latitude, longitude, depth })
        .then((prediction) => {
          showPrediction(prediction);
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
};

switch (type) {
  case types[0]:
    handleWindstormPrediction();
    break;
  case types[1]:
    handleLandslidePrediction();
    break;
  case types[2]:
    handleFloodPrediction();
    break;
  case types[3]:
    handleEarthquakePrediction();
    break;
}
