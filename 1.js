let form1 = document.querySelector('#section1 form');
let form2 = document.querySelector('#section2 form');
let ul = document.querySelector('ul');
let search = document.querySelector('.search');

let addTodo = (todo) => {
    let li = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo.toLowerCase()}</span>
                <i class="fas fa-trash"></i>
               </li>`
    ul.innerHTML += li;
};

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.todo.value) {
        addTodo(e.target.todo.value);
        e.target.todo.value = '';
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.remove();
    }
});

let searchTodo = (search) => {

    let a = Array.from(ul.children).filter(todo => {
        return !todo.textContent.includes(search);
    })
    a.forEach(todo => {
        todo.classList.add('hide');
    })

    let b = Array.from(ul.children).filter(todo => {
        return todo.textContent.includes(search);
    })
    b.forEach(todo => {
        todo.classList.remove('hide');
    })


};

search.addEventListener('keyup', (e) => {

    searchTodo(e.target.value.toLowerCase());

});






