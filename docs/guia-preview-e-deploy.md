# Prévia no celular e deploy — Soraia Medeiros

> Revisado em 19/11/2026. O código está no PR de rascunho [#1](https://github.com/Isaac1544/site-soraia/pull/1), com CI aprovada. Não há deploy na Cloudflare nem domínio registrado. O site atual contém conteúdo e aviso de privacidade provisórios e gera `noindex, nofollow` por padrão.

## Titularidade recomendada

| Recurso | Titular recomendado | Acesso do desenvolvedor |
|---|---|---|
| Domínio `.com.br` | Soraia, com CPF/CNPJ dela no Registro.br | Contato técnico, se necessário; sem senha compartilhada |
| Cloudflare | Conta controlada pela Soraia | Membro convidado com permissões adequadas para Workers e DNS |
| GitHub | Idealmente conta ou organização da Soraia | Isaac como colaborador; o repositório atual ainda pertence a Isaac |

Se o repositório continuar na conta de Isaac, a instalação do aplicativo Cloudflare Workers & Pages no GitHub precisa ser autorizada para esse repositório na conta proprietária. Essa combinação funciona, mas a titularidade do código e a continuidade da manutenção devem ser combinadas com a cliente. [Cloudflare: acesso de membros](https://developers.cloudflare.com/fundamentals/manage-members/manage/) e [integração GitHub](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/).

## Ver a prévia no celular agora, sem domínio

1. Conectar computador e celular à **mesma rede Wi-Fi**.
2. No terminal do projeto, executar `pnpm run build`.
3. No Windows, executar `ipconfig` e anotar o IPv4 do adaptador Wi-Fi, por exemplo `192.168.15.7`. Esse número pode mudar.
4. Executar `pnpm exec astro preview --host <IPv4-do-computador> --port 4322`. Se já houver outro servidor Astro no mesmo projeto, usar `--ignore-lock` ou parar o anterior.
5. No navegador do celular, abrir `http://<IPv4-do-computador>:4322/`. Manter o terminal e o computador ligados durante o teste. Se não carregar, conferir rede, isolamento de clientes no Wi-Fi e permissão de entrada do Windows Firewall **somente para rede privada**. Não abrir a porta no roteador.

O endereço `127.0.0.1` funciona apenas no próprio computador. A prévia local não deve ser usada como hospedagem permanente. Alternativa rápida no computador: modo responsivo das ferramentas de desenvolvedor do navegador. [Astro: opção `--host` para prévia local](https://docs.astro.build/en/reference/cli-reference/).

## Sequência recomendada para publicar

1. **Fechar a versão:** Soraia revisa identificação profissional, textos, endereços, visual, fotografias autorizadas e aviso de privacidade. Isaac valida celular, computador, teclado e links. Antes de ativar indexação, configurar URL canônica, `robots.txt` e sitemap para o domínio final. O código só deve gerar versão indexável quando `PUBLIC_SITE_READY=true` for definido no build após essa revisão.
2. **Registrar o domínio:** na conta da Soraia no [Registro.br](https://registro.br/), verificar novamente `soraiamedeiros.com.br`, registrar com CPF/CNPJ dela e guardar dados de renovação. Pode usar inicialmente o DNS gratuito do Registro.br; o domínio não precisa estar registrado para desenvolver o código. [Registro.br: registro de domínio](https://registro.br/ajuda/registro-de-novos-dominios/).
3. **Criar a conta Cloudflare:** a Soraia cria a conta em seu e-mail e convida Isaac em **Members** com acesso suficiente para Workers e DNS. Ativar autenticação em duas etapas; não compartilhar senha. [Cloudflare: gerenciar membros](https://developers.cloudflare.com/fundamentals/manage-members/manage/).
4. **Conectar o GitHub ao Workers Builds:** após o código e o conteúdo aprovados chegarem à `main`, abrir **Workers & Pages → Create application → Import a repository** na Cloudflare. Autorizar o aplicativo do GitHub para `Isaac1544/site-soraia` (ou para o repositório transferido à cliente), escolher a branch de produção `main` e o nome `site-soraia-medeiros`, igual ao `wrangler.jsonc`. O `package.json` fixa `pnpm@11.25.0`; o Workers Builds instala dependências automaticamente. Configurar build `pnpm run build`, deploy `pnpm exec wrangler deploy` e preview `pnpm exec wrangler preview`. Conferir o primeiro build e o endereço `workers.dev`. A conexão da `main` pode publicar imediatamente em `workers.dev`, por isso esta etapa vem depois da aprovação do conteúdo público. [Cloudflare: Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) e [configuração](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).
5. **Habilitar prévias de branches:** em **Settings → Build → Branch control**, ativar **Preview Builds**. Cada push em branch diferente da `main` pode gerar URL de prévia e comentário no PR. A URL de prévia é acessível a quem a receber; `noindex` evita solicitação de indexação, mas não é controle de acesso. Não incluir dados de pacientes ou conteúdo sensível. [Cloudflare: branches de build](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/).
6. **Configurar DNS e domínio próprio:** adicionar o domínio na conta Cloudflare, revisar os registros DNS, copiar os nameservers atribuídos e inseri-los no Registro.br. Após a zona ficar ativa, abrir o Worker em **Settings → Domains & Routes → Add → Custom domain** e vincular `soraiamedeiros.com.br`. Escolher se `www` redireciona para o domínio raiz e configurar a regra. Confirmar HTTPS e todos os links. [Cloudflare: configurar zona DNS](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/), [Registro.br: alterar servidores DNS](https://registro.br/ajuda/gerenciamento-de-conta/) e [Cloudflare: custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
7. **Indexação e operação:** verificar o domínio no Google Search Console, enviar o sitemap, conferir páginas e manter renovação do domínio, acesso às contas e monitoramento do build sob responsáveis definidos. Enviar sitemap ajuda a descoberta, mas não garante indexação ou posição. O Perfil da Empresa no Google segue um fluxo separado. [Google: sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) e [Search Console: propriedade de domínio](https://support.google.com/webmasters/answer/34592).

**Estado atual:** o passo de prévia local está disponível; os passos de contratação, configuração da Cloudflare e deploy dependem das contas da cliente e da aprovação final do conteúdo.
