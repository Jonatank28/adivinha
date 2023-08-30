let n = document.querySelector("#numero")
let t1p = document.querySelector('.t1 div')
let t2 = document.querySelector(".t2")
let t1 = document.querySelector(".t1")
let p = document.querySelector(".t2 p")
let ramdom = Math.round(Math.random()*10)
let quantidade = 1
let lista = []
let p2 = " "

let btn = document.querySelector('#btn')
btn.addEventListener('click', handleClick)

function handleClick(event){
    event.preventDefault()
    p2.innerHTML = ""
    console.log(ramdom)
    console.log(Number(n.value))
    lista.push(Number(n.value))
    console.log(quantidade)
    if(Number(n.value.length) == 0 || Number(n.value) > 10){
        alert(`[ERRO!!!] Dados invalidos`)
    } else if(Number(n.value) == ramdom){
        t1.classList.toggle("hidden")
        t2.classList.toggle("hidden")
        p.innerHTML = (`Você acertou em ${quantidade} tentativas.`)
        ramdom = Math.round(Math.random()*10)
    } else{       
        p2 = document.createElement('p')
        t1p.appendChild(p2)
        p2.innerHTML = (` Números já tentados: ${lista}`)  
        n.value = ""  
        n.focus()   
    }
    quantidade ++
}

