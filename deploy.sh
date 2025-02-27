#!/bin/bash

# Executa npm run deploy
echo "Executando npm run deploy..."
npm run deploy

# Adiciona todas as mudanças
echo "Adicionando mudanças com git add --all..."
git add --all

# Pergunta a mensagem de commit
read -p "Digite a mensagem do commit: " commitMessage

# Executa o commit
echo "Fazendo commit com a mensagem: \"$commitMessage\""
git commit -m "$commitMessage"

# Faz o push para a branch main
echo "Fazendo push para a branch main..."
git push origin main

echo "Deploy concluído com sucesso!"
