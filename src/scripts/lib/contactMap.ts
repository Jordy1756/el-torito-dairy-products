import type { MapConfig } from "@scripts/types/contact";
import { addMarkerToMap, addPopupToMap, createMapInstance } from "@scripts/utils/map";
import type { MarkerOptions, PopupOptions } from "leaflet";

(() => {
  try {
    const GOOGLE_MAP_LINK =
      "https://www.google.com/maps/place/Planta+L%C3%A1cteos+El+Torito/@9.9909848,-83.6984677,557m/data=!3m1!1e3!4m6!3m5!1s0x8fa0d176a388655f:0xcc5ba0955c7d9442!8m2!3d9.9911368!4d-83.6981244!16s%2Fg%2F11ht3f8k8j?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

    const mapOptions: MapConfig = {
      lat: 9.9911368,
      lng: -83.6981244,
      zoom: 15,
      minZoom: 7,
      maxZoom: 19,
    };

    const markerOptions: MarkerOptions = {
      title: "Planta Lácteos El Torito",
      alt: "Ubicación de Planta Lácteos El Torito en el mapa",
      riseOnHover: true,
    };

    const popupOptions: PopupOptions = {
      closeButton: false,
      autoClose: false,
      closeOnClick: false,
      content: "<p>Planta Lácteos El Torito</p>",
      className: "custom__popup",
      maxWidth: 250,
      offset: [0, -20],
    };

    const map = createMapInstance("contact-us-map", mapOptions);
    const marker = addMarkerToMap(map, mapOptions, markerOptions);
    addPopupToMap(map, mapOptions, popupOptions);

    marker.on("click", () => window.open(GOOGLE_MAP_LINK, "_blank"));

    return map;
  } catch (error) {
    console.error("[Map Error] Error al inicializar el mapa:", error);
  }
})();
