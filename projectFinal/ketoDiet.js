let ketoDiet =[
    {
        name: "DAY 1",
        description: "Breakfast: Bacon and Egg Cup with Avocado | Lunch: Pesto Chicken | Snack: Greek Yoghurt | Dinner: Baked Salmon"
    },
    {
        name: "DAY 2",
        description: "Breakfast: Coconut Cereal | Lunch: Keto Tortilla Soup | Snack: Green Smoothie | Dinner: Baked Chicken with Herbs",
    },
    {
        name: "DAY 3",
        description: "Breakfast:  Butter Bread | Lunch: Casserole with Broccoli Soup | Snack: Cauliflower Bites | Dinner: Chicken Marsala",
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
        description: "Breakfast: Keto Breakfast Sausage Sandwich | Lunch: Eggs Salad | Snack: Iced Bulletproof Coffee | Dinner: Beef Stroganoff",
    },
    {
        name: "DAY 5",
        description: "Breakfast: Eggs in an Avocado | Lunch: Stuffed Chicken Avocado Salad | Snack: Keto Fat Bombs | Dinner: Scallops & Cheese",
    },
    {
        name: "DAY 6",
        description: "Breakfast: Scrambled Egg Lettuce Wraps | Lunch: Kale Salad with Tuna | Snack: PeaNuts | Dinner: Chinese Beef and Broccoli",
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
  