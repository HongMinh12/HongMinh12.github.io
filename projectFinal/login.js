let available = [
    {
        username: 'adidaslet',
        password: 'notme123'
    },
    {
        username: 'fundmoney',
        password: 'want2see'
    },
    {
        username: 'nightsky',
        password: 'light989'
    },
];

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

    /*if(input_text != "adidaslet" && input_password != "notme123" ){
		error_msg.style.display = "inline-block";
		input_text.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
	}
	else{
    alert("form submitted successfully")
		return true;

    }*/
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
