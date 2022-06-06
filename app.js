var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')


form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('ok ')
    let val = input.value.trim()
    if(val){
        addTodoElement({
            text:val,
            status:'complete'
        })
        addTodoElement({
            text:val,
        })
    }
    input.value = ''
})

function addTodoElement(todo){
    // {
    //     Text:
    //     status
    // }
    // <li>
    //             <span>Test</span>
    //             <i class="fa-solid fa-trash-can"></i>
    //         </li>

    var li = document.createElement('li')
    li.innerHTML = `<span>${todo.text}</span>
                    <i class="fa-solid fa-trash-can"></i>`

    if (todo.status === 'complete') {
        li.setAttribute('class','complete')
    }
    
    li.addEventListener('click',function(){
        this.classList.toggle('complete')
    })

    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove()
    })
    todos.appendChild(li)
}