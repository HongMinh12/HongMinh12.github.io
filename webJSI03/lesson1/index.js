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

let ageRequest = () => {
    let text;
    let ageQues = prompt("Độ tuổi cần tìm?");
    if (ageQues == "16") {
      text = "NVA";
    } 
    else if (ageQues == "18") {
        text = "NVB";
      } 
    else if (ageQues == "17") {
        text = "NVC";
    }
    else if (ageQues == "15") {
        text = "NVD";
    }
    else {
      text = "Không tìm thấy!";
    }
    document.getElementById("output_1").innerHTML = text;
}

let courseRequest = () => {
    let text_2;
    let courseQues = prompt("Khóa học cần tìm?");
    if (courseQues == "mindX 01") {
        text_2 = "NVA, NVB, NVC, NVD" ;
    } 
    else if (courseQues == "mindX 02") {
        text_2 = "NVA, NVB, NVD";
    } 
    else if (courseQues == "mindX 03") {
        text_2 = "NVA, NVC, NVD";
    }
    else if (courseQues == "mindX 04") {
        text_2 = "NVB, NVC";
    }
    else {
        text_2 = "Chưa có lớp học này!";
    }
    document.getElementById("output_2").innerHTML = text_2;
}


let arr1 = [0, 2, 4, 6, 8]
let arr2 = [1, 3, 5, 7]

let bigger3 = () => {
    arr1.filter(biggerThan)
    let biggerThan = (number) => {
        return number > 3;
    }
}

let combineOne = () => {
    let text_4 = arr1.concat(arr2);
    document.getElementById("output_4").innerHTML = text_4;
}

let combineTwo = () => {
    let text_5 = arr2.concat(arr1);
    document.getElementById("output_5").innerHTML = text_5;
}
