let add = document.getElementById("Enter");

let tarefa = document.querySelector("#board");

let excluir = document.querySelector('.icon');

let value = document.getElementById("novaTarefa");





    
add.addEventListener('click', function(e){
    let valor = value.value;
    if (valor.length > 0) {

        

        tarefa.innerHTML += `<div class="tarefa">
     <div class="col-md-8">${valor}</div>
     <div class="col-md-2"><img class="icon" src="img/check.png"></div>
    </div>`

     value.value = "";   
    } else {
        window.alert("A sua tarefa está vazia, tente novamente");
        value.style.borderColor = "red";
    }

    
 })





 document.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
      document.getElementById("Enter").click();
    }
  });


  tarefa.addEventListener('click',function(e){
    event.target.parentNode.parentNode.remove(tarefa); 
    
    tarefa = "";
})

// Remove the event handler from <div>




  
