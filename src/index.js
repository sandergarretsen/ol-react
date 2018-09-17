import proj from 'ol/proj';
// import extent from 'ol/extent';

export { default as Map } from './components/Map.jsx';
export { default as View } from './components/View.jsx';
export { default as Feature } from './components/Feature.jsx';

export { default as TileLayer } from './components/layers/Tile.jsx';
export { default as VectorLayer } from './components/layers/Vector.jsx';
export { default as ImageLayer } from './components/layers/Image.jsx';

export { default as BingMapsSource } from './components/sources/BingMaps.jsx';
export { default as VectorSource } from './components/sources/Vector.jsx';
export { default as ImageCanvasSource } from './components/sources/ImageCanvas.jsx';

export { default as Point } from './components/geom/Point.jsx';
export { default as LineString } from './components/geom/LineString.jsx';
export { default as MultiLineString } from './components/geom/MultiLineString.jsx';
export { default as MultiPoint } from './components/geom/MultiPoint.jsx';

export const { fromLonLat } = proj;
export { default as extent } from 'ol/extent';
