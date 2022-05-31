import React, { useState, useRef } from "react";
import { render } from "react-dom";
import GlobalStyle from "./theme/GlobalStyle.js";
import useMapbox from "./useMapbox";

function App() {
  const [random, setRandom] = useState(Math.random());

  const mapRef = useRef();
  useMapbox(mapRef, [3, 4], 5);

  return (
    <>
      <GlobalStyle />
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div ref={mapRef} id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
