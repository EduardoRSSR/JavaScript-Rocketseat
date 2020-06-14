
var app = window.document.getElementById('app');
var listElement = document.querySelector('#app ul')

  var inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('id', 'txtnome');
  inputElement.setAttribute('placeholder', 'Digite uma tarefa');

  app.appendChild(inputElement);
  
  var Button = document.createElement('input');
  Button.setAttribute('type', 'button');
  Button.setAttribute('id', 'txtbotao');
  Button.setAttribute('value','Adicionar');

  app.appendChild(Button);

 var tarefas = JSON.parse(localStorage.getItem('lista_tarefas'));
 
 rendertarefas();

function rendertarefas(){
    listElement.innerHTML=''

    for(tarefa of tarefas){
       
        var includeElement = document.createElement('li');

        var textElement = document.createTextNode(tarefa);
        
        var linkElement=document.createElement('a');
          linkElement.setAttribute('href','#');

        
        var linkText=document.createTextNode('Excluir')  

         linkElement.appendChild(linkText); 

         includeElement.appendChild(textElement)
         includeElement.appendChild(linkElement)
         

         listElement.appendChild(includeElement)

         let pos = tarefas.indexOf(tarefa);
         linkElement.setAttribute('onclick','excluirtarefas(' + pos + ')')

    }
}

 function addtarefas(){
    var addElement = inputElement.value;
    tarefas.push(addElement);
    inputElement.value=''

    rendertarefas();
    saveToStorage();
}
    
function excluirtarefas(pos){
  tarefas.splice(pos,1)
    rendertarefas();

    saveToStorage();
}

 var clicou = window.document.getElementById('txtbotao');
    clicou.onclick = addtarefas      

function saveToStorage(){
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas))
}

  