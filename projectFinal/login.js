let validation = () => {
	let input_text = document.querySelector("#input_text");
	let input_password = document.querySelector("#input_password");
	let error_msg = document.querySelector(".error_msg");

	if(input_text.value.length <= 3 || input_password.value.length <= 3 ){
		error_msg.style.display = "inline-block";
		input_text.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
	}
	else{
    alert("form submitted successfully")
		return true;
	}
	
}

let input_fields = document.querySelectorAll(".input");
let login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length > 3){
			login_btn.disabled = false;
			login_btn.className = "btn enabled"
		}
	})
})

/*var storageKey = 'todoList'
let dataString = localStorage.getItem(storageKey);
//var list = [
//      'Silicon Valley',
//      'Avengers: Endgame,
//      'Superman',
//  ];
let list;
if(dataString){
    list = JSON.parse(dataString);
}else{
    list = [];
}
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addItem);
function addItem(){
    let input = document.getElementById('new-item');
    let newItem = input.value;
    list.push(newItem);
    render();
    input.value="";
    //local storage
    localStorage.setItem(storageKey,JSON.stringify(list));
}

function render(){
    let content = list.map(function(item){
        return '<li>' + item + '</li>';
    });
    document.getElementById('list').innerHTML = content.join(' ');
}
render();*/
