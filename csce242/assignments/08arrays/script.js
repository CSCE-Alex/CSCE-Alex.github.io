// Destination data 
const MOUNTAINS = {
    'Asheville': 'https://www.openstreetmap.org/export/embed.html?bbox=-82.60,35.54,-82.50,35.62&layer=mapnik',
    'Boone': 'https://www.openstreetmap.org/export/embed.html?bbox=-81.72,36.18,-81.62,36.25&layer=mapnik',
    'Hot Springs': 'https://www.openstreetmap.org/export/embed.html?bbox=-82.86,35.86,-82.78,35.92&layer=mapnik',
    'Table Rock': 'https://www.openstreetmap.org/export/embed.html?bbox=-82.73,35.02,-82.65,35.08&layer=mapnik'
};

const BEACHES = {
    'Myrtle Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-78.93,33.65,-78.83,33.72&layer=mapnik',
    'Charleston': 'https://www.openstreetmap.org/export/embed.html?bbox=-79.98,32.75,-79.88,32.82&layer=mapnik',
    'Hilton Head': 'https://www.openstreetmap.org/export/embed.html?bbox=-80.78,32.12,-80.68,32.22&layer=mapnik',
    'Folly Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-79.98,32.62,-79.88,32.68&layer=mapnik'
};
 
const getDestinationsForType = (type) => {
    if (type === 'mountains') return MOUNTAINS;
    if (type === 'beaches') return BEACHES;
    return null;
};
 
const createDestinationLink = (name, mapUrl, onSelect) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
 
    link.textContent = name;
    link.href = '#';
    link.addEventListener('click', (event) => {
        event.preventDefault();
        onSelect(mapUrl);
    });
 
    item.appendChild(link);
    return item;
};

const loadDestinationLinks = (destinations, listEl, onSelect) => {
    listEl.innerHTML = '';
 
    for (const name in destinations) {
        const item = createDestinationLink(name, destinations[name], onSelect);
        listEl.appendChild(item);
    }
};
 
// live map for destination
const showMap = (mapUrl, mapContainer) => {
    mapContainer.innerHTML = '';
 
    const iframe = document.createElement('iframe');
    iframe.src = mapUrl;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
 
    mapContainer.appendChild(iframe);
};
 
document.addEventListener('DOMContentLoaded', () => {
    const typeSelect = document.getElementById('destinationType');
    const destinationList = document.getElementById('destinationList');
    const mapContainer = document.getElementById('mapContainer');
 
    typeSelect.addEventListener('change', () => {
        const destinations = getDestinationsForType(typeSelect.value);
 
        destinationList.innerHTML = '';
        mapContainer.innerHTML = '';
 
        if (!destinations) return;
 
        loadDestinationLinks(destinations, destinationList, (mapUrl) => {
            showMap(mapUrl, mapContainer);
        });
    });
});