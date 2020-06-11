//                              Estudo sobre operadores rest/spread


// 1- Instalando novo pacote em forma de plugin pois ainda não foram acoplados a versão principal do babel.
    //No terminal -> npm install @babel/plugin-proposal-object-rest-spread

// 2- Adicionar o plugin no .babelrc
    //"plugins": ["@babel/plugin-proposal-object-rest-spread"]




// REST 

    //Serve para pegar o resto das propriedades. (utilizando ...) Ex:

    const usuario = {
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    };
    
    
    const {nome, ...resto} = usuario; // obs: utilizando desestruturação para receber o objeto usuário.
    
    console.log(nome);
    console.log(resto);


    //aplicando em vetores

    const arr = [1,2,3,4]

    const [a, b, ...c] = arr;

    console.log(a)
    console.log(b)
    console.log(c)

    
    // aplicando em parâmetros de funções

        // exemplo sem rest...

    function soma(a,b,c){
        return a+b+c;
    }

    console.log(soma(1,2,3));

        // utilizando rest... para receber todos os parâmetros e arrow function e função .reduce para somar o vetor.
        
    function soma2(...rest){
        return rest.reduce((total, next) => total + next)
    }

    console.log(soma2(1,2,3,4,5)) // podendo adicionar mais números sem necessidade de incluir mais letras no input da função.


// SPREAD

    // Enquanto o rest pega o resto, o spread repassa as informações de um objeto ou array para outra estrutura de dados. Ex:

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]

    // Muito utilizado para criar um novo objeto, copiando as propriedades, e trocando alguma propriedade especifica. Ex:

const usuario1 = {
    nome: 'Eduardo',
    idade: 28,
    cidade:'RJ',
}

const usuario2 = {...usuario1, nome: 'Gabriel'};

console.log(usuario1)
console.log(usuario2)