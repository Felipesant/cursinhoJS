//Começando uma requisição Ajax - Este método da acesso ao Ajax para pegar dados do servidor !!!
var xhr = new XMLHttpRequest();

// Esse é o método para buscar os dados da URL - Passando o primeiro parâmetro com método GET para pegar a URL
xhr.open('GET', 'https://api.github.com/users/Felipesant');
xhr.send(null);

//
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {

        console.log(JSON.parse(xhr.responseText));
    }

}