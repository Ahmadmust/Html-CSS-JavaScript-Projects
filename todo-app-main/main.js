//Counter
const itemcount = document.querySelector('.count span');
const mobCount = document.querySelector('.mobile-count span');
itemcount.innerHTML = document.querySelectorAll('.list').length;
mobCount.innerHTML = document.querySelectorAll('.list').length;
//theme change
var theme = document.querySelector(".theme");
theme.addEventListener("click",()=>{
    document.body.classList.toggle('light');
    if(document.body.classList.contains('light')){
        theme.src='images/icon-moon.svg';
    }
    else{
        theme.src='images/icon-sun.svg';
    }

});

//add todo items
const addBtn = document.querySelector('.todo-input button');
const todoInput = document.getElementById('todo-input');
const todo = document.querySelector('.todos ul');
const todoId = document.querySelector('.filters input[type="radio"]:checked');

addBtn.addEventListener('click',()=>{
if(todoInput.value.length > 0){
    addTodo(todoInput.value);
    todoInput.values='';
}
});
todoInput.addEventListener('keyup',(e)=>{
    let inputValue = todoInput.value;
    console.log(inputValue)
    if(e.key === "Enter" && inputValue !== ""){
        addTodo(inputValue);
        todoInput.value="";
    }
});

function addTodo(text){
    const item = document.createElement('li');
    item.innerHTML=`<label class="list">
    <input class="checkbox" type="checkbox"> 
    <span class="text">${text}</span>
    </label>
    <span class="remove"></span>
`;
    if(todoId.id === 'completed'){
        item.classList.add('hidden');
    }
    todo.append(item);
    updateCount(1);
}
function updateCount(num) {
    itemcount.innerText = + itemcount.innerText + num;
}

//Remove todo
function removeItems(item){
    item.remove();
    updateCount(-1);
}

todo.addEventListener('click',(event)=>{
    if(event.target.classList.contains('remove')){
        removeItems(event.target.parentElement);
    }
})
//filter
document.querySelectorAll('.filters input').forEach(radio =>{
    radio.addEventListener('change',(event)=>{
        filterTodo(event.target.id);
    })
})

function filterTodo(id){
    const allItems = document.querySelectorAll('li');


    switch(id){
        case 'all':
            allItems.forEach(item =>{
                item.classList.remove('hidden');
        })    
        break;
        case 'active':
            allItems.forEach(item =>{
                if(item.querySelector('input').checked){
                    item.classList.add('hidden')
                }else{
                    item.classList.remove('hidden')
                }
        })
        break;
        default:
            allItems.forEach(item =>{
                if(item.querySelector('input').checked){
                    item.classList.remove('hidden')
                }else{
                    item.classList.add('hidden')
                }
            })
            break;
    }
}

//clear completed
const clear = document.querySelector('.clear');
const mobileClear = document.querySelector('.mobile-clear');
clear.addEventListener('click',()=>{
    const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
    itemChecked.forEach(item=>{
        removeItems(item.closest('li'));
    });
});

mobileClear.addEventListener('click',()=>{
    const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
    itemChecked.forEach(item=>{
        removeItems(item.closest('li'));
    });
});

Sortable.create(simpleList);