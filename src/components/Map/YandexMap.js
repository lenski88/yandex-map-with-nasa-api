import { YMaps, Map, ZoomControl, Placemark } from "react-yandex-maps";
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

const optionsPlacemark = {
  preset: "islands#redCircleDotIcon",
};

export const YandexMap = ({ selectedEvents, coordsSelectedEvents }) => (
  <StyledMap>
    <YMaps>
      <Map
        defaultState={mapData}
        options={optionsMap}
        width="100%"
        height="100%"
      >
        {selectedEvents &&
          coordsSelectedEvents.map((item, index) => {
            return (
              <Placemark
                key={item}
                geometry={[item[1], item[0]]}
                options={optionsPlacemark}
                properties={{
                  hintContent: `${selectedEvents[index].title}   
                    Coordinates: [${item[1]}, ${item[0]}]`,
                    balloonContentHeader:  `<span>${selectedEvents[index].title}</span>`,
                    balloonContentBody:  `<span>Coordinates:[${item[1]}, ${item[0]}]</span><br/>` +
                    `<a target="_blank" href='${selectedEvents[index].sources[0].url}'>More information</a> <br/>`,
                  balloonContentFooter: "Information provided:<br/>EONET",
                }}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              />
            );
          })}
        <ZoomControl options={optionsZoom} />
      </Map>
    </YMaps>
  </StyledMap>
);
