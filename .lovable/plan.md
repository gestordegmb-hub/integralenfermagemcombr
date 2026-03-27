

## Plano: Atualizar arquivos HTML e CSS para download

### O que será feito
Regenerar os dois arquivos `/mnt/documents/integral-clinica.html` e `/mnt/documents/integral-clinica.css` refletindo o estado atual do site — sem a seção de convênios, com os depoimentos atualizados (imagens e textos reais), e com todos os horários corretos.

### Alterações em relação à versão anterior
- **Removida** a seção "Convênios" (HTML e CSS)
- **Removida** a pergunta sobre convênios no FAQ
- **Atualizada** a seção Depoimentos com nomes e relatos reais (Vinicius, Monique, Janaína, Fabio) e referências às imagens `depoimentos_1.png` a `depoimentos_4.png`
- **Atualizada** a navegação (sem link de convênios)
- **Atualizado** o footer (sem link de convênios)

### Estrutura das seções (8 seções)
1. Hero
2. Sobre
3. Especialidades
4. Depoimentos (atualizada)
5. Blog
6. Agendamento
7. FAQ (sem convênios)
8. Localização

### Arquivos gerados
1. **`integral-clinica.css`** — Todo o CSS do site
2. **`integral-clinica.html`** — HTML com `<link>` para o CSS externo e JS vanilla para o menu

### Nota sobre imagens
As imagens dos depoimentos serão referenciadas como `depoimentos_1.png` etc. O usuário precisará colocar esses arquivos na mesma pasta do HTML para que funcionem.

