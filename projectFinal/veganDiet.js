let ketoDiet =[
    {
        name: "DAY 1",
        description: "Breakfast: Bread and Tofu | Lunch: Green Bean Salad | Snack: Peanut butter Cracker| Dinner: Coconut Curry Vegies"
    },
    {
        name: "DAY 2",
        description: "Breakfast: Banana Porridge | Lunch: Sesame Tofu Bowl | Snack: Pistachio Bites | Dinner: Moroccan Red Lentil Soup",
    },
    {
        name: "DAY 3",
        description: "Breakfast:  Banana Muffin | Lunch: Polenta and Beans | Snack: Hummus and Carrots | Dinner: Chickpea Sandwich",
    }
];
  
let dietTemplate = diet =>{
    return `
    <div class="plan" style="border: 10px solid white; padding: 20px;">
    <h2 class="day" style="text-align:center">${diet.name}</h2> 
    <p>${diet.description}</p>
</div> 
`
}
document.getElementById('part_2').innerHTML = `
${ketoDiet.map(dietTemplate).join("")} `

let ketoDiet_2 =[
    {
        name: "DAY 4",
        description: "Breakfast: Coconut Porridge| Lunch: Homemade Hummus Wrap | Snack: Walnuts, Dips, Carrots | Dinner: Cauliflower Dhal",
    },
    {
        name: "DAY 5",
        description: "Breakfast: Oatmeal with Apple| Lunch: Chard and Cashew | Snack: Chocolate Mint Bites | Dinner: Quinoa Lentil Salad",
    },
    {
        name: "DAY 6",
        description: "Breakfast: Greek Yoghurt Smoothie | Lunch: Bean Burrito | Snack: Apple and Nuts | Dinner: Asparagus Lime Spaghetti",
    }
];
  
let dietTemplate_2 = diet_2 =>{
    return `
    <div class="plan" style="border: 10px solid white; padding: 20px;">
      <h2 class="day" style="text-align:center">${diet_2.name}</h2> 
      <p>${diet_2.description}</p>
    </div> 
    `
}
document.getElementById('part_3').innerHTML = `
${ketoDiet_2.map(dietTemplate_2).join("")} `
  