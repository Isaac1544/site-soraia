# Base de conhecimento recomendada — Soraia Medeiros

Este diretório deve conter fontes aprovadas e versionadas para manter o site fiel ao negócio. Separar fatos confirmados, decisões de produto e conteúdo editorial. Marcar toda informação pendente como `A CONFIRMAR`; não publicar automaticamente.

Consulte também [pendências de descoberta](../pendencias-de-descoberta.md), [backlog e custos](../backlog-e-custos.md), [Technical Context Lite](../technical-context-lite.md) e [guia de CI/CD](../ci-cd-guia.md) para a sequência de entrega proposta.

## Necessário para construir a primeira versão

1. [`../business-context-lite.md`](../business-context-lite.md) — objetivo, público, serviços, jornada e limites; já criado.
2. `ficha-profissional.md` — nome/CRP, abordagem, formação, experiência, serviços e modalidades. Anotar fonte, data e aprovação da Soraia para cada afirmação pública.
3. `conteudo-do-site.md` — mapa de páginas, texto final de cada página, CTAs, perguntas frequentes e status de aprovação. É a fonte do conteúdo que o código deve exibir.
4. `identidade-e-ativos.md` — cores, fontes, logotipo, fotos originais, autorização de uso, créditos e texto alternativo.
5. [`../technical-context-lite.md`](../technical-context-lite.md) — recomendações de tecnologia, hospedagem, domínio, ambientes, segurança, SEO técnico e operação; proposta criada, decisões finais pendentes.
6. `seo-e-publicacao.md` — URL final, intenção de cada página, títulos/descrições, páginas locais, sitemap, Search Console e critérios de publicação.
7. `decisoes.md` — registro curto de decisões Onion: contexto, escolha, motivo, impacto, responsável e data.
8. [`../backlog-e-custos.md`](../backlog-e-custos.md) — etapas, tarefas e dependências; já criado.

## Preparar quando a respectiva etapa começar

- [`08-especificacao-do-formulario.md`](08-especificacao-do-formulario.md) — rascunho já criado; fechar campos, regras, destino, privacidade e critérios de aceite antes de implementar o formulário.
- `privacidade-e-retencao.md` — fluxo real dos dados, controlador, fornecedores, acesso, retenção, exclusão e aviso revisado; necessário antes de receber solicitações pelo site.
- `agenda-e-fusos.md` — regras de slots, locais, bloqueios, pedidos pendentes, aprovação, expiração e conversão por zona IANA; necessário antes da etapa de agenda.
- `conteudo-editorial/` — brief, autoria, fontes e revisão de cada artigo; necessário quando o blog tiver artigos.

Os nomes sem link são documentos planejados, ainda não criados. Evitar documentos vazios ou que repitam o Business Context. O [guia de CI/CD](../ci-cd-guia.md) explica a sequência de implementação, revisão e publicação e traz materiais de estudo.

## Fluxo Onion / Spec as Code

- Contexto do negócio → vocabulário e fatos aprovados → requisitos e critérios de aceite → regras de privacidade/ética → arquitetura e contratos → implementação → evidência de validação.
- Toda regra de conversão de horário deve ter exemplos de teste em zonas com e sem horário de verão.
- Requisitos LGPD e de conteúdo profissional devem virar critérios de aceite observáveis; revisão final cabe à cliente e aos profissionais responsáveis.
- Não copiar relatos de pacientes, mensagens privadas ou dados clínicos para a base de conhecimento.

## Ativos visuais recebidos

As artes de WhatsApp foram copiadas para `public/images/referencias/`. A arte de apresentação contém retrato e informações sobre a profissional, mas texto embutido e telefone/endereço. Tratar como referência, não usar inteira como hero/foto do site. Solicitar arquivos originais de fotografia e autorização de uso; confirmar que endereço e demais textos ainda são verdadeiros.
