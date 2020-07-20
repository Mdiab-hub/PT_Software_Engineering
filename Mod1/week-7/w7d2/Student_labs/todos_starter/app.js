const todoInput = document.getElementById("input-box")
const todoButton = document.getElementById("submit")
//const todoList = document.getElementById("lists")
// const todoList1 = document.getElementById("to-do-list")
// const newItem = document.createElement("button")
// todoList1.appendChild(newItem)
//const todoList2 = document.getElementById("completed")

//now do I choose the big container div or the left or right ones and do i have to create two seperate divs

todoButton.addEventListener('click', addTodo)


//todoList1.document.createElement("button") //why is this not working is it wrong syntax

function addTodo(event){
    //prevents form from submitting
    event.preventDefault();
    //console.log('hello')

    const todoList1 = document.getElementById("to-do-list")
    const todoList2 = document.getElementById("completed")


    const newTodo = document.createElement('li')
    const cmptBtn = document.createElement("button")
    const delBtn = document.createElement("button")


    cmptBtn.innerHTML='Complete'
    delBtn.innerHTML='Remove'

    if(input.value !== ''){
        newTodo.textContent = input.value
        input.value = ''
        todoList1.appendChild(newTodo)
        newTodo.appendChild(cmptBtn)
        newTodo.appendChild(delBtn)
    }


    //todoList1.document.createElement("button")
    //completedButton.innerHTML = <i class="fas fa-check"></i>
    //todoList1.classList.add("to-do-list")
    //todoList1.appendChild(addButton)





    const newItem = document.createElement("button")
    todoList1.appendChild(newItem)
    

    //todo div
    //const todoDiv = document.createElement("div")
    //todoDiv.classList.add("todo")


    //create Li

    //const newTodo = document.createElement('li')
    //newTodo.innerText = 'hey'
    //newTodo.classList.add('todo-item')
    //todoDiv.appendChild(newTodo)


    //checkMark button // in my case completed button

    //const completedButton = document.createElement("button")
    //completedButton.innerHTML = <i class="fas fa-check"></i>
    //completedButton.classList.add("complete-btn")
    //todoDiv.appendChild(completedButton)


    //trash button // in my case remove button

    // const removeButton = document.createElement
    // //removeButton.innerHTML = <i class="fas fa-remove"></i>
    // removeButton.classList.add("complete-btn")
    // todoDiv.appendChild(removeButton)


    //append to list
    //todoList.appendChild(todoDiv)
}

//console.log(addTodo())