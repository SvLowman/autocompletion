/*global google*/
import React, { useState /*useEffect*/ } from "react";
import styled from "styled-components/macro";
import GlobalStyle from "./globalStyle";

const FormContainer = styled.div`
  background: linear-gradient(
    180deg,
    var(--background),
    var(--background-gradient)
  );
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = styled.form`
  margin-top: 1rem;
  width: 80%;
  max-width: 500px;
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: auto auto;
`;

const SearchLabel = styled.label`
  border: solid 1px var(--selected);
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  background: linear-gradient(
    160deg,
    var(--label-background),
    var(--label-background-gradient)
  );
  text-align: center;
  padding: calc(1rem - 3px);
  width: 70px;
`;

const SearchInput = styled.input`
  border: solid 1px var(--selected);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background: var(--paper);
  font-family: "Montserrat", sans-serif;
  padding: 1rem 1.5rem;
  width: 100%;
`;

const PredictionContainer = styled.ul`
  border-left: solid 1px var(--selected);
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: calc(100% - 2rem);
  grid-column-start: 2;
`;

const PredictionButton = styled.button`
  border: none;
  border-radius: 0;
  background: var(--paper);
  font-family: "Montserrat", sans-serif;
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
