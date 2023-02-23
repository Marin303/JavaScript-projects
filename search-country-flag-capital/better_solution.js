 const button = document.querySelector("button");
 button.addEventListener("click", myFunction);
 
 function myFunction() {
   const input = document.querySelector("input").value;
   fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
     .then((response) => response.json())
     .then((data) => {
       data.forEach((country) => {
         if (country.name.common.toLowerCase()) {
           const [li, countrySpan, capital, region, languages, currencies, imgCountry] = ["li","span","span","span","span","span","img",].map((el) => document.createElement(el));
           const ul = document.querySelector("ul");
 
           countrySpan.textContent = `${country.name.common} - `;
           capital.textContent = `${country.capital ? country.capital + " - " : ""}`;
           region.textContent = `${country.region} - `;
           languages.textContent = `Language: ${Object.values(country.languages).join(", ")} - `;
           currencies.textContent = `Currencies: ${Object.values(country.currencies).map((c) => `${c.name} (${c.symbol})`).join(", ")} - `
           /* "currencies":{"EUR":{"name":"Euro","symbol":"€"}} */
 
           imgCountry.src = country.flags.png;
           imgCountry.width = 30;
 
           li.append(countrySpan, capital, region, languages, currencies, imgCountry);
           ul.appendChild(li);
 
           const input = document.querySelector("input");
           input.value = "";
         }
       });
     });
 }
 
 const input = document.querySelector("input");
 input.addEventListener("keypress", function (a) {
   if (a.key === "Enter") {
     myFunction();
     input.value = "";
   }
 });
