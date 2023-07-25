
function fetchAnimeFact() {
    return new Promise((resolve, reject) => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
            .then(response => response.json())
            .then(data => resolve(data.facts))
            .catch(error => reject(error));
    });
}


function displayAnimeFact(fact) {
    const dataContainer = document.querySelector(".data-container");
    const factElement = document.createElement("div");
    factElement.classList.add("card");

    const factText = document.createElement("p");
    factText.textContent = fact;

    factElement.appendChild(factText);
    dataContainer.appendChild(factElement);
}

function fetchNewAnimeFact() {
    fetchAnimeFact()
        .then(facts => {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            displayAnimeFact(randomFact);
        })
        .catch(error => console.error("Error fetching anime fact:", error));
}


const fetchButton = document.getElementById("fetch-btn");
fetchButton.addEventListener("click", fetchNewAnimeFact);


fetchNewAnimeFact();
