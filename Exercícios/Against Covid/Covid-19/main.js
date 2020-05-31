
var div1 = document.getElementById('d1');

axios.get('https://coronavirus-19-api.herokuapp.com/all')

.then(function(response){
    console.log(response);
    div1.innerHTML=(`<p>Casos no mundo: ${parseInt(response.data.cases).toLocaleString('pt-BR')} pessoas.`)
    div1.innerHTML+=(`<p>Mortes no mundo: ${parseInt(response.data.deaths).toLocaleString('pt-BR')} pessoas.`)
    div1.innerHTML+=(`<p>Recuperados no mundo: ${parseInt(response.data.recovered).toLocaleString('pt-BR')} pessoas.`)
})

.catch(function(error){
    console.log('error');
})
