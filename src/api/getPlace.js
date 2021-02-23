require("dotenv").config();

export async function getPlacesByInput(input) {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.API_KEY}`;
  const response = await fetch(url);
  const places = await response.json();
  return places;
}
