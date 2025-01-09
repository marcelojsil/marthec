<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style.css" />
   
    <title>Marthec | Sites para Empresas</title>
</head>
<body>

<!-- ### ARQUIVO DO HEADER ### -->
<header><?php include_once('./views/header.php'); ?></header>


<!-- ### CORPO DO INDEX ### -->
<div class="content">
        <h1>Exemplo de Conteúdo</h1>
        <p>Role para baixo para ver o botão de voltar ao topo aparecer.</p>
        <!-- Conteúdo adicional para permitir rolagem -->
        <div style="height: 1500px;"></div>
    </div>



<!-- ### BOTÕES FIXOS ### -->
<a href="https://wa.me/5512991022315" id="whatsappBtn" class="whatsappBtn" target="_blank" title="Fale conosco no WhatsApp">
    <p>WhatsApp</p>
    <!--<img src="whatsapp-icon.png" alt="WhatsApp" />-->
</a>
<button id="scrollToTopBtn" class="scrollToTopBtn" title="Voltar ao topo">↑</button>

<!-- ### ARQUIVO DO FOOTER ### -->
<footer><?php include_once('./views/footer.php'); ?></footer>

<script src="src/js/botao-rolagem.js"></script>
<script src="src/js/whatsapp.js"></script>
</body>
</html>