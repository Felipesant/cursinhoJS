var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


/*  Essa Função Cria os novos "Todos" */

function renderTodos(){

    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        // método indexOf retorna a posição do array que o valor estar
        var pos = todos.indexOf(todo);
        //método para excluir um elemento pela posição dele dentro do array
        linkElement.setAttribute('onclick', ' excluir('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();
console.log(todo);

/* Essa Função usa o Função que renderiza e adiciona */

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function excluir(pos){
    //metodo Splice remove uma quantidade de itens do array, baseado na posição
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}


/*  */

buttonElement.onclick = addTodo;

inputElement.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        console.log("teste");
        addTodo();
    }
});

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

var linkA = document.querySelectorAll('#app ul li a');

var posicao = linkA.indexOf();
console.log(posicao);


inputElement.addEventListener("keyup", function(event){
    if(event.keyCode === 8){
        console.log(linkA);
        
    }

});