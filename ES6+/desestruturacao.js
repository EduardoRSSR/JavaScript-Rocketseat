//                               Estudo sobre o conceito de desestruturação

const usuario={
    nome: 'Eduardo',
    idade: 28,
    endereco: {
        cidade: 'Rio das Ostras',
        estado: 'RJ',
    },
};

// se eu quisesse acessar o nome e idade por exemplo, poderia:

var nome = usuario.nome;
var idade = usuario.idade;

console.log( nome, idade);

// Porém com o conceito de desestruturação do ES6+ podemos utilizar dessa forma:

var {nome, idade} = usuario

console.log(nome, idade);

// se eu quisesse pegar a cidade:

var {nome, endereco: {cidade}} = usuario

console.log(nome, cidade);


// Usando a desestruturação em funções:

    // exemplo não utilizando desestruturação

    function mostraNome(usuario){
        console.log(usuario.nome, usuario.idade)
    }

    mostraNome(usuario);

    // mesmo exemplo utilizando desestruturação

    function mostraNome2( {nome, idade}){
        console.log (nome, idade)
    }
    mostraNome2(usuario);