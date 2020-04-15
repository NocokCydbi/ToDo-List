'use strict';

let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');
    const todoData = [];
    let b = [];
    const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoList.innerHTML = localStorage.getItem('storage');

    todoData.forEach(function(item){
        

        let li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
        '<div class="todo-buttons">' + 
        '<button class="todo-remove"></button>' + 
        '<button class="todo-complete"></button>' + 
        '</div>';
        if(item.completed){
            todoCompleted.append(li);
        }else{
            todoList.append(li);
        }
        const todoComplete = li.querySelector('.todo-complete');
        todoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
    
            render();
        });
        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', function(){
            li.remove();
            todoData.splice(item, 1);
        
        });
        b.push(li.innerHTML);
       
        localStorage.setItem('storage', (b));
    });

};
todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    let newTodo = {
        value: headerInput.value,
        completed: false  
    };

    if(headerInput.value === ''){
        todoControl.preventDefault();
    }
        todoData.push(newTodo);
        console.log(newTodo);


        render();
        
    
});

render();
