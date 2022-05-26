async function getData() {
    const response = await fetch ("https://arcane-sierra-77337.herokuapp.com/data");
    
    const posts = await response.json();

    for(i = 0; i < posts.length; i++){
        piu(posts[i].id,posts[i].user,posts[i].text,posts[i].created_at,posts[i].updated_at,i)
    }
}

function piu(id, user, text, created_at, updated_at,i) {
    const foto = document.createElement('img')
    const nome = document.createElement('b')
    const username = document.createElement('p')
    const textodopiu = document.createElement('div')
    const mensagem = document.createElement('div')
    const textodamensagem = document.createElement("p")
    const caixadopiu = document.createElement('div')
    const nomeeuser = document.createElement('div')
    const umpiu = document.createElement('div')
    const like = document.createElement('button')
    const deletar = document.createElement('button')
    const iconelike = document.createElement('img')
    const contadorLike = document.createElement('p')
    const iconedeletar = document.createElement('img')
    const interacoes = document.createElement('div')

    
    umpiu.id = i

    foto.src = user.photo
    nome.innerText = `${user.first_name}`
    username.innerText = `${user.username}`
    textodamensagem.innerText = `${text}`
    iconelike.src = "coracaoVazio.png"
    iconedeletar.src = "deletar.png"
    contadorLike.innerText = "0"

    const wrapperpiu = document.querySelector(".piuS")
    
    foto.setAttribute("class","fotodeperfil")
    nome.setAttribute("class","nome")
    username.setAttribute("class","user")
    mensagem.setAttribute("class","mensagem")
    caixadopiu.setAttribute("class","caixadopiu")
    nomeeuser.setAttribute("class","nomeeuser")
    umpiu.setAttribute("class","piu")
    textodopiu.setAttribute("class","textodopiu")
    textodamensagem.setAttribute("class","textodamensagem")
    like.setAttribute("class","botaoLike")
    deletar.setAttribute("class","botaoDeletar")
    iconelike.setAttribute("class","iconeLike")
    iconedeletar.setAttribute("class","iconeDeletar")
    contadorLike.setAttribute("class","contadorLike")
    interacoes.setAttribute("class","interacoes")

    const deletarPiu = () => {
        const piu = document.getElementById(i)
        piu.style.display = "none"
    }
    
    const novoLike = () => {

        if(contadorLike.textContent == "0"){
            let likeValue = 0;
            let newValue = Number(likeValue) + 1;
            like.classList.add ("like");
            contadorLike.innerHTML = newValue;
            iconelike.src = "coracaoCheio.png";
        }
        
        else{
            let likeValue = 1;
            let newValue = Number(likeValue) - 1;
            like.classList.add ("like");
            contadorLike.innerHTML = newValue;
            iconelike.src = "coracaoVazio.png";
        }
        
    }
    
    like.addEventListener("click",novoLike) 
    deletar.addEventListener("click",deletarPiu)


    wrapperpiu.appendChild(umpiu)
    umpiu.appendChild(foto)
    umpiu.appendChild(caixadopiu)
    caixadopiu.appendChild(textodopiu)
    caixadopiu.appendChild(like)
    caixadopiu.appendChild(deletar)
    caixadopiu.appendChild(interacoes)
    interacoes.appendChild(like)
    interacoes.appendChild(deletar)
    like.appendChild(iconelike)
    like.appendChild(contadorLike)
    deletar.appendChild(iconedeletar) 
    textodopiu.appendChild(nomeeuser)
    nomeeuser.appendChild(nome)
    nomeeuser.appendChild(username)
    textodopiu.appendChild(mensagem)
    mensagem.appendChild(textodamensagem)

}

getData();

