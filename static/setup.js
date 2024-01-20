const initialSetup = (types) => {
  let currType = new URLSearchParams(window.location.search).get("type");
  currType = types.find((type) => type.toLowerCase() === currType);

  if (!currType)
    window.location.href = `/?${new URLSearchParams({
      type: types[0].toLowerCase(),
    })}`;

  let primaryColor = "";

  switch (currType) {
    case types[0]:
      primaryColor = "#EAB308";
      break;
    case types[1]:
      primaryColor = "#F97316";
      break;
    case types[2]:
      primaryColor = "#3B82F6";
      break;
    case types[3]:
      primaryColor = "#EF4444";
      break;
  }

  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: primaryColor,
        },
      },
    },
  };

  document.getElementById("type").innerText = currType;
  document.getElementById("output").innerText = "";

  types.forEach((type) => {
    if (type !== currType) {
      document.getElementById(type.toLowerCase()).style.display = "none";
    }
  });

  return currType;
};

const isNull = (array) => {
  return array.map((param)=> !param).includes(true)
};

const showPrediction = (message) => {
  document.getElementById("output").innerText = message;
};

const getPrediction = async (type, params) => {
  const response = await fetch(
    `/${type.toLowerCase()}?${new URLSearchParams(params)}`
  );
  const { success, message, prediction } = await response.json();
  if (success) {
    return prediction;
  } else {
    throw message;
  }
};
