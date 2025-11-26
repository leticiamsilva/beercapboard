export async function getCountries() {
  const resp = await fetch("http://localhost:3000/country/countries");
  return await resp.json();
}