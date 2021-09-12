//phần 1
let nhapA = () => a = prompt('Nhap A');
let nhapB = () => b = prompt('Nhap B');

let equation = () => {
	if(a == 0) {
		if(b == 0) {
    		alert('Phuong trinh vo so nghiem')
		} 
        else {
			alert('Phuong trinh vo nghiem')
	    }
	} 
    else {
	   	x = -b/a
		alert('Phuong trinh co nghiem x = ' + x)
	}
}

//phần 2
let canhBen1 = () => canh1 = prompt('Nhap canh ben 1');
let canhBen2 = () => canh2 = prompt('Nhap canh ben 2');

let canhHuyen = (canhBen1, canhBen2) => {
    alert(Math.sqrt((canhBen1*canhBen1) + (canhBen2*canhBen2)));
}

let duongCao = () => {
    let canhDai = canhBen1/canhHuyen;
    let canhNgan = canhBen2/canhHuyen;
    alert(Math.sqrt(canhDai*canhNgan));
}

//phần 3
let foo = (x,y,z) => console.log(x,y,z)

let foo = () => alert('Hello')

let foo = (a,b) => {
    let m = a+b*100;
    return m;
}

//phần 4
student('Minh', 14, 'Hanoi');

let student = (name, age, address) => {
    let student ={
        name: name, 
        age: age,
        address: address
    };
    console.log(student);
}





