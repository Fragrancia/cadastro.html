document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
   
    const mensagemErro = document.getElementById('mensagemErro');
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    mensagemErro.style.display = 'none';
    mensagemSucesso.style.display = 'none';
    
    
    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
        mensagemErro.innerText = 'Todos os campos são obrigatórios.';
        mensagemErro.style.display = 'block';
    } else if (senha !== confirmarSenha) {
        mensagemErro.innerText = 'As senhas não correspondem.';
        mensagemErro.style.display = 'block';
    } else {
      
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.innerText = 'Cadastro realizado com sucesso!';
        
       
        document.getElementById('formCadastro').reset();
    }
});
