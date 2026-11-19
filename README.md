# Site Soraia Medeiros

Primeira versão local do site institucional. O conteúdo e o aviso de privacidade ainda precisam da revisão da profissional. O build inclui `noindex, nofollow` por padrão; **não publicar como site final** sem completar os itens de lançamento.

## Desenvolvimento

Requisitos: Node.js 24 e pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm run dev
pnpm run check
pnpm run build
```

No Windows, se o pnpm usar uma pasta de cache sem permissão de escrita, a `.npmrc` mantém a store dentro do projeto. `node_modules`, `dist` e `.pnpm-store` estão ignorados pelo Git.

As informações de contato, locais, links e o campo da futura foto profissional estão em [`src/data/site.ts`](src/data/site.ts). A foto e eventuais imagens dos consultórios devem ser inseridas somente após receber arquivos originais e confirmar autorização de uso. O layout já reserva um espaço visual para a foto principal.

## Escopo desta versão

- Sete páginas institucionais e página 404.
- Layout responsivo, navegação por teclado e links para WhatsApp, e-mail, Instagram e trajetos no Google Maps.
- Sem formulário ativo, agenda, banco, pixels ou scripts externos.
- Checagem e build em pull requests via GitHub Actions. O deploy Cloudflare ainda não está configurado.

## Antes da publicação

1. Soraia revisa nome profissional, textos, fotos, paleta, locais e aviso de privacidade na prévia.
2. Registrar o domínio em nome dela e configurar sua conta Cloudflare e acessos técnicos.
3. Fazer inventário dos serviços e registros técnicos, finalizar o aviso de privacidade, ativar `PUBLIC_SITE_READY=true` apenas com aprovação, configurar URL canônica, sitemap, `robots.txt` e Search Console.
4. Validar as páginas em celular e computador, confirmar links, acessibilidade e fluxo de publicação.

O [Business Context Lite](docs/business-context-lite.md), o [Technical Context Lite](docs/technical-context-lite.md), a [lista de pendências](docs/pendencias-de-descoberta.md), o [guia de prévia e deploy](docs/guia-preview-e-deploy.md) e o [guia do Perfil da Empresa no Google](docs/perfil-da-empresa-google.md) registram decisões e próximos passos.
