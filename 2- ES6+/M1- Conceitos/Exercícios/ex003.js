// 3.1
const arr = [1, 2, 3, 4, 5];
newArr=arr.map(item=>item + 10);

console.log(newArr)

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

var mostra = usuario => usuario.idade;


console.log(mostra(usuario))

// 3.3
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

const usuario2 = (nome = 'Diego', idade = 18) => ({nome, idade})
console.log(usuario2(nome, idade))
console.log(usuario2(nome))

// 3.4

const promise = () => new Promise((resolve, reject) => resolve('teste'))
console.log(promise())

