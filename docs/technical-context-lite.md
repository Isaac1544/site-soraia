# Technical Context Lite — Soraia Medeiros

> Proposta v0.2 — 12/11/2026. **Decisões recomendadas, ainda não aprovadas nem implementadas.** Este documento traduz o [Business Context Lite](business-context-lite.md) e o [backlog](backlog-e-custos.md) em escolhas técnicas progressivas. Valores e limites são referências consultadas nesta data; conferir antes de contratar. A recomendação de hospedagem foi ajustada de Pages para Workers após conferir a orientação atual do Astro/Cloudflare para projetos novos.

## Resultado a construir e restrições

- **MVP:** site institucional em português, responsivo para celular e computador, acessível por teclado, com páginas úteis, identificação profissional, WhatsApp, Instagram e e-mail, domínio próprio, HTTPS e SEO básico. Sem conta de paciente, formulário ativo ou agenda nesta entrega.
- **Etapa 2:** solicitação de pré-atendimento entregue à profissional; sem reserva automática. Campos administrativos mínimos e revisão específica se houver texto livre sobre saúde.
- **Etapa 3:** agenda com disponibilidade real, horário de Brasília (`America/Sao_Paulo`) e fuso IANA do visitante, aprovação manual e painel restrito.
- Código e especificações podem ser gerados com IA, mas fatos, cópia pública, segurança, privacidade e publicação exigem revisão humana. Não inserir dados de pacientes nos prompts.
- O site comunica especial atenção a mulheres adultas e seus diferentes ciclos de vida, mantendo a oferta de atendimento inclusiva para outros públicos adultos. A frase central da cliente deve conviver com uma explicação clara de que o atendimento não é exclusivo para mulheres.

## Decisões técnicas por campo

| Campo | Recomendação agora | Vantagens | Limites / alternativa |
|---|---|---|---|
| Frontend | **Astro + TypeScript + CSS**, HTML gerado no build; JavaScript somente onde necessário | Páginas de conteúdo rápidas, componentes reutilizáveis, HTML rastreável, imagens otimizadas, base simples para IA gerar e revisar | Menos conveniente que Next.js se o produto virar aplicação interativa extensa. Next.js é alternativa quando houver forte necessidade de interface dinâmica/SSR; traz mais complexidade operacional no MVP. |
| Repositório | **GitHub privado já existente**, com `main`, branches `codex/` ou `feature/` e pull requests | Evita migração, reúne histórico, revisão e GitHub Actions | GitLab também integra com Cloudflare Workers, mas a migração agora acrescenta trabalho sem benefício identificado. Código privado não torna o site publicado privado. |
| Hospedagem do MVP | **Cloudflare Workers Free com Static Assets e Workers Builds**, conectado ao GitHub, domínio `.com.br` da cliente | Servir páginas estáticas agora e acrescentar rotas/API depois na mesma plataforma; build/deploy por Git e prévia por branch | Configuração inicial via Wrangler é um pouco mais técnica que Pages; função dinâmica está sujeita a limites. Pages continua alternativa válida para site estritamente estático. Vercel Hobby é restrito a uso pessoal/não comercial; projeto de cliente requer plano adequado. |
| Tipo de site | **Estático no MVP, sem backend e sem banco de dados** | Menor custo, superfície de ataque e manutenção | Links de contato não organizam triagem. Formulário real exige serviço de processamento e proteção; agenda exige estado persistente. |
| Formulário futuro | **Rota/API no Worker** para validação e envio por provedor transacional, como Resend; inicialmente sem cópia em banco | Segredo de API fica no servidor; fluxo simples; menos dados armazenados | A caixa de e-mail passa a ser o armazenamento operacional e precisa de controle de acesso/retenção. Não usar `mailto:` ou `wa.me` como se fossem envio confirmado de formulário. |
| Agenda futura | **D1 ou banco equivalente + API + autenticação**; slots com restrição de unicidade e estados explícitos | Permite impedir solicitações conflitantes e auditar transições | Maior esforço de segurança, backup, operação e custos. Avaliar se uma plataforma de agenda pronta autorizada pela cliente é melhor antes de construir. |
| Imagens | Fotos originais aprovadas em `src/assets`, versões responsivas geradas no build com `Image`/`Picture` do Astro; servir junto ao site | Sem serviço de imagem separado; controle de tamanho, formato, texto alternativo e direitos de uso | Rebuild para trocar foto; arquivos originais muito grandes aumentam repositório/build. R2 ou CDN de imagem só quando houver volume/edição frequente. Não publicar artes de referência como fotos finais. |
| SEO e descoberta | HTML semântico, títulos e descrições por página, URLs claras, canonical, sitemap, robots, dados estruturados apenas factuais e Search Console | Facilita rastreamento e revisão, sem dependência de anúncio | Indexação e posição não são garantidas. Evitar páginas vazias para cada tema. |

