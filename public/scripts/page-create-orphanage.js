const map = L.map('mapid').setView([-3.7899266,-38.5889876], 14);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const long = event.latlng.lng;
    
})