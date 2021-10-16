let news =[
    {
      name: "- SPORTS AND FITNESS -",
      description: "Everything you need to workout in the cold in lockdown",
      img: "https://static.independent.co.uk/2021/01/05/10/indybest%20winter%20fitness%20gear.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- WOMEN -",
      description: "Want a simpler beauty routine? Just add some lemon juice",
      img: "https://static.independent.co.uk/2021/01/07/13/iStock-466723416.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- HEALTH & FAMILY -",
      description: "The most effective abdominal workouts, according to experts",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/14/istock-538928645.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- HEALTH & FAMILY -",
      description: "How to do a full body workout in the comfort of your home",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/17/12/istock-623619166.jpg?width=375&auto=webp&quality=75"
    }
];
  
let newsTemplate = newsInfo =>{
   return `
   <div class="food" style="border: 15px solid white; padding: 20px;>
      <h2 class="name">${newsInfo.name}</h2> 
      <p>${newsInfo.description}</p> </br>
      <img src="${newsInfo.img}" alt="error" style="width:200px; height:150px">
   </div> 
`
}
document.getElementById('part_2').innerHTML = `
${news.map(newsTemplate).join("")} `


let news_2 =[
    {
      name: "- LIFESTYLE -",
      description: "Top tips on turning to the gym, according to experts",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/07/21/16/istock-1134331682.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- HEALTH -",
      description: "Skip breakfast before morning workout to lose more weight",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/28/10/istock-937283086.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- FASHION -",
      description: "Stylish workout clothes to motivate you more in new year",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/20/14/gym-outfit-new-year.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- HEALTHY LIVING -",
      description: "What is the best time to do a full workout for weight loss?",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/19/18/idoh-exercise.jpg?width=375&auto=webp&quality=75"
    }
];
  
let newsTemplate_2 = newsInfo_2 =>{
   return `
   <div class="food" style="border: 15px solid white; padding: 20px;>
      <h2 class="name" style="text-align:center; color: white;">${newsInfo_2.name}</h2> 
      <p>${newsInfo_2.description}</p> </br>
      <img src="${newsInfo_2.img}" alt="error" style="width:200px; height:150px">
   </div> 
`
}
document.getElementById('part_3').innerHTML = `
${news_2.map(newsTemplate_2).join("")} `


let news_3 =[
    {
      name: "- HEALTH AND FAMILY -",
      description: "How many times a week you need to workout to lose weight",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/24/14/working-out-gym.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- LIFESTYLE -",
      description: "A Harvard doctor says these are the best exercises for you",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/15/11/ex.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- HEALTH AND FAMILY -",
      description: "How to stay motivated to workout at home, expert reveal",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/01/17/istock-1163928823.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- SPORTS AND FITNESS -",
      description: "How to start practicing yoga in the comfort of your home",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/20/17/ft-home-f-rebalance-0168-1.jpeg?width=375&auto=webp&quality=75"
    }
];
  
let newsTemplate_3 = newsInfo_3 =>{
   return `
   <div class="food" style="border: 15px solid white; padding: 20px;>
      <h2 class="name" style="text-align:center; color: white;">${newsInfo_3.name}</h2> 
      <p>${newsInfo_3.description}</p> </br>
      <img src="${newsInfo_3.img}" alt="error" style="width:200px; height:150px">
   </div> 
`
}
document.getElementById('part_4').innerHTML = `
${news_3.map(newsTemplate_3).join("")} `


let news_4 =[
    {
      name: "- FASHION -",
      description: "Top tips on turning to the gym, according to experts",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/07/15/gettyimages-1147426956.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- LIFESTYLE -",
      description: "Hailey shares her favorite workout and skin routine",
      img: "https://static.independent.co.uk/2021/02/03/07/GettyImages-912408782%20%281%29.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- CELEB -",
      description: "Britney Spears does a two hour yoga workout everyday",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/17/14/gettyimages-610598430.jpg?width=375&auto=webp&quality=75"
    },
    {
      name: "- FASHION -",
      description: "Fashion BlackMilk launch Harry Potter active wears",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/15/11/blackmilk-harry-potter.jpg?width=375&auto=webp&quality=75"
    }
];
  
let newsTemplate_4 = newsInfo_4 =>{
   return `
   <div class="food" style="border: 15px solid white; padding: 20px;>
      <h2 class="name" style="text-align:center; color: white;">${newsInfo_4.name}</h2> 
      <p>${newsInfo_4.description}</p> </br>
      <img src="${newsInfo_4.img}" alt="error" style="width:200px; height:150px">
   </div> 
`
}
document.getElementById('part_5').innerHTML = `
${news_4.map(newsTemplate_3).join("")} `

