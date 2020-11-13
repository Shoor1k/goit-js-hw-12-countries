import './styles.css';
import MarkupCountry from './templates/country.hbs'
import MarkupListNameCountry from './templates/listCountry.hbs'
import API from './js/serchCountry'
var debounce = require('lodash.debounce');
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

const refs = {
    areaCountry:document.querySelector(`#searchCountry`),
    containerCountry:document.querySelector(`#box_country`)
}

refs.areaCountry.addEventListener('input', debounce(onSerch, 300) );


function onSerch(e) {
     e.preventDefault()
     const serchCountry = e.target.value
    API.fetchCountry(serchCountry)
        .then(appendCountryMarkup)
  
}

function appendCountryMarkup(country) {
    const markup = MarkupCountry(country[0]);
    const countryName = country.map(country => country.name)
    const markupListNameCountru = MarkupListNameCountry(countryName)
    console.log(markupListNameCountru);
        console.log(countryName);
    if (country.length === 1) {
        refs.containerCountry.innerHTML = markup;
    }
    else if (country.length > 1 && country.length <= 10) {
        refs.containerCountry.innerHTML = markupListNameCountru
    }
    else if (country.length > 10) {
        message()
        refs.containerCountry.innerHTML = '';
    }
  
}
     
function message() {
         error({
            text: "Too many matches found. Please enter a more special query",
            delay: 1000,
        });
    }
   



