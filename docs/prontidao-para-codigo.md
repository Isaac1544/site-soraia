# Prontidão para revisar a primeira versão — Soraia Medeiros

> Revisão em 18/11/2026. O código local foi iniciado após o aceite da cliente para lançar o site institucional antes do formulário e da agenda. O conteúdo público e a publicação ainda aguardam revisão. Consultar [Technical Context Lite](technical-context-lite.md), [Business Context Lite](business-context-lite.md) e [backlog](backlog-e-custos.md).

## Stack definida para a primeira entrega

| Camada | Escolha recomendada | Estado |
|---|---|---|
| Site | Astro + TypeScript + CSS nativo, páginas geradas no build e layout responsivo | Implementado localmente; revisão visual pendente |
| Código | GitHub privado já existente; tarefas pequenas em branches e PRs | Repositório existe; fluxo de aprovação pendente |
| CI | GitHub Actions: `pnpm install --frozen-lockfile`, checagem de tipos e build a cada PR | Workflow criado; execução no GitHub pendente |
| CD | Cloudflare Workers com Static Assets e Workers Builds; preview por branch e produção após merge em `main` | Decisão técnica; conta/integração ainda não configuradas |
| Dados | MVP estático, sem banco, login, formulário ativo ou agenda | Ordem de entrega aceita em 18/11/2026 |
| Conteúdo e mídia | Markdown/configuração no repositório; fotos autorizadas e otimizadas no build | Conteúdo e originais finais pendentes |
| Métricas | Sem pixels ou analytics de terceiros no MVP; revisar logs e aviso de privacidade | Revisão antes da publicação |

O horário de referência para a agenda futura já foi confirmado: `America/Sao_Paulo`. Não é necessário escolher banco, provedor de e-mail, calendário externo ou mecanismo de autenticação para codificar o MVP estático. Quando essas etapas entrarem no desenvolvimento, serão fechadas em especificações e contratos próprios.

## Situação do código

1. **Primeira versão local:** projeto Astro criado com sete rotas, página 404, layout responsivo, conteúdo provisório, links de contato e trajetos para os consultórios. Fotos de referência não foram incorporadas ao site. O build gera `noindex, nofollow` por padrão.
2. **Checagens locais:** `pnpm run check` e `pnpm run build` passaram em 18/11/2026. A prévia no navegador do Codex não conseguiu alcançar o servidor local nesta sessão; falta revisão visual em celular e computador.
3. **Fluxo de revisão:** Isaac valida tecnicamente; Soraia aprova conteúdo, fotos, visual e divulgação antes da publicação. Definir as permissões nas contas.

O código usa `pnpm-lock.yaml` e versões fixadas. Fotos, domínio e DNS não foram necessários para construí-lo. A prévia externa virá após configurar a conta Cloudflare e deve conter apenas conteúdo não sensível.

## Preparação necessária antes de publicar

1. **Conteúdo e ética:** Soraia confirmar o nome completo ou social a exibir com a palavra “psicóloga” e o CRP, e aprovar apresentação, seis temas, alcance do atendimento online, modalidades, endereços divulgáveis, frase principal em contexto inclusivo e todos os CTAs. Não anunciar atendimento internacional irrestrito sem validar as regras aplicáveis.
2. **Identidade visual:** usar a [paleta base definida](knowledge-base/identidade-e-ativos.md) no protótipo e obter revisão visual da cliente; receber fotografias originais e autorização de uso; confirmar tipografia, eventual logotipo, créditos e textos alternativos. As artes recebidas servem como referência.
3. **Domínio e contas:** a cliente confirmou que não possui domínio e aceita `soraiamedeiros.com.br` se disponível. Reconferir e registrar em titularidade dela. Criar/usar conta Cloudflare da cliente, conceder acesso ao desenvolvedor, integrar repositório, configurar DNS e HTTPS. Ver [domínio e contas](dominio-e-contas.md).
4. **Privacidade:** mapear hospedagem, logs, cookies e recursos externos realmente presentes; revisar e aprovar aviso de privacidade com canal de direitos. Testar sem ferramentas de rastreamento não previstas.
5. **Operação:** definir quem renova domínio, mantém acessos com MFA, acompanha falhas e dependências, aprova publicação e executa rollback.
6. **Validação final:** CI verde; revisão de preview em celular e computador, teclado, contraste, links e textos; verificar domínio final, canonical, `robots.txt`, sitemap e Search Console. Indexação no Google pode levar tempo.

## Perguntas curtas a encaminhar agora

**Para Soraia, antes do lançamento:**

1. Qual nome completo ou social, conforme registro profissional, deve acompanhar “psicóloga” e o CRP no site?
2. Quais orientações gerais de chegada podem ser divulgadas e em quais dias ocorre atendimento presencial em cada local?
3. Pode enviar fotos originais autorizadas e revisar textos, paleta e aviso de privacidade na prévia? As fotos do consultório foram previstas para a semana seguinte a 18/11.
4. Já possui Perfil da Empresa no Google? Cada local tem presença física, sinalização e contato direto durante os horários que seriam informados ao Google?

**Para Isaac:** confirmar os acessos técnicos à conta Cloudflare da cliente, ao repositório e a responsabilidade operacional por domínio, deploy e manutenção.

As perguntas detalhadas de formulário e agenda constam em [pendências de descoberta](pendencias-de-descoberta.md) e não precisam atrasar o esqueleto do site. A sequência de automação está no [guia de CI/CD](ci-cd-guia.md).

## Primeiro lote de código

1. Concluído: projeto Astro, scripts `check` e `build`, lockfile, layout, navegação, rodapé, sete páginas, página 404 e configuração única para contatos/locais.
2. Criado: GitHub Actions para checagem em PR; falta comprovar execução no GitHub.
3. Pendente para lançamento: revisão visual em celular/computador, conteúdo aprovado, fotos originais, privacidade final, URL canônica, sitemap, `robots.txt` e Search Console.
4. Após acesso: criar preview Cloudflare na conta da cliente. Publicar somente depois do aceite do conteúdo e da divulgação.

Não há deploy nem domínio configurado na data deste documento.
