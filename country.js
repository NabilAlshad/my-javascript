 const getData = () => {
     const url = `https://restcountries.eu/rest/v2/all`;
     fetch(url)
         .then(res => res.json())
         .then(data => displayData(data));
 }

 getData();

 const displayData = (data) => {
     const countries = document.getElementById('countries');
    

     for (let i = 0; i < data.length; i++) {
         const country = data[i];
         const div = document.createElement('div');
         div.className = 'country-name'
         const countryInfo = `<h1>country:${country.name} </h1>
         <h5>captial: ${country.capital} </h5>
         <p> population: ${country.population}</p>
         <button> Show Details </button> `

         div.innerHTML = countryInfo;
         countries.appendChild(div);
         //  div.innerHTML =


     }


 }

 const showDetails = () => {

 }













 // function doFetch() {
 //     fetch('https://restcountries.eu/rest/v2/all')
 //         .then((Response) => Response.json())
 //         .then(data => displayData(data))
 // }
 // doFetch();

 // const displayData = (country) => {
 //     const div = document.getElementById('countries');
 //     country.forEach(country => {
 //         const countryDiv = document.createElement('div');
 //         countryDiv.className = 'country-name';
 //         const countryInfo = `
 //         <h1>${country.name}</h1>
 //         <p> ${country.capital}</p>
 //         <button onclick=displayDetails('${country.name}')> details</button>

 // `;
 //         countryDiv.innerHTML = countryInfo;
 //         div.appendChild(countryDiv);
 //     })
 // }
 // const displayDetails = name => {
 //     const url = `https://restcountries.eu/rest/v2/name/${name}`;
 //     fetch(url)
 //         .then(res => res.json())
 //         .then(data => displayCountryInfo(data[0]));
 // }
 // const displayCountryInfo = country => {
 //     const details = document.getElementById('countryDetails');
 //     details.innerHTML = `
 //     <h1  > ${country.name}</h1>
 //     <p >${country.population}</p>
 //     <img src="${country.flag}"> `

 // }