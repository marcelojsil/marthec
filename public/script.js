
// === MENU RESPONSIVO
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Adiciona animação ao botão "Saiba Mais"
document.getElementById('saiba-mais').addEventListener('click', () => {
    alert('Fique por dentro das nossas soluções!');
});

// Validação do formulário de lead
document.getElementById('lead-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
});


