

## Plano: Separar HTML e CSS em dois arquivos

### O que será feito
Dividir o arquivo `integral-clinica.html` em dois arquivos independentes:
1. **`integral-clinica.html`** — apenas o HTML, com um `<link>` para o CSS externo
2. **`integral-clinica.css`** — todo o CSS que está dentro da tag `<style>` (linhas 10-196)

### Como
1. Criar `/mnt/documents/integral-clinica.css` com todo o conteúdo CSS (linhas 11-195 do arquivo atual)
2. Criar `/mnt/documents/integral-clinica.html` (substituindo o atual) removendo o bloco `<style>...</style>` e adicionando `<link rel="stylesheet" href="integral-clinica.css">` no `<head>`

### Resultado
Dois arquivos prontos para download, funcionais quando colocados na mesma pasta.

