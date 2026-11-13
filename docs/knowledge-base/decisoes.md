# Registro de decisões — Soraia Medeiros

## 12/11/2026 — Stack e mapa da versão 1

**Contexto:** a primeira entrega prioriza presença institucional, boa experiência em celular e computador, contato manual e base para formulário/agenda futuros. O repositório privado no GitHub já existe.

**Decisão técnica do projeto:** Astro + TypeScript + CSS nativo, `npm` com lockfile, páginas estáticas, imagens locais otimizadas no build, GitHub Actions para checagens em PR e Cloudflare Workers Static Assets/Workers Builds para prévias e deploy. Sem banco, CMS, login, analytics de terceiros ou chamadas de IA em produção no MVP. As versões exatas das dependências serão fixadas ao criar o projeto.

**Mapa:** sete rotas na versão 1, definidas em [mapa inicial de páginas](../mapa-inicial-de-paginas.md). Os seis temas ficam em `/psicoterapia/`; Online e Presencial têm páginas próprias. Formulário, agenda e blog só ganham rotas públicas quando funcionais.

**Motivo:** entrega simples de manter, com HTML rastreável, custo inicial baixo e caminho para APIs futuras. A arquitetura pode ser revista por etapa se surgirem requisitos concretos diferentes.

**Responsabilidade e limite:** Isaac define e implementa a arquitetura; Soraia aprova afirmações profissionais, textos, fotografias, locais, privacidade e a versão que será divulgada. A cliente ainda precisa aceitar explicitamente a ordem de entrega “site institucional → formulário → agenda”; a escolha técnica aqui não substitui esse aceite.

**Publicação:** em cada lançamento, Isaac apresenta URL da prévia e resumo das alterações; Soraia aprova o conteúdo e a divulgação; Isaac confere CI e operação e então faz merge na `main`, que dispara o deploy. O aceite pode ser registrado por mensagem contendo a URL/versão revisada. Após o deploy, conferir domínio e links. Alterações puramente técnicas sem efeito no conteúdo público podem seguir fluxo de manutenção acordado entre as partes.

**Pendentes:** domínio e titularidade; conta Cloudflare da cliente e acesso do desenvolvedor; fotos originais/licença; textos e dados finais; aviso de privacidade; aprovação do recorte do MVP. Para formulário e agenda, ver [pendências de descoberta](../pendencias-de-descoberta.md).
