
function buscaUser(){
var user = (window.document.getElementById('txtuser')).value;

carregando();

axios.get(`https://api.github.com/users/${user}/repos`)


.then(function(response){

    console.log(response);
    renderRepo(response.data,user);
})

.catch(function(error){
    console.warn('Usuário não encontrado');
    lista.innerHTML=('<p>Usuário não encontrado.</p>');


});

}

function renderRepo(repositories, user){
var lista = document.getElementById('tabela')
lista.innerHTML=(`<p>Segue abaixo os Repositórios encontrados do usuário <strong>${user}</strong>.</p>`)

    for(repo of repositories){
        var includeRepo = document.createElement('li');
        var textRepo = document.createTextNode(repo.name);
        includeRepo.appendChild(textRepo);
        lista.appendChild(includeRepo);
    }

}


function carregando(){
    
    var lista = document.getElementById('tabela')
    lista.innerHTML=""
    var includeRepo = document.createElement('li');
    var textRepo = document.createTextNode('Carregando...');
    includeRepo.appendChild(textRepo);
    lista.appendChild(includeRepo);
}   