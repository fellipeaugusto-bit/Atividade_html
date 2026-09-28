// confere o e-mail e a senha pra ver se está correto.
const emailCerto = 'fellipe270680@gmail.com';
const senhaCerta = '12345678';

// Pegando as info da página pelo id de cada um
const formulario = document.getElementById('form-login');
const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
const caixaLembrar = document.getElementById('lembrar');
const mensagem = document.getElementById('mensagem');

// Se a pessoa marcou "Lembrar-me", já deixa o e-mail preenchido
const emailSalvo = localStorage.getItem('emailLembrado');
if (emailSalvo) {
  campoEmail.value = emailSalvo;
  caixaLembrar.checked = true;
}

// Mostra um texto embaixo do botão. pode ser 'erro' ou 'sucesso'
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = 'mensagem ' + tipo;
}

// Isso roda quando a pessoa clica em ENTRAR
formulario.addEventListener('submit', function (evento) {
  // Impede a página de recarregar sozinha
  evento.preventDefault();

  const email = campoEmail.value.trim().toLowerCase();
  const senha = campoSenha.value;

  // caso algum campo ficar vazio
  if (email === '' || senha === '') {
    mostrarMensagem('Ops! Preencha o e-mail e a senha para continuar.', 'erro');
    return;
  }

  // caso o e-mail e a senha estiver certo
  if (email === emailCerto && senha === senhaCerta) {
    mostrarMensagem('Tudo certo! Bem-vindo(a) de volta.', 'sucesso');

    // aqui guarda ou esquece o e-mail, dependendo do "Lembrar-me"
    if (caixaLembrar.checked) {
      localStorage.setItem('emailLembrado', email);
    } else {
      localStorage.removeItem('emailLembrado');
    }
  } else {
    mostrarMensagem('E-mail ou senha incorretos. Confira e tente de novo.', 'erro');
  }
});
