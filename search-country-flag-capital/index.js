const button = document.querySelector("#button");
button.addEventListener("click", getData);

function getData() {
  const name = document.querySelector("input").value;
  const countriesList = document.querySelector("ul");

  return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      countriesList.innerHTML = "";
      data.forEach((country) => {
        if (country.name.common.toLowerCase().includes(name.toLowerCase())) {
          const countryLi = document.createElement("li");
          const zastava = document.createElement("img");
          const name = document.createElement("span");
          const capitalSpan = document.createElement("span");

          zastava.src = country.flags.png;
          zastava.alt = `${country.name.official}`;
          zastava.width = 30;

          name.textContent = country.name.official;
          capitalSpan.textContent = `- ${country.capital} - `;

          countryLi.appendChild(name);
          countryLi.appendChild(capitalSpan);
          countryLi.appendChild(zastava);
          countriesList.appendChild(countryLi);
        }
      });
      return data;
    })
    .catch((error) => console.error(error));
}
