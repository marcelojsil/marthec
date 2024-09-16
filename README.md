

- npm install gh-pages --save-dev

- inserir em package.json

        "name": "marthecweb",
          "version": "0.1.0",
   -->>   "homepage": "https://marcelojsil.github.io/react-gh-pages",
          "private": true,


        "scripts": {
    -->>  "predeploy": "npm run build",
    -->>  "deploy": "gh-pages -d build",

- npm run deploy