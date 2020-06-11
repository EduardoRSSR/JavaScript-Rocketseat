const usuarios = [
    {nome: 'Eduardo', idade: 28, empresa: 'SW Solutions'},
    {nome: 'PJ', idade: 29, empresa: 'SW Solutions'},
    {nome: 'Lucas', idade: 27, empresa: 'Facebook'},
]

const mapIdades = usuarios.map(usuario=>usuario.idade)

console.log(mapIdades)


const filterEmpresa = usuarios.filter(usuario => usuario.empresa === 'SW Solutions' && usuario.idade>28
)

console.log(filterEmpresa)

const findEmpresa = usuarios.find(usuario => usuario.empresa ==='Google') 

console.log(findEmpresa)


const filtroIdade = usuarios.filter(usuario=>{

    if((usuario.idade*2) < 55){
        return usuario;
    }
})


console.log(filtroIdade)

