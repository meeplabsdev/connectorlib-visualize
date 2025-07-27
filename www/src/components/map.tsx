import { useEffect } from 'react';
import L from 'leaflet';

export default function Map() {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 12, {
            animate: true,
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 12,
            minZoom: 2,
            tileSize: 256,
        }).addTo(map);

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div id="map" style={{ height: '100%', width: '100%' }} />
    );
}
