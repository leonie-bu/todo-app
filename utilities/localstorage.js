// Function to get something from local storage (parse)

export function parseJSONFromLocalStorage(key, defaultValue) {
  const json = JSON.parse(localStorage.getItem(key));

  if (!json) {
    return defaultValue;
  }

  return json;
}

// Function to put/set something onto the local storage (stringify)

export function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
