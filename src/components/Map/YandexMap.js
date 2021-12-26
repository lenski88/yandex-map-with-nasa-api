import { YMaps, Map, ZoomControl,Placemark } from "react-yandex-maps";
import { StyledMap } from "../styled/YandexMap.styled";


const mapData = {
  center: [50, 0],
  zoom: 1,
};

const optionsMap = {
  restrictMapArea: [
    [85.23618, -178.9],
    [-73.87011, 181],
  ],
  suppressMapOpenBlock: true,
  avoidFractionalZoom: false,
};

const optionsZoom = {
  size: "small",
  position: {
    bottom: 10,
    left: 10,
  },
};


export const YandexMap = ({selectedEvents}) => (
  <>
  {console.log(selectedEvents)}
  <StyledMap>
    <YMaps>
      <Map
        defaultState={mapData}
        options={optionsMap}
        width="100%"
        height="100%"
      >
       {selectedEvents && selectedEvents.map(item=> {
          return <Placemark key={item} geometry={[item[1],item[0]]}/>
        })}
        <ZoomControl options={optionsZoom} />
      </Map>
    </YMaps>
  </StyledMap>
  </>
);
