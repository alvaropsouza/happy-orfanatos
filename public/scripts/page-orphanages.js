const map = L.map('mapid').setView([-3.7899266,-38.5889876], 14);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon

L.marker([-3.7899266,-38.5889876]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();