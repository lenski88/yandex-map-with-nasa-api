import { YMaps, Map, ZoomControl } from "react-yandex-maps";

const mapData = {
  center: [28.46824, -16.25462],
  zoom: 8.5,
};

const optionsMap = {
  restrictMapArea: [
    [85.23618, -178.9],
    [-73.87011, 181],
  ],
  suppressMapOpenBlock: true,
  avoidFractionalZoom: false,
};

const optionsZoom={
    size:'small',
    position: {
        bottom:10,
        left:10
    }
}

export const YandexMap = () => (
  <div className="map">
    <YMaps>
      <Map
        defaultState={mapData}
        options={optionsMap}
        width="100%"
        height="100%"
      >
      <ZoomControl options={optionsZoom}/>    
      </Map>
    </YMaps>
  </div>
);
