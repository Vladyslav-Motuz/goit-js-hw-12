// import './sass/main.scss';
// import './css/styles.css';
import countrysHBS from './templates/countrys.hbs';
import countryHBS from './templates/country.hbs';
// import { data } from 'browserslist';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

console.log(input);
console.log(countryList);
console.log(countryInfo);

// const queryAPI = (name) => fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
//     .then(response => {
//         return response.json();
//     });
// countryList.innerHTML = '<li><p>hi</p></li>'
// const ssss = (name) => {
//     queryAPI(name).then(data => {
//         // console.log(data);

//         data.forEach(element => {
//             console.log(countrysHBS(element));
//             countryList.insertAdjacentHTML('beforeend', countrysHBS(element));
//         });
       
//     })
//         .catch(error => {
//             console.log(error);           
//         });
// };

console.log(ssss("Col"));
// input.addEventListener('input', onSearchCountry);
