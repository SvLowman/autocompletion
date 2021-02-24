/*global google*/
import React, { useState /*useEffect*/ } from "react";
import styled from "styled-components/macro";
import GlobalStyle from "./globalStyle";

const FormContainer = styled.div`
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [input, setInput] = useState("");
  const [predictionData, setPredictionData] = useState([]);
  const [resultDisplay, setResultDisplay] = useState(false);

  // useEffect(() => {}, []);

  const selectPlace = (index) => {
    setInput(predictionData[index].description);
    setResultDisplay(false);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setResultDisplay(true);

    const displaySuggestions = function (predictions) {
      setPredictionData(predictions);
    };
    const autocomplete = new google.maps.places.AutocompleteService();
    autocomplete.getQueryPredictions(
      { input: event.target.value },
      displaySuggestions
    );
  };

  console.log("Input:", input);
  console.log("Pred. Data:", predictionData);

  return (
    <main>
      <GlobalStyle />
      <FormContainer>
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
          resultDisplay &&
          input !== "" &&
          predictionData.map((predictionObject, index) => (
            <button key={index} onClick={() => selectPlace(index)}>
              {predictionObject.description}
            </button>
          ))}
      </FormContainer>
    </main>
  );
}

export default App;
