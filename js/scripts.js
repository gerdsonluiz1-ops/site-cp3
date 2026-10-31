// ===== Tema claro/escuro (salvo no localStorage) =====
const botaoTema = document.getElementById('btn-tema');

function aplicarTema(tema) {
    if (tema === 'escuro') {
        document.body.classList.add('escuro');
        botaoTema.textContent = 'Tema claro';
    } else {
        document.body.classList.remove('escuro');
        botaoTema.textContent = 'Tema escuro';
    }
}

aplicarTema(localStorage.getItem('tema'));

botaoTema.addEventListener('click', function () {
    const novoTema = document.body.classList.contains('escuro') ? 'claro' : 'escuro';
    localStorage.setItem('tema', novoTema);
    aplicarTema(novoTema);
});

// ===== Validação do formulário (só na página formulario.html) =====
const form = document.getElementById('form-contato');

if (form) {
    const msg = document.getElementById('mensagem-form');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const tel = document.getElementById('tel').value.trim();
        const senha = document.getElementById('password').value;
        const erros = [];

        if (nome.length < 3) {
            erros.push('O nome deve ter pelo menos 3 caracteres.');
        }
        if (!email.includes('@') || !email.includes('.')) {
            erros.push('Digite um e-mail válido.');
        }
        if (tel !== '' && !/^[0-9]{2} [0-9]{5}-[0-9]{4}$/.test(tel)) {
            erros.push('Telefone no formato 11 99999-9999.');
        }
        if (senha.length < 6) {
            erros.push('A senha deve ter pelo menos 6 caracteres.');
        }

        if (erros.length > 0) {
            msg.className = 'msg-erro';
            msg.innerHTML = erros.join('<br>');
        } else {
            msg.className = 'msg-ok';
            msg.textContent = 'Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso.';
            form.reset();
        }
    });
}

// ===== Canvas (só na página graficos.html) =====
const canvas = document.getElementById('meuCanvas');

if (canvas) {
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 300, 0);
    gradient.addColorStop(0, '#0c4a6e');
    gradient.addColorStop(1, '#0284c7');
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 10, 280, 160);

    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('Canvas Renderizado!', 150, 60);

    ctx.beginPath();
    ctx.arc(150, 110, 25, 0, 2 * Math.PI);
    ctx.fillStyle = '#38bdf8';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}
