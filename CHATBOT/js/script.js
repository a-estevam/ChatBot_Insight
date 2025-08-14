const chatName = (document.title = "EXECUÇÃO COM SEGURANÇA");

const avatarName = "PAPAGAIO DA SEGURANÇA";
let userName = "ANTONIO";
const directorName = "Florivaldo Junior";

const sec1 = document.querySelector(".sec01");
const sec2 = document.querySelector(".sec02");
const sec3 = document.querySelector(".sec03");
const sec4 = document.querySelector(".sec04");
const sec5 = document.querySelector(".sec05");
const sec6 = document.querySelector(".sec06");
const sec7 = document.querySelector(".sec07");
const sec8 = document.querySelector(".sec08");
const sec9 = document.querySelector(".sec09");
const sec10 = document.querySelector(".sec10");
const sec11 = document.querySelector(".sec11");
const sec12 = document.querySelector(".sec12");
const sec13 = document.querySelector(".sec13");



function textSec1() {
  sec1.innerHTML = `
    <div class="flex ">
        <img class="avatar" src="./img/avatar.png" alt="" srcset="">
    <div class="pergunta">
     <p>
      <b>${avatarName}</b></br>
    Olá, eu sou o Papagaio da Segurança e estou muito feliz em dar início à nossa campanha <b>Aprendeu, Repetiu e Agiu!</b>
    </p>
     </div>
     </div>`;
}

function textSec2() {
  sec2.innerHTML = `
     <div class="flex">
        <img class="avatar_blank" src="./img/avatar_blank.png" alt="" srcset="">
    <div class="pergunta">
     <p>
      <b>${avatarName}</b></br>
    Ah, e tem mais! Uma pessoa muito especial quer falar com você sobre o propósito desta campanha. Que tal atender essa ligação e descobrir quem é?
    </p>
     </div>
     </div>`;
}

function textSec3() {
  sec3.innerHTML = `
    <div class="flex resposta">
        <p>
            <b>VOCÊ</b> </br>
            clique aqui para aceitar
        <p/>

        <img class="aceitar" src="./img/check.svg">
    </div>
    `;
}

function textSec4() {
  sec4.innerHTML = `
    <div class="flex">
        <img class="avatar" src="./img/avatar.png" alt="" srcset="">
    <div class="pergunta">
     <p>
      <b>${avatarName}</b></br>
    Mas antes, me conta: como você gostaria de ser chamado(a)?  Pode ser seu nome ou apelido - você decide! 
    </p>
     </div>
     </div>`;
}

function textSec5() {
  sec5.innerHTML = `
    <div class="flex resposta">
        <p>
            <b>VOCÊ</b>
        </p>
        <br>
        <div class="flex2">
            <input type="text" placeholder="digite seu nome" class="nomeInput">
            <img class="aceitar" src="./img/check.svg" style="cursor:pointer">
        </div>
    </div>
    `;
    const btnAceitar = sec5.querySelector(".aceitar");
const inputNome = sec5.querySelector(".nomeInput");

btnAceitar.addEventListener("click", () => {
    const valor = inputNome.value.trim();
    if (valor) {
      userName = valor; // Atualiza a variável global
      console.log("Nome digitado:", userName);

      setTimeout(textSec6, 1000);
    } else {
      alert("Por favor, digite seu nome antes de continuar.");
    }
  });
}


function textSec6() {
  sec6.innerHTML = `
    <div class="call-screen">
  <div class="profile">
    <img src="./img/Florivaldo Junior.jpg" alt="Florivaldo Junior">
  </div>
  <div class="name">${directorName}</div>
  <div class="buttons">
    <button class="accept"><i class="fa fa-phone"></i></button>
    <button class="reject"><i class="fa fa-times"></i></button>
  </div>
</div>
    
    `;
}

function textSec7() {
  sec7.innerHTML = `
    <div class="flex">
        <img class="avatar" src="./img/avatar.png" alt="" srcset="">
    <div class="pergunta">
     <p>
      <b>${avatarName}</b></br>
    ${userName}, eu te disse que essa mensagem era muito especial...
Aqui na BRF, queremos que a segurança seja a sua prioridade em cada decisão do seu dia dia a dia. 

    </p>
     </div>
     </div>`;
}

function textSec8() {
  sec8.innerHTML = `
    <div class="flex">
        <img class="avatar_blank" src="./img/avatar_blank.png" alt="" srcset="">
    <div class="pergunta">
     <p>
      <b>${avatarName}</b></br>
    E agora que você já conhece o motivo e o compromisso que assumimos com você, quero que você conheça o logo da nossa campanha. 

    </p>
     </div>
     </div>`;
}

function textSec9() {
  sec9.innerHTML = `
    <div class="flex resposta">
        <p>
            <b>${userName}</b> </br>
            clique aqui para aceitar
        <p/>

        <img class="aceitar" src="./img/check.svg">
    </div>
    `;
}

function textSec10() {
  sec10.innerHTML = `
    <div class="flex">
        <img class="avatar" src="./img/avatar.png" alt="" srcset="">
    <div class="pergunta">
     <img class="" src="./img/LOGO+PAPAGAIO.png" alt="" srcset="">
     </div>
     </div>`;
}

function textSec11() {
  sec11.innerHTML = `
    <div class="flex">
        <img class="avatar_blank" src="./img/avatar_blank.png" alt="" srcset="">
    <div class="pergunta">
     <p>
      <b>${avatarName}</b></br>
    Bacana, né? Fiquei lindão nesse logo da campanha. </br>
Mas tem um detalhe: eu ainda não tenho um nome. E como vou estar ao seu lado todos os dias, quero que você me ajude a escolher um.

    </p>
     </div>
     </div>`;
}

function textSec12() {
  sec12.innerHTML = `
    <div class="flex">
        <img class="avatar_blank" src="./img/avatar_blank.png" alt="" srcset="">
    <div class="pergunta">
     <p>
      <b>${avatarName}</b></br>
    No nosso próximo encontro já saberemos qual meu nome. Até lá! 

    </p>
     </div>
     </div>`;
}

function textSec13() {
  sec13.innerHTML = `
    <div class="flex resposta">
        <p>
            <b>${userName}</b> </br>
            clique aqui para sair
        <p/>

        <img class="aceitar" src="./img/check.svg">
    </div>
    `;
}

setTimeout(() => {
  textSec1();
}, 1000);

setTimeout(() => {
  textSec2();
}, 2000);

setTimeout(() => {
  textSec3();
  aceito();
}, 3000);

function aceito() {
  const aceitei = document.querySelectorAll(".aceitar");
  aceitei.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(textSec4, 1000);
      setTimeout(textSec5, 2000);
    });
  });
}



// textSec4();
// textSec5();
// textSec6();
// textSec7();
// textSec8();
// textSec9();
// textSec10();
// textSec11();
// textSec12();
// textSec13();
