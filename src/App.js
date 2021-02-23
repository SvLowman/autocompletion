/*global google*/
import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);

    const displaySuggestions = function (predictions) {
      console.log(predictions);
      console.log(predictions[0].description);
    };
    const autocomplete = new google.maps.places.AutocompleteService();
    autocomplete.getQueryPredictions(
      { input: event.target.value },
      displaySuggestions
    );
  };

  return (
    <main>
      <h1>Autocompletion Search</h1>
      <form>
        <label>Suche nach einem Ort:</label>
        <input
          type="text"
          placeholder="Ort eingeben"
          required="required"
          value={input}
          onChange={handleInputChange} /*onSelect={handleSelect}*/
        />
      </form>
      {/* {predictions && <p>{predictions}</p>} */}
    </main>
  );
}

export default App;
