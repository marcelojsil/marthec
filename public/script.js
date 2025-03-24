
// === MENU RESPONSIVO
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Adiciona animação ao botão "Saiba Mais"
document.getElementById('em-breve').addEventListener('click', () => {
    alert('Em breve mais serviços relacionados ao mundo digital! Siga-nos nas redes sociais e acompanhe.');
});

// Validação do formulário de lead
document.getElementById('lead-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
    e.target.reset(); // Limpa o formulário
});


