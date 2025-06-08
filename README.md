# @fexz/search-input

Cria um sistema de busca dinâmico: conforme você digita no campo de pesquisa, as divs visíveis são filtradas automaticamente com base no texto digitado.

---

## Instalação

```bash
npm install @fexz/search-input
```

---

## Como Usar

```html
<input id="search-input" placeholder="Buscar..." />
<div class="folder"><p>Primeira Div</p></div>
<div class="folder"><p>Segunda Div</p></div>
```

```js
import { searchBar } from '@fexz/search-input';
searchBar();
```

---

## Observações

- O campo de busca deve ter o id `search-input`.
- As divs a serem filtradas devem ter as classes `.folder`, `.search` ou `.search-result`.
- > **Atenção:** Todas as divs a serem filtradas devem conter um elemento `<p>` dentro delas. Caso contrário, pode ocorrer erro ao tentar acessar o texto para comparação.

---

## Explicação do Código

### 📌 O que o código faz?
- Cria um sistema de busca onde, conforme você digita no campo de pesquisa, as divs visíveis vão sendo filtradas com base no texto que foi digitado.

---

## Licença

ISC

---

## Contribua

Sugestões, melhorias ou correções? Abra uma issue ou pull request em [https://github.com/felipeassisdev/SearchInput](https://github.com/felipeassisdev/SearchInput)