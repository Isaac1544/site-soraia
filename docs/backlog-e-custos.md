# Backlog, complexidade e custos — Soraia Medeiros

> Planejamento v0.4, 12/11/2026. Horas indicam complexidade, sem atribuir custo à mão de obra. Orçamento abaixo considera apenas serviços e ferramentas, inclusive construção com IA. Preços de fornecedores consultados em 10–12/11/2026; revisar antes de contratar. Ver [Business Context Lite](business-context-lite.md), [Technical Context Lite](technical-context-lite.md) e [guia de CI/CD](ci-cd-guia.md).

## Critério de complexidade

| Grau | Característica | Exemplo |
|---|---|---|
| Baixa | Conteúdo/links, sem dados de visitantes armazenados | Páginas institucionais, botão WhatsApp, sitemap |
| Média | Entrada de dados, servidor, fornecedor externo e operação de privacidade | Formulário enviado por e-mail |
| Alta | Estado persistente, autenticação, concorrência e regras de tempo | Agenda, painel, reservas pendentes e conversão de fuso |

Esforço em **horas de trabalho**, apenas para comparar dificuldade e planejar entrega. As estimativas excluem espera por respostas, aprovação, fotos, registro de domínio e indexação no Google. “Recursos” indica pessoas e serviços necessários; **nenhuma hora é convertida em dinheiro neste orçamento**.

## Etapa 0 — fechar base e preparação (P0)

| ID | Tarefa pequena / critério de pronto | Grau | Horas | Recursos |
|---|---|---:|---:|---|
| B00 | Consolidar fatos da cliente, status e conteúdo publicável, incluindo foco feminino inclusivo e seis temas de atuação | Baixa | 2–3 | Dev + Soraia |
| B01 | Definir mapa das páginas, mensagens e CTAs da primeira versão; aprovar frase central em contexto inclusivo | Baixa | 3–5 | Dev + Soraia |
| B02 | Aprovar Technical Context Lite, hospedagem, acesso ao domínio, contas e responsável por custos | Média | 2–4 | Dev + titular das contas |

**Total:** 7–12 h. Custo externo obrigatório: R$ 0 nesta etapa.

## Etapa 1 — site institucional simples, publicável (P0 / MVP)

| ID | Tarefa pequena / critério de pronto | Grau | Horas | Recursos |
|---|---|---:|---:|---|
| B10 | Estrutura Astro/TypeScript proposta, configuração central de contatos, GitHub Actions para CI e preview/deploy por Git | Média | 4–6 | Dev + contas GitHub/Cloudflare |
| B11 | Layout responsivo para celular e computador, com identidade visual aprovada | Média | 8–14 | Dev + Soraia; fotos originais |
| B12 | Redigir e montar páginas essenciais: início, sobre, atuação/modalidades, locais e contato; apresentar seis temas com conteúdo próprio, sem seis páginas vazias | Média | 8–12 | Dev + revisão da Soraia |
| B13 | Integrar links WhatsApp, Instagram e e-mail; navegação e CTAs acessíveis | Baixa | 3–5 | Dev |
| B14 | SEO técnico: títulos, descrições, canonical, sitemap, robots, dados factuais e links internos | Média | 5–8 | Dev |
| B15 | Aviso de privacidade compatível com o funcionamento real, revisão do preview, publicação, DNS, verificação final e Search Console | Média | 5–8 | Dev + Soraia + revisão de privacidade |

**Total:** 33–53 h. **Acumulado até site no ar:** 40–65 h. Entrega: site clicável e indexável, com contato manual. Não exibir agenda fictícia nem formulário que apenas simula envio.

**Critério de aceite visual:** conferir as páginas em larguras de celular e computador; menus, textos, imagens e CTAs devem permanecer legíveis e clicáveis, sem elementos cortados ou rolagem horizontal. A navegação deve funcionar por toque, mouse e teclado.

## Etapa 2 — solicitação de pré-atendimento por formulário (P1)

| ID | Tarefa pequena / critério de pronto | Grau | Horas | Recursos |
|---|---|---:|---:|---|
| B20 | Fechar campos, obrigatoriedade, textos e fluxo de dados; avaliar motivo/expectativas | Média | 4–6 | Dev + Soraia + revisão de privacidade |
| B21 | Criar interface acessível, validação e estados de envio/erro | Média | 8–14 | Dev |
| B22 | Criar endpoint seguro, proteção antispam e entrega ao e-mail restrito | Média | 5–8 | Dev + provedor de e-mail transacional |
| B23 | Configurar operações: acesso, exclusão, retenção, aviso e verificação ponta a ponta | Média | 4–7 | Dev + Soraia |

**Total:** 21–35 h. O formulário recebe solicitação; **não reserva horário**. Se motivo da procura e expectativas forem incluídos, o risco de coletar informações de saúde aumenta e exige desenho e revisão específicos. A etapa pode crescer se houver armazenamento, painel ou fluxo de atendimento clínico.

