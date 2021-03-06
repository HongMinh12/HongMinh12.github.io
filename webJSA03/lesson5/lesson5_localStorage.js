var storageKey = 'todoList'
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
render();   
