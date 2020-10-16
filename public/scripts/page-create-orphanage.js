const map = L.map("mapid").setView([-3.7899266, -38.5889876], 14);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // Sending info to http protocol
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remove icon
  marker && map.removeLayer(marker);

  // Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add photos field
function addPhotoField() {
  // Get photo container #images
  const container = document.querySelector("#images");

  // Get container to double .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Clone last added image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Check if input is empty, if true do not add to photo container
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    alert("Insira um link válido");
    return;
  }

  // Clean input field before add image to newFieldContainer
  input.value = "";

  // Add clone to images container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  //deletar o campo clicado
  span.parentNode.remove();
}

// Selecionar Yes or no
function toggleSelect(event) {
    
    // Retirar a classe active dos botões
    document.querySelectorAll('.button-select button').forEach( button => button.classList.remove('active'))

    //Buscar o botão clicado
    const button = event.currentTarget

    // Colocar a classe active no botão clicado
    button.classList.add('active')

    //Atualizar input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    // Verificar se sim ou não (1 = sim / 2 = nao)
    input.value = button.dataset.value
} 