### Por que esta stack

A primeira entrega é predominantemente editorial. Astro favorece conteúdo estático com pouco JavaScript e também permite rotas renderizadas sob demanda e endpoints. Para projeto novo com Astro, a orientação atual é implantar em Cloudflare Workers; o mesmo produto serve arquivos estáticos e pode executar API futura. O painel e a agenda ainda exigirão desenho de autenticação, banco, concorrência e operação; Astro sozinho não resolve essas regras. Se o produto evoluir para um portal extenso e altamente interativo, reavaliar a arquitetura do painel sem exigir a reconstrução das páginas públicas. [Astro: renderização sob demanda](https://docs.astro.build/en/guides/on-demand-rendering/); [Astro: deploy no Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/); [Cloudflare: Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).

**Construção assistida por IA:** manter textos aprovados, decisões e critérios de aceite em Markdown; centralizar contatos, locais e metadados em arquivos de configuração; usar componentes e estilos reutilizáveis e lockfile. Gerar alterações pequenas e revisar o diff. Se o Google AI Studio produzir React/Vite, adaptar conscientemente ao projeto Astro; não presumir exportação direta entre stacks. A IA não precisa fazer parte da execução do site.

## Publicação, ambientes e operação

1. **Local:** desenvolver a partir de especificações versionadas; instalar dependências com lockfile; `npm run build`, checagens de tipos/lint e revisão visual em celular e computador.
2. **Pull request:** GitHub Actions executa checagens; Cloudflare cria prévia da branch. Revisar conteúdo com Soraia em URL de prévia, sem usar dados reais de pacientes.
3. **Produção:** merge aprovado em `main` aciona Workers Builds e deploy do Worker com os arquivos estáticos. Conectar `soraiamedeiros.com.br` e, se escolhido, `www`; configurar DNS na conta sob titularidade da cliente, HTTPS, redirecionamento canônico e Search Console.
4. **Pós-publicação:** abrir páginas e links no domínio final, conferir sitemap/robots, indexação inicial, acessibilidade básica, analytics do provedor e monitoramento de erros. Rollback: restaurar uma implantação anterior ou reverter o commit e redeployar; documentar o procedimento antes de lançar.

**Manutenção:** definir responsável por renovação do domínio, acessos com MFA, atualização de dependências e revisão periódica de links, conteúdo, formulários e limites dos serviços. Medir desempenho e acessibilidade em celular e computador; usar como referência [WCAG 2.2 nível AA](https://www.w3.org/TR/WCAG22/), sem declarar conformidade sem auditoria. Para banco futuro, definir migrações, backup/restauração testada e quem acompanha falhas de envio.

Não há pipeline de código ainda: os comandos concretos e o workflow YAML serão escritos quando o projeto Astro existir. Evitar dois mecanismos fazendo deploy simultâneo (Workers Builds e ação de deploy no GitHub). A esteira recomendada usa **GitHub Actions para CI** e **Workers Builds/Git integration para CD**. Ver [guia de CI/CD](ci-cd-guia.md).

## Privacidade e segurança

### MVP sem formulário

- Mapear o que Cloudflare registra como hospedagem e quais cookies/scripts o site de fato usa. Publicar aviso de privacidade que reflita esse fluxo, com identificação da responsável, contato para direitos e links externos para WhatsApp/Instagram.
- Não carregar Google Analytics, Meta Pixel, mapas incorporados, fontes remotas ou chat de terceiros por padrão. Links externos simples reduzem compartilhamento involuntário. Avaliar banner de cookies **após** inventário real; não adicionar banner genérico como substituto de configuração correta.
- Fotografias só após autorização e conferência de direitos. Não versionar dados sensíveis, chaves nem respostas recebidas; revisar `.gitignore` e histórico antes de cada publicação.

### Formulário, antes de ativar

- A profissional decide finalidades e meios essenciais do atendimento; registrar papéis dos fornecedores, fluxo de dados, hipóteses legais pertinentes (dados de saúde podem ser sensíveis), necessidade de cada campo, canal de direitos, prazo de retenção, eliminação, resposta a incidente e eventual transferência internacional. Revisão jurídica/de privacidade antes de coletar dados de saúde.
- Proposta mínima: nome, e-mail, WhatsApp, país/fuso e modalidade/preferência, conforme necessidade confirmada. Motivo da procura e expectativas em texto livre **não** entram automaticamente: podem revelar dados de saúde. Evitar diagnóstico, prontuário, anexos e relatos clínicos na triagem pública.
- HTTPS; validação no servidor; acesso à caixa de e-mail com MFA; credenciais apenas em segredos do provedor; nada de valores de campos em URL, analytics, logs ou mensagem de erro. E-mail transacional não garante criptografia de ponta a ponta nem deve ser tratado como prontuário.
- Para envio com domínio próprio, configurar e verificar autenticação do remetente (SPF/DKIM/DMARC conforme fornecedor) antes de ativar o formulário; testar entrega e falha com dados fictícios.
- Antispam em camadas: limite de frequência por origem, validação de tamanho/formato, campo invisível simples se útil, Turnstile **com validação obrigatória no servidor**, resposta genérica e observação de abuso. Não bloquear pessoas apenas porque usam VPN ou vivem fora do Brasil. Reavaliar controles conforme tráfego real.
- O aviso deve explicar que envio é **solicitação**, prazo de resposta e canal para urgências, sem sugerir atendimento emergencial ou confirmação de sessão.

Referências: [ANPD: guia para pequenos agentes](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/processo-guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte.pdf), [ANPD: cookies](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais), [Cloudflare: Turnstile](https://developers.cloudflare.com/turnstile/get-started/). A dispensa de certas obrigações a agentes pequenos não elimina os demais deveres da LGPD ([Resolução ANPD 2/2022](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022)).

### Ética profissional e conteúdo

Exibir nome completo, titulação profissional e CRP. Revisar linguagem sobre formação em andamento, menopausa, burnout, atendimento online e exterior; sem promessa de cura, diagnóstico pelo site ou depoimentos inventados. A cliente deve validar afirmações clínicas e locais. Referência: [CFP: publicidade profissional](https://transparencia.cfp.org.br/crp10/pergunta-frequente/). Atendimento para pessoas no exterior requer confirmação das regras profissionais e da jurisdição do paciente antes de anunciar disponibilidade irrestrita.

## Custos de infraestrutura, sem mão de obra

| Etapa | Obrigatório no cenário recomendado | Opcional / gatilho de custo |
|---|---:|---|
| Preparação | R$ 0 | Ferramenta de IA paga, se escolhida; pode construir com ferramenta já disponível. |
| MVP público | Domínio `.com.br`: **R$ 40/ano** se disponível; Cloudflare Workers Free com Static Assets: **US$ 0/mês** dentro dos limites; GitHub Free: **US$ 0/mês** dentro da franquia | Hospedagem paga se a escolha de stack/contrato mudar. Fotografias, revisão jurídica e ferramentas externas não incluídas. |
| Formulário, baixo volume | Pode permanecer **US$ 0/mês** em Worker + Turnstile + e-mail gratuito, dentro das cotas | Workers Paid a partir de **US$ 5/mês**; Resend Pro **US$ 20/mês** se volume/recursos exigirem. Total ilustrativo com ambos: **US$ 25/mês**, mais domínio. |
| Agenda, baixo volume | D1 tem cota gratuita; custo total pode continuar na franquia, sujeito a uso | Banco/API pagos e eventual ferramenta de autenticação ou agenda externa. Estimar após desenho da agenda. |

**MVP anual mínimo:** R$ 40, equivalentes contábeis a R$ 3,33/mês, pagos anualmente. **Cenário pago ilustrativo para formulário:** R$ 40/ano + US$ 300/ano (Workers Paid + Resend Pro). Não converter US$ em R$ sem câmbio/impostos da contratação. Os cenários são alternativos, não parcelas cumulativas. Limites e preços podem mudar; não foi feito teste de elegibilidade da conta nem estimativa de tráfego.

Fontes: [Registro.br](https://registro.br/dominio/), [Cloudflare Workers: preços](https://developers.cloudflare.com/workers/platform/pricing/), [Static Assets: cobrança](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/), [Workers Builds: limites](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/), [Cloudflare D1](https://developers.cloudflare.com/d1/platform/pricing/), [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/plans/), [Resend](https://resend.com/pricing), [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions). No Free, arquivos estáticos não geram cobrança por requisição; Workers Builds inclui 3.000 minutos de build/mês, e a execução dinâmica tem cota própria. GitHub Free inclui 2.000 minutos mensais de Actions para repositórios privados, conforme a documentação consultada; monitorar consumo e definir limite de gastos.

## Decisões abertas antes de implementar

1. Isaac e Soraia aprovam Astro + TypeScript, GitHub privado e Cloudflare Workers com Static Assets, ou preferem outra combinação? Identificar titular de domínio/Cloudflare, acesso e pagamento.
2. Confirmar domínio disponível e consentimento da cliente para a ordem: MVP com contato manual → formulário → agenda.
3. Aprovar mapa de páginas, textos inclusivos, frase central em seu contexto, fotos originais/licença e endereços publicáveis.
4. Definir como Soraia revisará prévias e quem terá permissão de merge/publicação.
5. Antes do formulário: campos obrigatórios, se há perguntas abertas, destino do e-mail, retenção, exclusão e fornecedores aceitos.
6. Antes da agenda: regras de slots, autenticação, calendário de origem, tratamento de pedidos pendentes e custos operacionais.
