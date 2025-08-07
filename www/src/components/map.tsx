import { useEffect } from 'react';
import L from 'leaflet';

export default function Map() {
    useEffect(() => {
        const map = L.map('map', {
            crs: L.CRS.Simple,
            center: [0, 0],
            attributionControl: false,
            markerZoomAnimation: true,
            doubleClickZoom: false,
            zoomControl: false,
        }).setView([0, 0], 3, {
            animate: true,
        });

        L.tileLayer('https://squaremap-demo.jpenilla.xyz/tiles/world/{z}/{x}_{y}.png', {
            maxNativeZoom: 3,
            minNativeZoom: 0,
            maxZoom: (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement) ? 3 : 6,
            minZoom: 0,
            tileSize: 512,
            detectRetina: true,
            className: "rendering-pixelated rendering-crisp-edges"
        }).addTo(map);

        L.marker([0, 0], {
            icon: L.icon({
                iconUrl: "/images/icon/spawn.png"
            })
        }).addTo(map);

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div id="map" style={{ height: '100%', width: '100%' }} />
    );
}