## Etapa 3 — pré-agendamento com agenda e aprovação manual (P2)

| ID | Tarefa pequena / critério de pronto | Grau | Horas | Recursos |
|---|---|---:|---:|---|
| B30 | Especificar regras de slots, intervalos, locais, feriados e antecedência | Média | 8–12 | Dev + Soraia |
| B31 | Modelar banco e estados: livre, pendente, aprovado, recusado, bloqueado, expirado | Alta | 15–25 | Dev + banco de dados |
| B32 | Criar login e painel para editar disponibilidade, bloquear horários e ver pedidos | Alta | 15–25 | Dev + autenticação |
| B33 | Criar API de solicitação com proteção transacional contra pedidos simultâneos do mesmo slot | Alta | 15–25 | Dev + banco de dados |
| B34 | Exibir slots em `America/Sao_Paulo` e fuso IANA do visitante, por data e com DST | Alta | 10–18 | Dev |
| B35 | Implementar aprovação/recusa, notificações, expiração e verificação de cenários críticos | Alta | 12–20 | Dev + e-mail transacional + Soraia |

**Total:** 75–125 h. Inclui operação contínua: a profissional precisa manter agenda e bloqueios atualizados. Integração direta com Google Calendar, se desejada, é um item adicional a estimar após decidir o fluxo de verdade da disponibilidade.

## Etapa 4 — crescimento (P3, opcional)

| ID | Tarefa pequena / critério de pronto | Grau | Horas | Recursos |
|---|---|---:|---:|---|
| B40 | Publicar blog com autoria, revisão, referências e metadados | Média | 6–10 | Dev + Soraia/redação; artigos não incluídos |
| B41 | Rotina de SEO: conteúdo, Search Console e ajustes por dados de busca | Média | 6–12 inicial | Dev + Soraia; manutenção recorrente à parte |
| B42 | Avaliar CRM, automações e métricas com fluxo de consentimento/privacidade definido | Alta | 8–16 para descoberta e desenho | Dev + Soraia; implementação a estimar depois |

**Total inicial:** 20–38 h. Ferramentas e produção de artigos serão orçadas conforme escopo escolhido.

## Custos sem mão de obra: cenário econômico com IA

**Arquitetura de referência para cálculo:** gerar/editar código Astro/TypeScript com apoio de IA e revisão humana; manter especificação e código no GitHub; hospedar o site público estático em Cloudflare Workers com Static Assets; acrescentar rotas/API no Worker para o formulário e a agenda, Resend para e-mails e Cloudflare D1 para os slots. São recomendações ainda não aprovadas, detalhadas no [Technical Context Lite](technical-context-lite.md). O site não precisa chamar uma IA quando o visitante o acessa; assim, o custo de inferência de IA em produção pode ser **R$ 0**.

| Estado do projeto | Gasto inicial obrigatório | Mensal mínimo com cotas gratuitas | Cenário pago opcional | Primeiro ano no cenário mínimo |
|---|---:|---:|---:|---:|
| Etapa 0, planejamento | R$ 0 | R$ 0 | R$ 0 | R$ 0 |
| Etapa 1, site simples com domínio `.com.br` | R$ 40 pelo domínio, se disponível | R$ 0 | Hospedagem paga somente se escolhida | **R$ 40** |
| Etapa 2, formulário com baixo volume | R$ 0 adicional | R$ 0 dentro das cotas de API/e-mail | Workers Paid **US$ 5/mês**; Resend Pro **US$ 20/mês** se necessário | **R$ 40** mantendo serviços gratuitos |
| Etapa 3, agenda com baixo volume | R$ 0 adicional | Pode caber nas cotas gratuitas de API, banco e e-mail | Exemplo de operação paga: Workers Paid **US$ 5/mês**, mantendo e-mail na cota gratuita | **R$ 40** mantendo serviços gratuitos |
| Etapa 4, blog sem CRM/automação contratados | R$ 0 adicional | R$ 0 para estrutura e publicação própria | Custos de ferramentas e conteúdo escolhidos depois | **R$ 40** mantendo serviços gratuitos |

“Primeiro ano” soma **domínio e serviços recorrentes mínimos**, sem fotos, revisão externa, impostos, câmbio ou mão de obra. O mesmo domínio é pago uma vez por ano; os valores da tabela são **estados acumulados**, não parcelas a somar. Cotas gratuitas têm limites e podem ser insuficientes para disponibilidade ou volume exigidos em produção.

### Cenários pagos calculados

