/*global google*/
import React, { useState /*useEffect*/ } from "react";
import styled from "styled-components/macro";
import GlobalStyle from "./globalStyle";

const FormContainer = styled.div`
  background: var(--background);
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = styled.form`
  border: solid 1px rebeccapurple;
  margin-top: 1rem;
  width: 80%;
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: auto auto;
`;

const SearchLabel = styled.label`
  border: solid 1px black;
  background: var(--label-background);
  text-align: center;
  padding: calc(1rem - 3px);
  width: 70px;
`;

const SearchInput = styled.input`
  border: solid 1px black;
  background: var(--paper);
  padding: 1rem 1.5rem;
  width: 100%;
`;

const PredictionContainer = styled.ul`
  border: solid 1px hotpink;
  background: var(--paper);
  list-style-type: none;
  padding: 0;
  margin: 0;
  min-width: calc(80% - 70px);
  grid-column-start: 2;
`;

const PredictionButton = styled.button`
  border: none;
  text-align: left;
  padding: 0.5rem 1.5rem;
  width: 100%;
  :hover {
    background: var(--selected);
    color: var(--paper);
  }
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
        <SearchForm>
          <SearchLabel>🔎</SearchLabel>
          <SearchInput
            type="text"
            placeholder="Ort eingeben"
            required="required"
            value={input}
            onChange={handleInputChange} /*onSelect={handleSelect}*/
          />
          <PredictionContainer>
            {predictionData &&
              resultDisplay &&
              input !== "" &&
              predictionData.map((predictionObject, index) => (
                <li key={index}>
                  <PredictionButton onClick={() => selectPlace(index)}>
                    {predictionObject.description}
                  </PredictionButton>
                </li>
              ))}
          </PredictionContainer>
        </SearchForm>
      </FormContainer>
    </main>
  );
}

export default App;
