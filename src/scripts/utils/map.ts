import type { MapConfig } from "@scripts/types/contact";
import L, { type MarkerOptions, type PopupOptions } from "leaflet";

export const createMapInstance = (mapContainerId: string, mapOptions: MapConfig): L.Map => {
    const mapContainer = document.getElementById(mapContainerId) as HTMLElement;
    const map = L.map(mapContainer).setView([mapOptions.lat, mapOptions.lng], mapOptions.zoom);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: mapOptions.maxZoom,
        minZoom: mapOptions.minZoom,
        crossOrigin: true,
        noWrap: false,
    }).addTo(map);

    return map;
};

export const addMarkerToMap = (map: L.Map, mapOptions: MapConfig, markerOptions: MarkerOptions): L.Marker => {
    const marker = L.marker([mapOptions.lat, mapOptions.lng], {
        icon: L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
        }),
        ...markerOptions,
    }).addTo(map);

    return marker;
};

export const addPopupToMap = (map: L.Map, mapOptions: MapConfig, popupOptions: PopupOptions): L.Popup => {
    const popup = L.popup(popupOptions).setLatLng([mapOptions.lat, mapOptions.lng]);

    popup.openOn(map);

    return popup;
};
