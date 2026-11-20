# Identidade visual e ativos — Soraia Medeiros

> Paleta inicial definida em 13/11/2026 e ajustada em 19/11/2026 a pedido do cliente: verde mais suave e fundo ligeiramente salmão. A cliente aprovou **a direção visual** (neutros, bege, off-white, detalhes verdes/dourados, sofisticação e acolhimento), mas ainda não aprovou estes códigos exatos. A versão navegável deverá ser revisada por ela antes da publicação. Fontes: [Business Context Lite](../business-context-lite.md) e artes recebidas em `public/images/referencias/` (referências locais, não assets finais).

![Amostras da paleta de cores do site](paleta-preview.svg)

## Paleta base

| Função | Cor | Código | Uso |
|---|---|---|---|
| Fundo principal | Marfim rosado | `#F8F1EE` | Fundo da maior parte das páginas, com leve nuance salmão |
| Superfície | Branco quente | `#FFFAF7` | Cards, menu e áreas de texto sobre o fundo |
| Fundo alternativo | Bege rosado | `#EDE1DC` | Seções alternadas e blocos de apoio |
| Cor principal | Verde sálvia escuro | `#506858` | Botões primários e destaques fortes |
| Texto principal | Grafite | `#2F342F` | Parágrafos, títulos e informações profissionais |
| Texto secundário | Verde grafite | `#535C54` | Legendas e informações menos proeminentes, sem reduzir o tamanho da fonte |
| Apoio | Verde sálvia claro | `#B4C2B2` | Áreas decorativas, ilustrações discretas e fundos de pequenas etiquetas com texto escuro |
| Acento | Dourado fosco | `#B49A70` | Linhas, ornamentos e detalhes da marca; não usar para texto comum ou botão claro |
| Link textual | Verde pinho | `#2E614C` | Links em fundos claros, com sublinhado visível |

O verde suave e o dourado dialogam com a arte de apresentação enviada pela cliente. O fundo rosado é sutil; a maior parte da interface permanece clara, com bastante espaço visual, para leitura em celular e computador. A combinação comunica cuidado e maturidade sem depender de uma cor associada a um único gênero.

## Combinações e contraste

Razões calculadas para as cores sólidas acima, usando a fórmula de contraste relativa da WCAG. São verificações da **paleta**, não uma auditoria do site completo.

| Elemento | Cores | Contraste aproximado | Uso |
|---|---|---:|---|
| Texto principal | `#2F342F` sobre `#F8F1EE` | **11,38:1** | Parágrafos e títulos |
| Texto principal em card | `#2F342F` sobre `#FFFAF7` | **12,26:1** | Cards e menu |
| Texto secundário | `#535C54` sobre `#F8F1EE` | **6,21:1** | Legendas legíveis |
| Botão primário | `#F8F1EE` sobre `#506858` | **5,43:1** | Texto do botão |
| Link textual | `#2E614C` sobre `#F8F1EE` | **6,42:1** | Link sublinhado |
| Texto em seção bege | `#2F342F` sobre `#EDE1DC` | **9,92:1** | Corpo da seção |
| Dourado em fundo marfim | `#B49A70` sobre `#F8F1EE` | **2,41:1** | **Somente decorativo**; insuficiente para texto comum |

Referência: [WCAG 2.2, contraste mínimo de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) recomenda pelo menos 4,5:1 para texto comum e 3:1 para texto grande; [contraste de elementos de interface](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) usa 3:1 para informação visual necessária. Conferir também estados de hover/foco, fotografias e qualquer sobreposição durante a implementação.

## Regras de uso no site

- **Botão principal:** fundo verde `#506858`, texto marfim rosado `#F8F1EE`; no hover, verde mais profundo `#3C5445`.
- **Botão secundário:** fundo claro, texto e borda verde; manter área clicável evidente. Não usar dourado como único contorno de controle.
- **Links:** verde pinho `#2E614C` e sublinhado. Cor sozinha não deve ser o único sinal de interatividade.
- **Foco de teclado:** contorno verde escuro, espesso e com espaço externo; conferir sobre todos os fundos.
- **Fotos:** texto deve ficar em painel sólido ou área separada; evitar colocar corpo de texto diretamente sobre imagem variável.
- **Seções:** alternar marfim rosado, branco quente e bege rosado com moderação. Sálvia e dourado funcionam como apoio, não como fundo dominante.
- **Status futuros do formulário:** definir cores de erro/sucesso quando o formulário for implementado, com texto, ícone e contraste testados. Não depender só da cor para comunicar estados.

### Tokens iniciais para CSS

```css
:root {
  --color-bg: #f8f1ee;
  --color-surface: #fffaf7;
  --color-sand: #ede1dc;
  --color-primary: #506858;
  --color-primary-hover: #3c5445;
  --color-text: #2f342f;
  --color-text-muted: #535c54;
  --color-sage: #b4c2b2;
  --color-gold: #b49a70;
  --color-link: #2e614c;
}
```

## Ativos e aprovações pendentes

- Receber fotografias profissionais **originais**, confirmar autorização para uso no site e selecionar cortes apropriados para desktop e celular. As artes de WhatsApp têm texto embutido e servem apenas como referência visual.
- Confirmar se há logotipo original em vetor e direitos de uso. A arte recebida mostra um símbolo/assinatura, mas o arquivo separado ainda não foi fornecido; não redesenhar ou tratar a arte completa como logotipo final sem aprovação.
- Confirmar tipografia final. A fonte de contexto anterior propôs Cormorant Garamond para títulos e Inter ou Lato para corpo; a cliente aprovou apenas o estilo refinado, não uma família específica. Preferir arquivos de fonte locais se essas fontes forem usadas, para evitar carregamento de terceiros.
- Revisar a paleta sobre fotos reais e protótipo responsivo com a Soraia. Ajustes finos não exigem troca de stack.
