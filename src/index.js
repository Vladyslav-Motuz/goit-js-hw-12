// import './sass/main.scss';
import './css/styles.css';

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

import countrysHBS from './templates/countrys.hbs';
import countryHBS from './templates/country.hbs';
import API from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const onSearchCountry = (event) => {
    event.preventDefault();
    const searchCountry = event.target.value;    

    API.fetchCountries(searchCountry)
        .then(countryName => {
            
            if (countryName.length === 0) {
                clearSearchCountry();
                return
            } else if (countryName.length === 1) {
                clearSearchCountry();
                countryInfo.innerHTML = countryHBS(...countryName);
            } else if (countryName.length >= 2 && countryName.length <= 10) {
                clearSearchCountry();
                countryName.forEach(country => {
                    countryList.insertAdjacentHTML('beforeend', countrysHBS(country));
                });
            } else {
                Notify.info('Too many matches found. Please enter a more specific name.');
            };
        })
        
        .catch(error => {
            clearSearchCountry();
            Notify.failure('Oops, there is no country with that name');           
        });
};

function clearSearchCountry() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}

input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));