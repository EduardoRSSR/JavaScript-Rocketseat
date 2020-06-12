//                                      Estudo sobre arrow functions
    

    //obs: utilizando um vetor e a função map para percorrer o vetor e manipula-lo.
    const arr = [1, 3, 5, 9, 7, 2];

    var newArr = arr.map(function(item) {
        return item*2;
    });
    
    // Reduzindo a função utilizando uma arrow function
    
    var newArr = arr.map((item) => {
        return item*2;
    });
    
    // Quando a função só passa um parâmetro(nesse caso item), não precisa colocar os parênteses
    
    var newArr = arr.map(item => {
        return item*2;
    });
    
    // Quando retorna apenas uma informação pode colocar o retorno após a seta, sem utilizar chaves.
    
    var newArr = arr.map(item => item*2);
    
    console.log(newArr)