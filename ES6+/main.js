class List{    //Classe pai
    constructor(){
        this.data = [];
    }

add(data){
    this.data.push(data);
    console.log(this.data);
    }
}


class TodoList extends List{ //class herdando List
    constructor(){
        super(); //chama a classe pai
        this.user = 'Eduardo';
    }    

    mostraUser(){
        console.log(this.user);
    }
}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.add("tarefa");
    minhaLista.mostraUser(); 
}



const usuario1 = {
    nome: 'Eduardo',
    idade: 28,
    cidade:'RJ',
}

const usuario2 = {...usuario1, nome: 'Gabriel'};

console.log(usuario1)
console.log(usuario2)