- **Site simples:** R$ 40/ano; média contábil de R$ 3,33/mês, embora o domínio seja pago anualmente.
- **Formulário ou agenda com Workers Paid e e-mail gratuito:** R$ 40/ano **+ US$ 5/mês** = R$ 40 **+ US$ 60 no primeiro ano**.
- **Formulário ou agenda com Workers Paid e Resend Pro:** R$ 40/ano **+ US$ 25/mês** = R$ 40 **+ US$ 300 no primeiro ano**.
- Se o tráfego exceder cotas incluídas ou forem contratados autenticação, CRM, agenda externa ou automações pagas, haverá custos adicionais dependentes de uso/plano.

### IA para construção

O [Google AI Studio](https://ai.google.dev/gemini-api/docs/billing) tem uso gratuito dentro de seus limites; vincular uma chave paga ou usar recursos pagos pode gerar cobrança. A [modalidade Starter de publicação](https://ai.google.dev/gemini-api/docs/aistudio-deploying) permite até dois aplicativos para contas elegíveis sem faturamento, mas oferece URL sob `ai.studio`; **não presumir que isso resolve o domínio próprio `.com.br`**. Para o domínio da cliente, a arquitetura de referência usa exportação/implantação em hospedagem compatível, sujeita a revisão técnica. IA acelera criação de código e conteúdo, mas não substitui aprovação de fatos, privacidade e revisão das funções.

Não inserir respostas de pacientes, contatos recebidos ou outros dados pessoais em prompts de construção. O [plano gratuito da API Gemini](https://ai.google.dev/gemini-api/docs/pricing) informa uso de conteúdo para melhoria de produtos; consultar termos e configuração antes de fornecer materiais privados.

## Preços de referência por serviço

| Item | Quando | Referência atual | Observação |
|---|---|---|---|
| Domínio `.com.br` | Etapa 1 e anual | R$ 40/ano no [Registro.br](https://registro.br/dominio/) | Disponibilidade de `soraiamedeiros.com.br` não verificada; registrar em nome da cliente. |
| Hospedagem estática | Etapa 1 | Pode começar em R$ 0/mês no [Cloudflare Workers Free com Static Assets](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) | Requisições a arquivos estáticos são gratuitas; [Workers Builds Free](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/) inclui 3.000 minutos de build/mês. Confirmar limites na contratação. |
| Search Console | Etapa 1 | R$ 0, [serviço gratuito do Google](https://support.google.com/webmasters/answer/9128668) | Indexação/posição não são garantidas. |
| IA de construção | Etapas 0–4 | [Google AI Studio](https://ai.google.dev/gemini-api/docs/billing): R$ 0 dentro dos limites gratuitos; recurso pago por uso quando ativado | Não há assinatura de IA obrigatória no cenário econômico. |
| Envio transacional de e-mail | Etapa 2+ | [Resend](https://resend.com/pricing): US$ 0 até 3.000 e-mails/mês e 100/dia; Pro US$ 20/mês | Exemplo, não fornecedor escolhido. Confirmar elegibilidade, limites, retenção e tratamento de dados antes de contratar. |
| Funções/API | Etapa 2+ | [Cloudflare Workers](https://developers.cloudflare.com/workers/platform/pricing/): plano gratuito limitado; Paid começa em US$ 5/mês | Exemplo de arquitetura, não escolha final. Excedentes podem ser cobrados. |
| Banco para agenda | Etapa 3 | [Cloudflare D1](https://developers.cloudflare.com/d1/platform/pricing/) tem cota gratuita; cobrança depende de leituras, escritas e armazenamento no plano | Exemplo; o desenho de autenticação e concorrência pode levar a outra solução. |
| Fotos, logotipo, revisão jurídica/profissional, redação de artigos | Conforme necessidade | A cotar | Não incluídos nas horas nem nos custos de infraestrutura acima. |

Os custos em dólar foram mantidos em dólar para não presumir câmbio, imposto ou forma de pagamento. Se a plataforma final mudar, refazer o cálculo conforme o contrato real.

## Dependências e decisões imediatas

1. Apresentar à Soraia o recorte de lançamento: site simples primeiro, formulário e agenda nas etapas seguintes. Registrar aceite da ordem de entrega.
2. Obter fotos originais e aprovar textos; confirmar detalhes de sala e possibilidade de divulgar cada endereço.
3. Confirmar domínio, titular e plataforma de hospedagem. Google AI Studio foi preferência de construção; publicação e manutenção precisam de escolha própria.
4. Para etapa 2, definir política operacional de dados e se perguntas sobre motivo/expectativas são necessárias no canal público.
5. Para etapa 3, definir último horário de início, regras por local, bloqueios, expiração de pedido pendente e canal de notificação.

## Ordem de execução

`B00–B02` → `B10–B15` (site no ar) → `B20–B23` (formulário) → `B30–B35` (agenda) → `B40–B42` (crescimento). Cada etapa produz uma entrega utilizável e permite reestimar a próxima com dados reais.
