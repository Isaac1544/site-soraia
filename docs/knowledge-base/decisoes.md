# Registro de decisões — Soraia Medeiros

## 18/11/2026 — Recorte da versão 1 e endereços

**Resposta da cliente:** aprovou lançar primeiro o site institucional, com formulário e agenda em etapas seguintes. Confirmou que não possui domínio e aceita `soraiamedeiros.com.br` se disponível. Autorizou divulgar os endereços da Avenida Paulista e de Alphaville sem sala/conjunto; os detalhes de acesso são passados diretamente após combinar o atendimento. Pretende fotografar o consultório na semana seguinte e deseja orientações de chegada e presença no Perfil da Empresa no Google.

**Implementação:** código local Astro iniciado, usando `pnpm` com lockfile, fotos substituíveis e conteúdo provisório não indexável. Os links “Ver trajeto” apontam para a busca dos endereços no Google Maps; a criação/reivindicação de perfis comerciais é uma tarefa separada, sujeita a elegibilidade e verificação pela cliente. DNS e domínio não bloqueiam o desenvolvimento local, mas são necessários para o endereço próprio na publicação.

**Pendentes:** identificação profissional exata para a publicação, fotos originais e direitos, instruções de chegada, revisão de textos e aviso de privacidade, registro do domínio, conta Cloudflare da cliente e validação de elegibilidade no Google. Ver [pendências](../pendencias-de-descoberta.md) e [guia do Perfil da Empresa](../perfil-da-empresa-google.md).

## 12/11/2026 — Stack e mapa da versão 1

**Contexto:** a primeira entrega prioriza presença institucional, boa experiência em celular e computador, contato manual e base para formulário/agenda futuros. O repositório privado no GitHub já existe.

**Decisão técnica do projeto:** Astro + TypeScript + CSS nativo, `npm` com lockfile, páginas estáticas, imagens locais otimizadas no build, GitHub Actions para checagens em PR e Cloudflare Workers Static Assets/Workers Builds para prévias e deploy. Sem banco, CMS, login, analytics de terceiros ou chamadas de IA em produção no MVP. As versões exatas das dependências serão fixadas ao criar o projeto.

**Mapa:** sete rotas na versão 1, definidas em [mapa inicial de páginas](../mapa-inicial-de-paginas.md). Os seis temas ficam em `/psicoterapia/`; Online e Presencial têm páginas próprias. Formulário, agenda e blog só ganham rotas públicas quando funcionais.

**Motivo:** entrega simples de manter, com HTML rastreável, custo inicial baixo e caminho para APIs futuras. A arquitetura pode ser revista por etapa se surgirem requisitos concretos diferentes.

**Responsabilidade e limite:** Isaac define e implementa a arquitetura; Soraia aprova afirmações profissionais, textos, fotografias, locais, privacidade e a versão que será divulgada. A cliente ainda precisa aceitar explicitamente a ordem de entrega “site institucional → formulário → agenda”; a escolha técnica aqui não substitui esse aceite.

**Publicação:** em cada lançamento, Isaac apresenta URL da prévia e resumo das alterações; Soraia aprova o conteúdo e a divulgação; Isaac confere CI e operação e então faz merge na `main`, que dispara o deploy. O aceite pode ser registrado por mensagem contendo a URL/versão revisada. Após o deploy, conferir domínio e links. Alterações puramente técnicas sem efeito no conteúdo público podem seguir fluxo de manutenção acordado entre as partes.

**Pendentes:** domínio e titularidade; conta Cloudflare da cliente e acesso do desenvolvedor; fotos originais/licença; textos e dados finais; aviso de privacidade; aprovação do recorte do MVP. Para formulário e agenda, ver [pendências de descoberta](../pendencias-de-descoberta.md).

## 13/11/2026 — Paleta base do site

**Contexto:** a cliente aprovou o estilo sofisticado, acolhedor e contemporâneo, com neutros, bege, off-white e detalhes suaves em dourado ou verde. As artes recebidas usam oliva profundo e dourado.

**Decisão de design para implementar:** adotar a [paleta e os tokens de uso](identidade-e-ativos.md): marfim `#F7F4EF`, branco quente `#FFFDF9`, bege `#E9DFD1`, oliva `#354437`, grafite `#2F342F`, sálvia `#A5AA99` e dourado `#B49A70`, com variações funcionais para texto, link e hover. O dourado fica em detalhes decorativos por baixo contraste sobre fundos claros.

**Limite:** os códigos exatos são uma proposta técnica para a primeira versão navegável; a Soraia ainda precisa aprovar o resultado visual com fotos reais antes da publicação.
