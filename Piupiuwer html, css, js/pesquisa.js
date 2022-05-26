function selecao(){
    const resultado = document.getElementsByClassName("piu")
    for(let i = 0; i < resultado.length; i++){
        const piu = document.getElementById(i)
        const username = piu.getElementsByClassName("user")[0].innerText
        console.log(username)
        const foidigitado = document.getElementsByClassName("pesquisa")[0].value
        if(username.toLowerCase().indexOf(foidigitado.toLowerCase())> -1){
            piu.style.display = "block"
        }
        else{
            piu.style.display = "none"
        }
    }
}

document.getElementsByClassName("pesquisa")[0].onkeyup = selecao
console.log(document.getElementsByClassName("pesquisa")[0])


