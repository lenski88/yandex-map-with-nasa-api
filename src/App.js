import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { YandexMap } from "./components/Map/YandexMap";
import { Nav } from "./components/Nav/Nav";
import { InfoCategoriesMarker } from "./components/Info/InfoCategoriesMarker";
import { InfoCategories } from "./components/Info/InfoCategories";

function App() {
  const [showInfoCategories, setShowInfoCategories] = useState(false);
  const [extendNavigation, setExtendNavigation] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 601px)",
  });

  const cbShowInfoCategories = (iShow) => {
    setShowInfoCategories(iShow);
  };

  const extendNav = (isExtend) => {
    setExtendNavigation(isExtend);
  };
  return (
    <div className="app">
      <YandexMap />
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
