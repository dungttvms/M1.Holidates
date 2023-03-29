const API_KEY = "339f603f-21d4-4c53-9194-3404a6f9b4ea";


/-----------------------COUNTRIES LIST---------------------------/
const BtnHandler = () => {
  console.log("handle click event");
};

document
  .getElementById("countries-list-btn")
  .addEventListener("click", BtnHandler);

const getCountries = async () => {
  try {
    const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
     //have a look the retrieved data
    return data;
  } catch (error) {
    console.log("error", error.message);
  } 
};


const renderCountries = async () => {
  try {
    const data = await getCountries();
    const countriesList = document.getElementById("countries-list");
    const ulCountriesList = countriesList.children[2];
    ulCountriesList.innerHTML = "";
    data.countries.forEach((country, index) => {
      //Create new `li` for each element
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${country.code}</div>
            </div>`;

      ulCountriesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};

// renderCountries();
document
  .getElementById("countries-list-btn")
  .addEventListener("click", renderCountries);

// /---------------------------------LANGUAGES---------------------------/
const getLanguages = async () => {
  try {
    const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
     //have a look the retrieved data
    return data;
  } catch (error) {
    console.log("error", error.message);
  } 
};


const renderLanguages = async () => {
  try {
    const data = await getLanguages();
    console.log(data)
    
    const languagesList = document.getElementById("languages-list");
    const ullanguagesList = languagesList.children[2];
    ullanguagesList.innerHTML = "";
    data.languages.forEach((lang, index) => {
      //Create new `li` for each element
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${lang.name}</div>
                <div>Code: ${lang.code}</div>
            </div>`;

      ullanguagesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};

// renderLanguages();
document
  .getElementById("languages-list-btn")
  .addEventListener("click", renderLanguages);

// /---------------------------HOLIDATES----------------------------/

// get DOM elements
const searchQueryInput = document.getElementById('search-query');
const yearQueryInput = document.getElementById('year-query');
const monthQueryInput = document.getElementById('month-query');
const dayQueryInput = document.getElementById('day-query');
const countryQueryInput = document.getElementById('country-query');
const languageQueryInput = document.getElementById('language-query');
const holidaysBtn = document.getElementById('holidays-btn');
// const countriesListBtn = document.getElementById('countries-list-btn');
// const languagesListBtn = document.getElementById('languages-list-btn');


holidaysBtn.addEventListener('click', () => {
  // get query values
  const searchQuery = searchQueryInput.value;
  const yearQuery = yearQueryInput.value;
  const monthQuery = monthQueryInput.value;  
  const dayQuery = dayQueryInput.value;  
  const countryQuery = countryQueryInput.value;  
  const languageQuery = languageQueryInput.value;
});

  // TODO: implement code to fetch holidays data and display in holidays list
  
  const getHolidays = async () => {
  try {
    let queryString = "";
    //if 'ABC' input box's value exist then add another query string to our `queryString`
    if (search.value) {
      queryString += `&search=${search.value}`;
    }
    if (year.value) {
      queryString += `&year=${year.value}`;
    } else {
      queryString += `&year=2022`;
    }
    if (month.value) {
      queryString += `&month=${month.value}`;
    }
    if (day.value) {
      queryString += `&day=${day.value}`;
    }
    if (country.value) {
      queryString += `&country=${country.value}`;
    } else {
      queryString += `&country=VN`;
    }
    if (language.value) {
      queryString += `&language=${language.value}`;
    }

    const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}${queryString}`;

    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (error) {
    console.log("error", error.message);
  }
};



const search = document.getElementById("search-query");
const year = document.getElementById("year-query");
const month = document.getElementById("month-query");
const day = document.getElementById("day-query");
const country = document.getElementById("country-query");
const language = document.getElementById("language-query");


// document
//   .getElementById("holidays-btn")
//   .addEventListener("click", BtnHandler);



const renderHolidays = async () => {
  try {
    //1. Fetch all the holidays by using function `getHolidays`
    const data = await getHolidays();

    //2. Select the element with the id `holidays-list`
    const holidaysList = document.getElementById("holidays-list");

    //3. Select out `ul` element
    const ulHolidaysList = holidaysList.children[1];

    //4. Delete the content inside `ul` element
    ulHolidaysList.innerHTML = "";

    //5. Loop/Iterate through the list of holidays
    data.holidays.forEach((holiday, index) => {
      //Create new `li` for each element
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
        <div class="li-wrapper">
            <div class="li-title">${holiday.name}</div>
            <div>${holiday.weekday.date.name} - ${holiday.date}</div>
        </div>`;

      //Then append them to the `ul` element
      ulHolidaysList.appendChild(x);
    });
  } catch (error) {
    console.log("error", error.message);
  }
};
// renderHolidays ();
document
  .getElementById("holidays-btn")
  .addEventListener("click", renderHolidays);

