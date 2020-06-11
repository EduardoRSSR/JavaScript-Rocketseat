// Ex 5.1
const arr = [1, 2, 3, 4, 5, 6]

const [a, ...b] = arr;
console.log(a);
console.log(b);

const soma = (...rest) => rest.reduce((total, next) => total+next)

    console.log(soma(1,2,3,4,5,6,7,8,9,10))

    // Ex 5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

const usuario2 = {...usuario, nome: 'Eduardo', endereco: {cidade: 'Rio das Ostras', uf:'RJ', pais:'Brasil'}};
console.log(usuario2)

const usuario3 = {...usuario, endereco:{...usuario.endereco, cidade:'Lontras'}}
console.log(usuario3)
