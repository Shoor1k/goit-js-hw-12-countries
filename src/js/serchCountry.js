
export default  {fetchCountry} 
    
function fetchCountry(serchCountry) {
        const url = `https://restcountries.eu/rest/v2/name/${serchCountry}`
        return fetch(url).then(responce => responce.json())
} 