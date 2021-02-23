import React from "react";
import "./App.css";
// import PlacesAutocomplete, {
//   geocodeByAddress,
// } from "react-places-autocomplete";

function App() {
  // const [address, setAddress] = useState("");

  // const handleSelect = async (value) => {};

  return (
    <main>
      <h1>Autocompletion Search</h1>
      <form /*onSubmit={handleSubmit}*/>
        <label>Suche nach einem Ort:</label>
        <input
          type="text"
          placeholder="Ort eingeben" /*value={searchInput} onChange={handleSearchInputChange} onSelect={}*/
        />
      </form>
      {/* <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {() => <div>Test</div>}
        </PlacesAutocomplete>
      </div> */}
    </main>
  );
}

export default App;
