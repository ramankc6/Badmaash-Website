<script>
  import { onMount } from "svelte";
  import loadGoogleMapsApi from "load-google-maps-api";

  let map;

  onMount(async () => {
    const googleMaps = await loadGoogleMapsApi({ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY });
    const mapContainer = document.getElementById("map");

    const badmaashLocation = { lat: 34.051010, lng: -118.245026 };

    map = new googleMaps.Map(mapContainer, {
      center: badmaashLocation,
      zoom: 16,
    });

    const marker = new googleMaps.Marker({
      position: badmaashLocation,
      map,
      title: "Badmaash - 108 W. 2nd Street, Downtown Los Angeles",
    });
  });
</script>

<style>
  #map {
    width: 100%;
    height: 300px;
  }
</style>

<div id="map"></div>
