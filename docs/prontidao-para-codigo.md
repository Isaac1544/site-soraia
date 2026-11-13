# Prontidão para iniciar o código — Soraia Medeiros

> Revisão em 13/11/2026. A stack e o [mapa inicial de páginas](mapa-inicial-de-paginas.md) foram fechados como decisões técnicas do projeto; o recorte de publicação e o conteúdo público aguardam aceite da cliente. Consultar [Technical Context Lite](technical-context-lite.md), [Business Context Lite](business-context-lite.md) e [backlog](backlog-e-custos.md).

## Stack definida para a primeira entrega

| Camada | Escolha recomendada | Estado |
|---|---|---|
| Site | Astro + TypeScript + CSS nativo, páginas geradas no build e layout responsivo | Decisão técnica para a versão 1 |
| Código | GitHub privado já existente; tarefas pequenas em branches e PRs | Repositório existe; fluxo de aprovação pendente |
| CI | GitHub Actions: `npm ci`, checagem de tipos e build a cada PR | Decisão técnica; a implementar junto com o projeto |
| CD | Cloudflare Workers com Static Assets e Workers Builds; preview por branch e produção após merge em `main` | Decisão técnica; conta/integração ainda não configuradas |
| Dados | MVP estático, sem banco, login, formulário ativo ou agenda | Depende do aceite explícito da ordem de entregas |
| Conteúdo e mídia | Markdown/configuração no repositório; fotos autorizadas e otimizadas no build | Conteúdo e originais finais pendentes |
| Métricas | Sem pixels ou analytics de terceiros no MVP; revisar logs e aviso de privacidade | Revisão antes da publicação |

O horário de referência para a agenda futura já foi confirmado: `America/Sao_Paulo`. Não é necessário escolher banco, provedor de e-mail, calendário externo ou mecanismo de autenticação para codificar o MVP estático. Quando essas etapas entrarem no desenvolvimento, serão fechadas em especificações e contratos próprios.

## Antes de construir e publicar

1. **O esqueleto pode começar:** usar Astro/TypeScript/CSS, GitHub e Cloudflare Workers, conforme [registro de decisões](knowledge-base/decisoes.md). Fixar versões no lockfile e criar as sete rotas definidas. Conteúdo provisório deve ser identificado e não divulgado como final.
2. **Confirmar o recorte de publicação com Soraia:** site institucional com WhatsApp, Instagram e e-mail primeiro; formulário e agenda em entregas posteriores. A cliente solicitou essas funções, portanto o adiamento precisa estar claro e aceito antes do lançamento.
3. **Aplicar o fluxo de revisão:** Isaac implementa e valida tecnicamente; Soraia aprova o conteúdo da prévia e a divulgação antes da primeira publicação. Definir as permissões nas contas.

Já é possível criar o projeto Astro, componentes, estilos, rotas, `package-lock.json`, `.gitignore` revisado e workflow de CI. Fotos e domínio não são pré-requisitos para esse primeiro código. O resultado deve rodar localmente; a preview externa virá após configurar a conta Cloudflare e deve conter apenas conteúdo não sensível.

## Preparação necessária antes de publicar

1. **Conteúdo e ética:** Soraia confirmar o nome completo ou social a exibir com a palavra “psicóloga” e o CRP, e aprovar apresentação, seis temas, alcance do atendimento online, modalidades, endereços divulgáveis, frase principal em contexto inclusivo e todos os CTAs. Não anunciar atendimento internacional irrestrito sem validar as regras aplicáveis.
2. **Identidade visual:** obter fotografias originais e autorização de uso; confirmar paleta, tipografia, eventual logotipo, créditos e textos alternativos. As artes recebidas servem como referência.
3. **Domínio e contas:** confirmar se ela já possui domínio; se não, reconferir disponibilidade e registrar o nome escolhido em titularidade dela. Criar/usar conta Cloudflare da cliente, conceder acesso ao desenvolvedor, integrar repositório, configurar DNS e HTTPS. Ver [domínio e contas](dominio-e-contas.md).
4. **Privacidade:** mapear hospedagem, logs, cookies e recursos externos realmente presentes; revisar e aprovar aviso de privacidade com canal de direitos. Testar sem ferramentas de rastreamento não previstas.
5. **Operação:** definir quem renova domínio, mantém acessos com MFA, acompanha falhas e dependências, aprova publicação e executa rollback.
6. **Validação final:** CI verde; revisão de preview em celular e computador, teclado, contraste, links e textos; verificar domínio final, canonical, `robots.txt`, sitemap e Search Console. Indexação no Google pode levar tempo.

## Perguntas curtas a encaminhar agora

**Para Soraia, antes do lançamento:**

1. A versão 1 pode entrar no ar com conteúdo institucional e links de contato, deixando formulário e agenda para as próximas entregas?
2. A Soraia já tem domínio e conta Cloudflare? Se não, qual domínio deseja registrar em nome dela?
3. Quando poderá fornecer fotos originais autorizadas e revisar textos, CRP, locais e aviso de privacidade na prévia?

**Para Isaac:** confirmar os acessos técnicos à conta Cloudflare da cliente, ao repositório e a responsabilidade operacional por domínio, deploy e manutenção.

As perguntas detalhadas de formulário e agenda constam em [pendências de descoberta](pendencias-de-descoberta.md) e não precisam atrasar o esqueleto do site. A sequência de automação está no [guia de CI/CD](ci-cd-guia.md).

## Primeiro lote de código

1. Criar projeto Astro e scripts `check` e `build`, com versões fixadas em lockfile.
2. Criar layout base, navegação, rodapé, páginas e configuração única para contatos/locais; checar navegação por teclado e larguras de celular/computador.
3. Criar metadados por página, sitemap, `robots.txt` e página 404; usar URL provisória até o domínio definitivo.
4. Adicionar GitHub Actions para checagem em PR; criar preview Cloudflare em conta da cliente após acesso.
5. Trocar placeholders por conteúdo aprovado; revisar privacidade; validar preview; publicar por merge em `main`.

Não há pipeline nem site implementados na data deste documento.
