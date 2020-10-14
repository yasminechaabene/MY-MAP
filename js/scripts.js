window.onload = function(){
    let mymap = L.map('carte').setView([36.6867867,10.290113100000001], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'MY MAP',
        minZoom: 1,
        maxZoom: 20
    }).addTo(mymap)
    L.Routing.control({
        //lineOptions: {
           // styles: [{color: '#ff8f01', opacity: 1, weight: 5}] //to customize the polyline
       // },
       // router: new L.Routing.osrmv1({
           // profile: 'car', // car, bike, foot
        //}),
        geocoder: L.Control.Geocoder.nominatim()
    }).addTo(mymap)
    
}
