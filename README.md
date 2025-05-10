# 🧠 Explicação do Código de Pesquisa 🧠

### 📌 O que o código faz?
- Cria um sistema de busca onde, conforme você digita no campo de pesquisa, as divs visíveis vão sendo filtradas com base no texto que foi digitado.

### 📜 Linha por Linha

#### 🔁 Carregando tudo só quando a página estiver pronta
`document.addEventListener("DOMContentLoaded", () => {`

- *`document.addEventListener(...):`* Espera o carregamento completo da estrutura HTML.
- *`"DOMContentLoaded":`* Dispara quando o HTML já está pronto para ser manipulado.
- *`() => { ... }:`* Função que será executada nesse momento.

#### 🔍 Pegando os elementos
`const searchInput = document.getElementById("search-input");`

- Pega o campo de input onde o usuário digita.
- *`searchInput`* é a variável que vai representar esse campo no script.

`const allFolders = document.querySelectorAll(".folder");`
- Seleciona todas as divs com a classe *`folder.`*
- *`allFolders`* vira uma lista (NodeList) com todas as divs.

#### 👂 Detectando o que foi digitado
- Escuta o evento *`"input"`* (toda vez que algo for digitado no campo).
- A cada letra digitada, executa a função.

``const searchTerm = searchInput.value.toLowerCase();``
- Lê o texto digitado e transforma em minúsculo para evitar erro com letras maiúsculas/minúsculas.

#### 🔎 Verificando div por div
``allFolders.forEach(folder => {``
- Roda o código dentro dela **para cada div**.

``const folderText = folder.querySelector("p").textContent.toLowerCase();``
- Acha o *``<p>``* dentro da div (onde está o nome).
- Pega o texto desse parágrafo e deixa tudo minúsculo também.

#### ✅ Se bate, mostra. Se não bate, esconde.
``const matches = folderText.includes(searchTerm);``
- Verifica se o texto digitado **existe dentro do nome da div.**

``const parentLink = folder.closest("a");
if (parentLink) {
    parentLink.style.display = matches ? "flex" : "none";
} else {
    folder.style.display = matches ? "flex" : "none";
}``

- Se a div estiver dentro de um link *``(<a>)``*, aplica o *``display``* no link inteiro.
- Se não tiver, aplica direto na div.

## 🧠 Resumão 🧠

> Digitou algo no campo → o JS checa todas as divs → se o nome bater com o que foi digitado, mostra; se não bater, esconde!

# ⚠️ Importante ⚠️
- Substitue os ID desse código pelo seu código!