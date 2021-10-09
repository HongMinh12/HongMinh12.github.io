const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2017,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
  
function petTemplate(pet){
    return `
    <div class="animal">
      <img class="pet-photo" scr="${pet.photo}">
      <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
      <p>Birth year: ${pet.birthYear}</p>
    </div>
    `
}
  
document.getElementById("app").innerHTML = `
<h1>Pets (${petsData.length} results) </h1>
${petsData.map(petTemplate).join("")} `


  