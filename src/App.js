/*global google*/
import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [predictionData, setPredictionData] = useState([]);

  const selectPlace = (index) => {
    setInput(predictionData[index].description);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);

    const displaySuggestions = function (predictions) {
      console.log(predictions);
      console.log(predictions[0].description);
      setPredictionData(predictions);
    };
    const autocomplete = new google.maps.places.AutocompleteService();
    autocomplete.getQueryPredictions(
      { input: event.target.value },
      displaySuggestions
    );
  };

  console.log(predictionData);

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
      {predictionData &&
        predictionData.map((predictionObject, index) => (
          <button key={index} onClick={() => selectPlace(index)}>
            {predictionObject.description}
          </button>
        ))}
    </main>
  );
}

export default App;
