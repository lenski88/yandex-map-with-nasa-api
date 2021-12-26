import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { YandexMap } from "./components/Map/YandexMap";
import { Nav } from "./components/Nav/Nav";
import { InfoCategoriesMarker } from "./components/Info/InfoCategoriesMarker";
import { InfoCategories } from "./components/Info/InfoCategories";

import { eventsThunkAC } from "./redux/Events/actions";

function App() {
  const [showInfoCategories, setShowInfoCategories] = useState(false);
  const [extendNavigation, setExtendNavigation] = useState(false);
  const selectedEvents = useSelector((state) => state.events.selectedEvents);
  const coordsSelectedEvents = useSelector((state) => state.events.coordsSelectedEvents);


  const isMobile = useMediaQuery({
    query: "(max-width: 601px)",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsThunkAC());
  }, [dispatch]);

  const cbShowInfoCategories = (iShow) => {
    setShowInfoCategories(iShow);
  };

  const extendNav = (isExtend) => {
    setExtendNavigation(isExtend);
  };
  return (
    <div className="app">
      <YandexMap selectedEvents={selectedEvents} coordsSelectedEvents={coordsSelectedEvents} />
      <Nav isMobile={isMobile} cbExtendNav={extendNav} />
      <InfoCategories
        showInfoCategories={showInfoCategories}
        extendNavigation={extendNavigation}
      />
      <InfoCategoriesMarker
        cbShowInfoCategories={cbShowInfoCategories}
        extendNavigation={extendNavigation}
      />
    </div>
  );
}

export default App;
