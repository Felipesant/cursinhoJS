

//Começando uma requisição Ajax - Este método da acesso ao Ajax para pegar dados do servidor !!!
//var xhr = new XMLHttpRequest();

// Esse é o método para buscar os dados da URL - Passando o primeiro parâmetro com método GET para pegar a URL
//xhr.open('GET', 'https://api.github.com/users/Felipesant');
//xhr.send(null);



//
/*xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {

        console.log(JSON.parse(xhr.responseText));
    }

}*/

// ===============  PROMISSES ==================

var minhaPromise = function() {
    return new Promise (function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/Felipesant');
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



minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });


// ====== Biblioteca Axios ===== Para capturar json

axios.get('https://api.github.com/users/Felipesant')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });