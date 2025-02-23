mapboxgl.accessToken = 'pk.eyJ1IjoiYTV2ZXJtYSIsImEiOiJjbTdnc3llN3UwZ3l0MndweXdjMTRwaWg5In0.O1zsVoMku-AaGIkbG77nVQ';

   // Initialize the map
const map = new mapboxgl.Map({
    container: 'map', // ID of the div where the map will render
    style: 'mapbox://styles/mapbox/streets-v11', // Map style
    center: [-71.09415, 42.36027], // [longitude, latitude]
    zoom: 12, // Initial zoom level
    minZoom: 5, // Minimum allowed zoom
    maxZoom: 18 // Maximum allowed zoom
});

map.on('load', () => { 
        map.addSource('boston_route', {
            type: 'geojson',
            data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson?...'
        })
        map.addSource('boston_route', {
            type: 'geojson',
            data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson?...'
        })})
    .addLayer({
        id: 'bike-lanes',
        type: 'line',
        source: 'boston_route',
        paint: {
          'line-color': 'green',
          'line-width': 3,
          'line-opacity': 0.4
        }
      });
;