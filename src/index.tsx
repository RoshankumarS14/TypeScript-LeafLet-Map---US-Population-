import { Streamlit } from "./streamlit"
import * as L from "leaflet"
import "leaflet/dist/leaflet.css"
// Import the Leaflet.draw CSS and JS files
import "leaflet-draw/dist/leaflet.draw.css"
import "leaflet-draw/dist/leaflet.draw.js"

const map = document.createElement("div")
map.style.height = "500px"
map.setAttribute("id", "mapid")
document.body.appendChild(map)
const mymap = L.map("mapid").setView([37.8, -96], 4)

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '© Access AI',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "use.your.mapbox.token",
  }
).addTo(mymap)

// Create a new L.Control.Draw object and add it to the map
const drawControl = new L.Control.Draw({
  // Specify the options for the drawing tools
  draw: {
    // Disable the other drawing tools
    polyline: false,
    polygon: false,
    rectangle: false,
    marker: false,
    // Enable the circle tool and customize its style
    circle: {
      shapeOptions: {
        color: "blue",
        weight: 3,
        fill: true,
        fillColor: "lightblue",
        fillOpacity: 0.5
      }
    }
  }
})
mymap.addControl(drawControl)

// Add an event listener for the draw:created event
mymap.on("draw:created", function (e: any) {
  // Get the layer that was created by the drawing tool
  const layer = e.layer
  // Add the layer to the map
  mymap.addLayer(layer)
  // Get the center and radius of the circle
  const center = layer.getLatLng()
  const radius = layer.getRadius()
  // Show a popup with the circle information
  L.popup()
    .setLatLng(center)
    .setContent("You drew a circle with center " + center.toString() + " and radius " + radius + " meters")
    .openOn(mymap)
  // Send the circle information to Streamlit
  Streamlit.setComponentValue({center, radius})
  Streamlit.setFrameHeight()
})

function onMapClick(e: any) {
  L.popup()
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap)
  Streamlit.setComponentValue(e.latlng)
  Streamlit.setFrameHeight()
}
mymap.on("click", onMapClick)

function onRender(event: Event): void {
  Streamlit.setFrameHeight()
}
Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender)

Streamlit.setComponentReady()
Streamlit.setFrameHeight()
