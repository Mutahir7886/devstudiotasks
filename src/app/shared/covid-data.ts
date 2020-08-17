import {Covid} from './covid';
export let COVID: Covid[] = [];


let fetchRes;
fetchRes = () => {
  fetch('https://api.covid19api.com/summary')
    .then((res) => res.json())
    .then((resjson) => storeData((resjson)))
    .catch((e) => console.log(e));
};

let storeData;
storeData = (data) => {
  const allCountries = data.Countries.slice(0, 100);
  COVID = allCountries;
};

fetchRes();











