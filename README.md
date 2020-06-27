# portifolio

# Você tem vontade de deixar seu curriculo visivel e sem custo??

## O github esta aqui para te salvar!

<p> Assim como eu, muita gente não sabe que o github tem esse recurso tão importante para os desenvolvedores inicias que não tem onde hospedar seus projetos para conseguir mostrar algo mais facil.</p>

## Como consigo hospedar?
## O processo é simples!

<p> Para hospedar o curriculo eu recomendo que sejá no link direto. <br> Você tem que criar um repositorio com o seguinte nome: NomeDoSeuPerfil.github.io e nele colocar seus arquivos.</p>

## OK fiz isso, mas como eu vou ver??

<p>No navegador digite: o nome do repositorio do mesmo jeito que você crio e pronto!! Simples não ?!</p>

## Tá mas eu não quero hospedar so o meu curriculo

<p>Para ficar mais incrivel, o github disponibiliza a hospedagem de seus repositorios e ainda podendo escolhar qual branch usar na publicação.</p>

<h3>Vamos aos passos</h3>

<p>Entre no repositorio que você quer publicar, clique em <b>settings</b> no menu desça ate encontrar o titulo <b>GitHub Pages</b> e no select da <b>Source</b> selecione a branch que você quer. Para confirmar se foi publicado digite o seguinte link no navegador: NomeDoSeuPerfil.github.io/NomeDoRepositorio</p>

## Pronto seu projeto já pode ser visualizado

## Limitações

<p> Sem tocar no assunto de quantidade de acessos simultaneos, ele se limita a apenas hospedar o Front-End da sua aplicação. Mas para quem não tem onde colocar isso é um otimo recurso</p>

## Link para ver um exemplo

<p>Caso queira conferir como o recurso funciona, você pode acessar meu curriculo e nele tem os meus repositorios hospedados no github pages.
link: <a href="https://brunohendias.github.io">Curriculo</a></p>

## Pensou que acabo ?!

<p> Haha ainda vou dar uma ajuda para quem programa usando o Framework Vue.js a também poder usar esse recurso.</p>

<h3>Então vamos lá!</h3>

<p> Primeiramente gere o build do seu projeto digitando <b>NPM RUN BUILD</b> na raiz do seu projeto. Remova os arquivos dentro da pasta dist para a raiz do projeto para que o github consiga acessar a index.html <br> Recomendo subir esses arquivos em outra branch ou em outro repositorio por questões de organização</p>

<p> Temos uma ressalva com o path dos arquivos e tals mas calma que vou te ajudar também</p>

<p> Na raiz do projeto você cria um arquivo chamado <b>vue.config.js</b> nele você coloca todas as configurações nescessarias para sua aplicacao conseguir encontrar os arquivos. Segue um link para saber como configura esse arquivo: <a href="https://cli.vuejs.org/config/#publicpath">Vue Config</a>. Não vou tratar desse assunto pois é extenso</p>

## Bom aproveito desse recurso e lembrem-se o compartilhamento de conhecimento é bom para todos.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
