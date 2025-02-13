### Site da Marthec desenvolvido em ReactJS.

# 1º Iniciar o projeto: npx create-react-app 'nome_da_empresa'
# 2º Instale o gh-pages: npm install gh-pages --save-dev

# 3º Cole em package.json:

    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }

# 4º Adicone ao package.json:

    "homepage": "https://'usuario_do_github'.github.io/'nome_do_repositório'"

# 5º Execute: npm run deploy

# 6º Faça o add, commit e push

# Configuração do GitHub Pages conforme abaixo
![Configuração GitHub Pages](/public/gh-pages.png)



### Acesso online do BD
CREATE USER 'seu_usuario'@'%' IDENTIFIED BY 'sua_senha';
GRANT ALL PRIVILEGES ON seu_banco_de_dados.* TO 'seu_usuario'@'%';
FLUSH 