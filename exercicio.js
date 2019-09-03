// Exercicio 1 


var checaIdade = function(){
    return new Promise (function(resolve, reject){
        var idade = 15;

        if (idade >= 18) {
            resolve();
        }else{
            reject();
        }

    });
}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });
//================================================================

// Exercicio 2

var gitInput = document.querySelector('input');
var gitButton = document.querySelector('button');


var minhaPromise = function() {
    return new Promise (function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+ gitInput.value);
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                    
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}


function Todo(response){
    var imagem = document.querySelector('img');
    imagem !=null ? console.log('não é nulo'): console.log('é nulo');
    imagem.setAttribute('src', response.avatar_url);

}

gitButton.addEventListener('click', () => {
    minhaPromise()
        .then(function(response){
            console.log(response);
            console.log(response.public_repos);
            
            Todo(response);
        })
        .catch(function(error){
            console.warn(error);

        });
    }
);


    
// Felipesant

