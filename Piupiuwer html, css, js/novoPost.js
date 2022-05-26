const caixadopost = document.querySelector(".caixadopostnovo");

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

const novoPiu = () => {
  const text = document.querySelector(".novopost").value;

  if (text.length > 0 && text.length < 140) {
    
    const html = `<div id="1" class="piu">
    <img src="fotoperfil.jpeg" class="fotodeperfil">
    <div class="caixadopiu">
    <div class="textodopiu">
    <div class="nomeeuser">
    <b class="nome">Ana Paula</b>
    <p class="user">ap_arejano</p>
    </div><div class="mensagem">
    <p class="textodamensagem">${text}</p>
    </div>
    </div>
    <div class="interacoes">
    <button class="botaoLike">
    <img src="coracaoVazio.png" class="iconeLike">
    <p class="contadorLike">0</p>
    </button>
    <button class="botaoDeletar">
    <img src="deletar.png" class="iconeDeletar">
    </button>
    </div>
    </div>
    </div>`;

    const piuS = document.querySelector(".piuS");
    piuS.insertAdjacentHTML("afterbegin", html);

    
  } 
  else {
    const html = document.getElementById("aviso");
    html.innerHTML = "Voce nao pode enviar";
  }
};

const contadorFuncional = () => {
  const text = document.querySelector(".novopost").value;
  const html = document.getElementById("contador");
  html.innerHTML = text.length + "/140";
};
