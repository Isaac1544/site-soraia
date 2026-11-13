# Mapa inicial de páginas — site Soraia Medeiros

> Decisão de arquitetura da versão 1, 12/11/2026. O mapa define rotas e objetivos; textos, fotografias, dados profissionais e publicação pública dependem de revisão da Soraia. Fonte de posicionamento: [Business Context Lite](business-context-lite.md).

## Estrutura da versão 1

| Rota | Página | Conteúdo e objetivo | Ação principal |
|---|---|---|---|
| `/` | Início | Conceito central da cliente em contexto inclusivo; apresentação breve, seis temas em resumo, modalidades, locais e identificação profissional | Entrar em contato pelo WhatsApp |
| `/sobre/` | Sobre Soraia | Nome, CRP, trajetória, formação e abordagem com redação aprovada; fotografia autorizada | Conhecer as modalidades |
| `/psicoterapia/` | Psicoterapia e temas de atuação | Explicar o atendimento individual e os seis temas informados pela cliente, em linguagem informativa, sem diagnóstico, promessa de resultado ou afirmar especialidades não comprovadas | Falar sobre atendimento |
| `/atendimento-online/` | Atendimento online | Funcionamento da modalidade, público adulto, duração, idioma e contato; alcance internacional somente conforme texto profissional/jurídico aprovado | Conversar pelo WhatsApp |
| `/atendimento-presencial/` | Atendimento presencial | Duas seções distintas: Avenida Paulista/São Paulo e Alphaville/Barueri; endereço publicável, acesso e condições confirmadas | Pedir informações sobre local e horário |
| `/contato/` | Contato | WhatsApp, e-mail, Instagram, modalidades e instrução de contato; sem formulário ativo ou promessa de confirmação automática | Abrir WhatsApp ou e-mail |
| `/privacidade/` | Aviso de privacidade | Identidade da responsável, canais de direitos, hospedagem, registros técnicos e links externos, de acordo com o fluxo real do site | Consultar ou escrever sobre privacidade |

Os caminhos são relativos ao domínio final, que ainda precisa ser confirmado. O menu principal pode mostrar **Início, Sobre, Psicoterapia, Online, Presencial e Contato**; Privacidade fica no rodapé e no contato. No celular, o menu precisa abrir e fechar por toque e teclado sem cobrir o conteúdo de forma inacessível. Nome completo e CRP devem ficar visíveis no site, inclusive no rodapé.

## Conteúdo que conecta as páginas

- **Início:** a frase “Psicologia para mulheres que desejam compreender suas emoções, atravessar mudanças e construir uma vida com mais significado” é proposta da cliente. Colocar junto uma frase explícita de que o atendimento psicológico individual é aberto a pessoas adultas, sem exclusividade de gênero. A redação exata será aprovada pela Soraia.
- **Psicoterapia:** organizar os seis assuntos em blocos com parágrafos próprios: ansiedade/estresse/esgotamento; transição de carreira/mudanças; relações familiares/afetivas; menopausa/maturidade; envelhecimento/longevidade emocional; autoconhecimento/autoestima. São temas de conversa, não diagnósticos ou garantias de resultado.
- **Modalidades:** Online e Presencial devem responder perguntas distintas, com links entre si e para Contato. No presencial, publicar apenas dados de salas, dias e acesso que a profissional liberar.
- **Contato:** informar que a resposta depende de disponibilidade; não simular envio de formulário nem apresentar horários disponíveis sem sistema de agenda.
- **Rodapé:** identificação profissional, contatos, Instagram e Privacidade. Links externos devem abrir o endereço correto, inclusive em celular.

## SEO e critérios de aceite por página

- Uma intenção clara por página, título e descrição próprios, cabeçalho principal único, navegação interna, URL canônica e texto útil. Não criar seis páginas temáticas vazias só para palavras-chave.
- `sitemap.xml`, `robots.txt`, página 404 e Search Console fazem parte da publicação, após escolher o domínio. A página de privacidade pode constar no sitemap, mas não precisa ser página de aquisição.
- Verificar cada rota em celular e computador, com teclado, contraste, imagens com texto alternativo quando informativas e CTAs discerníveis.
- O conteúdo profissional, endereços, fotos e aviso de privacidade exigem aceite antes do lançamento. A estrutura e componentes podem ser implementados com conteúdo marcado como provisório, sem publicá-lo no domínio final.

## Rotas reservadas para etapas posteriores

- `/solicitar-atendimento/`: formulário real na etapa 2, depois de fechar campos, fluxo de dados, proteção antispam, entrega, retenção e privacidade.
- `/horarios/`: agenda na etapa 3, com disponibilidade real, fuso IANA local e de Brasília, solicitação pendente e aprovação manual.
- `/artigos/`: blog quando houver artigos revisados pela profissional.

Essas rotas **não entram na navegação nem no sitemap do MVP** enquanto não houver funcionalidade/conteúdo real. Ver [backlog](backlog-e-custos.md).
