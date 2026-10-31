# Portfólio - Gerdson Luiz

Site pessoal desenvolvido para a disciplina de Desenvolvimento Web (Universidade Braz Cubas).

- **Site publicado:** https://gerdsonluiz1-ops.github.io/site-cp3/
- **Repositório:** https://github.com/gerdsonluiz1-ops/site-cp3
- **Tag da entrega:** `cp3-entrega`

## Páginas

- `index.html` - Home
- `graficos.html` - SVG e Canvas
- `multimidia.html` - Áudio, vídeo e iframe do YouTube
- `formulario.html` - Formulário de contato
- `curriculo.html` - Currículo

## Organização

```
css/estilos.css   estilos (Flexbox, Grid, media queries e tema escuro)
js/scripts.js     tema claro/escuro, validação do formulário e canvas
```

## Feature JavaScript com localStorage: tema claro/escuro

**O que faz:** o botão no cabeçalho alterna entre o tema claro e o escuro. A escolha é salva no navegador e aplicada automaticamente nas próximas visitas, em todas as páginas.

**Dado persistido:**

| Chave | Valores | Descrição |
|---|---|---|
| `tema` | `claro` ou `escuro` | Tema escolhido pelo visitante |

**Como testar:**
1. Abra qualquer página e clique em "Tema escuro".
2. Recarregue a página (F5): o tema escolhido continua.
3. Navegue para outra página: o tema é mantido.
4. No DevTools (F12), vá em Application → Local Storage e veja a chave `tema`.

## Validação do formulário

Ao enviar, o `scripts.js` confere:

- nome com pelo menos 3 caracteres;
- e-mail com `@` e `.`;
- telefone (opcional) no formato `11 99999-9999`;
- senha com pelo menos 6 caracteres.

O resultado aparece na própria página, em uma mensagem vermelha (erros) ou verde (sucesso), sem uso de `alert`.

## Versionamento

Histórico com commits descritivos, `.gitignore` configurado e a tag `cp3-entrega` marcando o estado da entrega.
