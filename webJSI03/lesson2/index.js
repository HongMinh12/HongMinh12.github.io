//Bai 1
let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
]

let tuoi = prompt("Độ tuổi cần tìm:")
let arr1 = [];
for(let x of student){
    if(Number(tuoi) == x.age){
        document.querySelector(".bai1a").innerHTML += `
            <p> ${x.name}</p>
        `   
    arr1.push(x); 
    }
}
if(arr1.length <= 0){
    document.querySelector(".bai1a").innerHTML = "Khong tim thay!"
}

let khoahoc = prompt("Khóa học cần tìm:")
let arr2 = [];
for(let x of student) {
    for(let y in x.course) {
        if(khoahoc == x.course[y]){
            document.querySelector(".bai1b").innerHTML += `
                <p> ${x.name}</p>
        `
        arr2.push(x.name)
        }
    }
}
if(arr2.length <= 0){
    document.querySelector(".bai1a").innerHTML = "Chua co lop hoc nay!"
}

//Bai 2
let a1 = [0,2,4,6,8];
let a2 = [1,3,5,7];
for(let i of a1) {
    if (i>3){
        document.querySelector(".bai2a").innerHTML +=`
            <p> ${i}</p>
        `
    }
}
for(let i of a2) {
    if (i>3){
        document.querySelector(".bai2a").innerHTML +=`
            <p> ${i}</p>
        `
    }
}
let newArr = a1.concat(a2);
console.log(newArr);
let newArr2 = newArr.sort();
console.log(newArr2);

//Bai 3
let n = prompt("Điền số dòng muốn hiện:");
for (let i = 1; i <= n; i=i+2) {
    a = ""
    for(let j = 0; j <= (n - i/2); j++) {
        a += "~"
    }
    for(let k = 0; k < i; k++) {
        a += "1"
    }
    console.log(a);
}