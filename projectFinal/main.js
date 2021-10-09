var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

let diets =[
  {
    name: "Keto Diet",
    description: "The ketogenic diet is a very low carb, high fat diet. This aims to force your body into using a different type of fuel - fat molecules.",
    img: "https://i.ibb.co/qytCm1G/keto-Diet-modified.png"
  },
  {
    name: "Vegan Diet",
    description: "Vegan diet involves eating only foods comprising plants. Those who follow this diet avoid all animal products, including meat and diary.",
    img: "https://i.ibb.co/TPWPHS5/vegan-Diet-modified.png"
  },
  {
    name: "Intermittent Diet",
    description: "The 5:2 diet is an intermittent fasting regime in which calorie intake is limited to 500–600 calories per day two times per week.",
    img: "https://i.ibb.co/g7vLL58/intermittent-Diet-modified.png"
  },
  {
    name: "Extreme Diet",
    description: "Extreme dieting involves reducing the calorie intake to lose lots of weight in a short period, pushing the body beyond its capabilities.",
    img: "https://i.ibb.co/gJ4wM62/extreme-Diet1-modified.png"
  }
];

let dietTemplate = diet =>{
  return `
  <div class="food">
    <img scr="${diets.img}" alt="error">
    <h2 class="name" style="text-align:center">${diet.name}</h2> 
    <p>${diet.description}</p>
  </div> 
  `
}
document.getElementById('part_4').innerHTML = `
${diets.map(dietTemplate).join("")} `


let workouts =[
  {
    name: "Increase Height",
    description: "Proper exercise and stretch are responsible for massive height gains, especially in between the teenage phase of 12 to 18 years old.",
    img: "https://www.jessicagavin.com/wp-content/uploads/2020/12/keto-diet-4.jpg"
  },
  {
    name: "Slim Waist",
    description: "It's important to to specific add cardio moves to your list, ones which work your obliques, slim down your waist and love handle region.",
    img: "https://images.theconversation.com/files/352720/original/file-20200813-22-u6p0qo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
  },
  {
    name: "Slim Thigh",
    description: "The program is designed to tone your legs without making them bulky. This gives you confidence to show off your lovely pair of legs.",
    img: ""
  }
];

let workTemplate = workout =>{
  return `
    <div style="background-color=black" class="exercise">
      <h2 class="name" style="text-align:center">${workout.name}</h2>
      <p>${workout.description}</p>
    </div> 
  `
}
document.getElementById('part_6').innerHTML = `
${workouts.map(workTemplate).join("")} `

