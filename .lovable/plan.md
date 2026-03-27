

## Plano: Gerar HTML estático completo do site

### O que será feito
Gerar um arquivo `.html` único e autossuficiente com todo o conteúdo do site da Integral Clínica, incluindo CSS inline, sem dependência de React ou frameworks JavaScript.

### Como
1. Criar um script que gera um arquivo HTML completo em `/mnt/documents/integral-clinica.html` contendo:
   - Todo o conteúdo textual das 9 seções (Hero, Sobre, Especialidades, Convênios, Depoimentos, Blog, Agendamento, FAQ, Localização)
   - Navbar fixa com menu lateral
   - Footer completo
   - Botão flutuante do WhatsApp
   - CSS embutido reproduzindo o visual do Tailwind (cores, fontes, grid, responsividade)
   - Google Fonts (Montserrat e Orbitron)
   - Iframe do Google Maps
   - Links de WhatsApp, Instagram, Facebook e Linktree
   - Formulário de agendamento (apenas front-end)

### Limitações
- Imagens locais (logo, hero, clínica) serão substituídas por placeholders ou referências externas, pois não existem como URLs públicas
- Animações do Framer Motion não serão incluídas (são dependentes de JS/React)
- O accordion do FAQ será implementado com HTML/CSS puro (tag `<details>`)
- O menu sidebar será implementado com JavaScript vanilla básico

### Entrega
Um arquivo `integral-clinica.html` pronto para abrir no navegador, disponível para download.

