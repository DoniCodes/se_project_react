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

function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then(_checkResponse)
    .catch((error) => console.error("Error adding item:", error));
}
function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  })
    .then(_checkResponse)
    .catch((error) => console.error("Error deleting item:", error));
}

export { getItems, addItem, deleteItem };
