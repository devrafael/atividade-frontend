function abrirModal(){
    const modal = document.querySelector('.janela-modal');
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contais('.cancela')){
            modal.classList.remove('abrir')
        }
    })
}

function validar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var endereco = document.getElementById("endereco"); 
    var cpf = document.getElementById("cpf");
    var data = document.getElementById("data");
    var curso = document.getElementById("curso");
    
    if (nome.value == "" || email.value == "" || endereco.value == "" || cpf.value == "" || data.value == "" || curso.value == ""){
        alert("Preencha todos os campos");
    }
}
