

- npm install gh-pages --save-dev

- inserir em package.json

        "name": "marthecweb",
          "version": "0.1.0",
   -->>   "homepage": "https://marcelojsil.github.io/react-gh-pages",
          "private": true,


        "scripts": {
    -->>  "predeploy": "npm run build",
    -->>  "deploy": "gh-pages -d build",

- git add --all
- git commit -m "message"
- git branch -M main
- git push origin main

- npm run deploy

- alterar no Github a branch de main para gh-pages