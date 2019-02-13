## Quickstart

`npm install --save react react-dom ol ol-react`

```
  import React from 'react';
  import { render } from 'react-dom';

  import {
    Map,
    View,
    TileLayer,
    BingMapsSource,
    VectorLayer,
    VectorSource,
    Feature,
    Point,
    fromLonLat,
  } from 'ol-react';

  const places = [
    { name: "home", lat: 53.2019357, lon: 6.49956 },
    { name: "work", lat: 53.2004404, lon: 6.6380391 },
  ];

  render(
    <Map>
      <View extent={extent} />
      <TileLayer>
        <BingMapsSource
          apiKey="bingKey"
          imagerySet="CanvasLight"
        />
      </TileLayer>
      <VectorLayer>
        <VectorSource>
          {places.map(p => (
            <Feature key={p.name}>
              <Point
                coordinates={fromLonLat([p.lon, p.lat])}
              />
            </Feature>
          ))}
        </VectorSource>
      </VectorLayer>
    </Map>,
    document.getElementById('app'),
  );
```
