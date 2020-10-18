const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Creating map
const map = L.map('mapid', options).setView([lat, lng], 15);


// Adding a tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Creating Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})


// Adding a marker

L.marker([lat, lng], { icon })
    .addTo(map)


/* image */
function selectImage(event) {
    const button = event.currentTarget

    // remove all .active classes 
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }
    // select a image clicked
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img')

    // att image container
    imageContainer.src = image.src
    
    // add .active class for this button 
    button.classList.add('active');


}