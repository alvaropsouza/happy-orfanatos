const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-3.7899266, -38.5889876], 14);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([-3.7899266, -38.5889876], { icon }).addTo(map);

// Image gallery

function selectImage(event) {
  button = event.currentTarget;

  // Remove all active classes
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  // Select clicked image
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // Update image container
  imageContainer.src = image.src;

  // Add .active class to the clicked button
  button.classList.add("active");
}
