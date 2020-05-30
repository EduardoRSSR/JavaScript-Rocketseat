
var idade = window.document.getElementById('txtidade');

function idadePromise(idade){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(idade.value >= 18){
                resolve('Maior de idade');
            }else if(idade.value <18){
                reject('Menor de idade')
            }
        },2000);
    });

}

idadePromise(idade)

.then(function(response){
    window.alert(response);
})

.catch(function(error){
    window.alert(error);

});




