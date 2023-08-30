const  button = document.querySelector('.btnadd')
const  input = document.querySelector('.input')
const listaCompleta = document.querySelector('.List')

let minhaListadeItens = []

function adicionarNovaTarefa(){
    minhaListadeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefa()

    
}

function mostrarTarefa(){

let novaLi = ''

minhaListadeItens.forEach((item, posicao) => {
    novaLi = novaLi + `

    <li class="task-list ${item.concluida && "done"}">
    <img src="./img/checked.png" onclick="concluirTarefa(${posicao})">
    <p>${item.tarefa}</p>
    <img src="./img/trash.png" onclick="deletarItem(${posicao})">
    </li>   
    
    `
})

listaCompleta.innerHTML = novaLi

localStorage.setItem('lista', JSON.stringify(minhaListadeItens)) 

}

function concluirTarefa(posicao){

        minhaListadeItens[posicao].concluida = !minhaListadeItens[posicao].concluida

        mostrarTarefa()

}

function deletarItem(posicao){

    minhaListadeItens.splice(posicao, 1)

    mostrarTarefa()

}

function recarregarTarefas(){

    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhaListadeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefa()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)