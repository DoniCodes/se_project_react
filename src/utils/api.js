import { checkResponse } from "./weatherApi";

const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(checkResponse)
    .catch((error) => console.error("Error fetching items:", error));
}

function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}
function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem };
