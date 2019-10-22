import tt from './maps.min';


const map = tt.map({
    key: 'pkwmphAa6FpNfsMxpKhEwvJwjCLDeMFG',
    container: 'map',
    style: 'tomtom://vector/1/basic-main',
    center: [-117.98, 35.118],
    zoom: 14,
    minZoom: 5,
    maxZoom: 20
});



let popup = new tt.Popup({ className: 'map-popup' })
    .setLngLat({ lng: -117.98, lat: 35.12 })
    .setHTML("<h1>Shopno LLC</h1><p>4350 Westown Pkwy, West Des MoinesIA 50266, USA</p> <p>+156456 54546</p>")
    .addTo(map);