# Pendências após atualização da cliente — 12/11/2026

A resposta da Soraia confirmou nome/CRP, abordagem declarada, formação e experiência, público, duração/idioma, endereços-base, contatos, fuso de Brasília, intenção de agenda e direção visual. A atualização de 12/11 detalhou público feminino de maior interesse, comunicação inclusiva, seis temas de atuação e frase central. Estas são as decisões restantes, com referência ao [backlog](backlog-e-custos.md) e à [proposta técnica](technical-context-lite.md).

## Para lançar o site simples

1. **Aceite da ordem de entrega:** a cliente pediu pré-agendamento no site, enquanto o planejamento propõe lançar primeiro páginas e links, depois formulário e agenda. Apresentar cronograma e registrar concordância.
2. **Fotos:** receber originais e autorização para uso. As duas artes atuais não são fotografias limpas para o layout.
3. **Conteúdo profissional:** revisão final da apresentação, abordagem integrada, títulos, experiência corporativa, serviços online para residentes no exterior e textos de cada página pela Soraia. Validar a frase “Psicologia para mulheres...” junto de texto que informe o atendimento inclusivo e não exclusivo; aprovar a redação de cada um dos seis temas. Confirmar eventuais exigências éticas/jurisdicionais para atendimento internacional antes de comunicar alcance irrestrito.
4. **Endereços:** confirmar salas/conjuntos, instruções de chegada, dias de atendimento em cada local e se os endereços podem ser divulgados publicamente.
5. **Domínio e publicação:** `soraiamedeiros.com.br` apareceu disponível no Registro.br em 12/11/2026; perguntar se já há outro domínio/site, confirmar o nome desejado, titular CPF/CNPJ, registrar antes que a disponibilidade mude, obter acesso ao DNS e aprovar ou ajustar Astro + GitHub + Cloudflare Workers com Static Assets. Ver [domínio e contas](dominio-e-contas.md). Google AI Studio foi preferência anterior de criação, ainda sem decisão sobre uso final.
6. **Operação do site:** definir quem terá acesso ao repositório, hospedagem e domínio, revisará PRs/previews, fará alterações e pagará renovação/manutenção.
7. **Privacidade do MVP:** definir fornecedor de hospedagem, dados coletados automaticamente por logs/cookies e aviso correspondente; não instalar analytics/pixels por padrão.

## Para incluir formulário

1. **Campos:** decidir quais são obrigatórios; e-mail e WhatsApp foram solicitados juntos. Cidade/região era opcional no modelo anterior, mas não foi classificada na resposta recente.
2. **Motivo/expectativas:** a cliente quer perguntas abertas sobre a procura. Respostas podem incluir dados de saúde; avaliar se são necessárias no site público, limitar conteúdo e revisar hipótese legal, aviso e segurança antes de incluir.
3. **Entrega por e-mail:** escolher provedor de envio, endereço remetente, proteção antispam e comportamento em falha. Confirmar se haverá cópia em banco ou apenas caixa postal da psicóloga.
4. **Tratamento de dados:** definir controlador, fornecedores/operadores, acesso, prazo de retenção, exclusão, canal de direitos, resposta a incidente e mecanismo de consentimento quando aplicável.
5. **Prazo de resposta:** operacionalizar “até 24 horas úteis, conforme disponibilidade”, inclusive para fins de semana, feriados e férias.

## Para incluir agenda e painel

1. **Regra dos slots:** definir se 17h–21h indica últimas sessões iniciando às 21h ou término até 21h; duração é 50 min, mas faltam intervalos, antecedência mínima, horizonte de publicação, feriados e exceções.
2. **Locais/modalidades:** mapear dias e slots específicos para Paulista, Alphaville e online. Manhã presencial é “mediante consulta”; decidir se aparece na agenda.
3. **Pedidos pendentes:** definir por quanto tempo bloqueiam slot, o que ocorre se a profissional não responder, e como cancelar/recusar sem perda do pedido.
4. **Painel:** definir se somente Soraia terá login, método de autenticação, recuperação de acesso e notificações.
5. **Agenda externa:** decidir se a disponibilidade será mantida só no site ou sincronizada com calendário já usado. A integração externa não entra no esforço da etapa 3 sem especificação própria.
6. **Fusos:** `America/Sao_Paulo` está confirmado; falta regra para fuso não detectado, formato de exibição e exemplo visual a aprovar.

## Para crescimento

- Definir data e responsável pela revisão dos artigos do blog.
- Escolher métricas e eventual ferramenta de analytics após mapear privacidade.
- Definir necessidade concreta de CRM, automações e integração de marketing antes de estimar implementação.
