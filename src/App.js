import {useState} from 'react';

import { YandexMap } from "./components/Map/YandexMap";
import { Nav } from "./components/Nav/Nav";
import { InfoCategoriesMarker } from "./components/Info/InfoCategoriesMarker";
import { InfoCategories } from "./components/Info/InfoCategories";

function App() {
  const [showInfoCategories, setShowInfoCategories] = useState(false);
  
  const cbShowInfoCategories = (bool) => {
    setShowInfoCategories(bool);
  }
  return (
    <div className="app">
      <YandexMap />
      <Nav />
      <InfoCategories showInfoCategories={showInfoCategories} />
      <InfoCategoriesMarker cbShowInfoCategories={cbShowInfoCategories} />
    </div>
  );
}

export default App;
