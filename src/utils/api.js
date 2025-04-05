const baseUrl = "http://localhost:3001";

function _checkResponse(res) {
  if (!res.ok) {
    Promise.reject(`Error ${res.status}`);
  }
  return res.json();
}

function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(_checkResponse)
    .catch((error) => console.error("Error fetching items:", error));
}

export { getItems };
