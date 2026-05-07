const map = new maplibregl.Map({
  container: 'map',

  style: {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: [
          'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
        ],
        tileSize: 256,
        attribution: '© OpenStreetMap'
      }
    },

    layers: [
      {
        id: 'osm',
        type: 'raster',
        source: 'osm'
      }
    ]
  },

  center: [-2.935, 43.263],
  zoom: 16,
  pitch: 65,
  bearing: -20
});

map.addControl(new maplibregl.NavigationControl());

map.on('load', () => {

  map.addSource('buildings', {
    type: 'vector',
    url: 'https://demotiles.maplibre.org/tiles/tiles.json'
  });

});
