# Especificação — solicitação de pré-atendimento

Status: proposta v0.2 para a etapa 2, atualizada com a resposta da cliente em 10/11/2026. A etapa 3 acrescenta seleção de slots e aprovação manual; ver [backlog e custos](../backlog-e-custos.md).

## Objetivo

Reunir informações para que a psicóloga responda a novos interessados. O envio não confirma vaga, horário, vínculo terapêutico nem atendimento emergencial. No lançamento inicial, o contato ocorre por WhatsApp/e-mail; o formulário entra na etapa 2.

## Campos propostos a partir do pedido

| Campo | Estado no pedido | Regra proposta |
|---|---:|---|
| Nome completo | Não especificado | Texto simples; sem dados clínicos |
| E-mail | Solicitado junto ao WhatsApp | Validar formato |
| WhatsApp | Solicitado junto ao e-mail | Formato internacional E.164; country code editável; sem inferir número |
| País atual | Não especificado | Lista pesquisável |
| Cidade/região | Solicitado pela cliente; obrigatoriedade indefinida | Texto curto; explicar finalidade |
| Fuso horário | Não especificado | Sugerir `Intl.DateTimeFormat().resolvedOptions().timeZone`; usuário confirma/edita; guardar IANA |
| Modalidade desejada | Não especificado | Online / presencial Paulista / presencial Alphaville; só opções confirmadas ficam ativas |
| Períodos preferidos | Não especificado | Manhã / tarde / noite / flexibilidade; instruir em qual fuso se referem |
| Motivo geral da procura | Solicitado pela cliente; pendente de revisão | Pode revelar dado de saúde. Avaliar necessidade e forma de coleta antes de implementar. |
| Expectativas sobre acompanhamento | Solicitado pela cliente; pendente de revisão | Pode revelar dado de saúde. Avaliar necessidade e forma de coleta antes de implementar. |
| Aviso de privacidade | Recomendado | Exibir antes do envio; definir se cabe confirmação de leitura. Não presumir que consentimento é a base legal nem exigir consentimento genérico sem análise. |

Confirmar obrigatoriedade dos campos. A cliente quer e-mail e WhatsApp juntos; o modelo inicial marcava cidade/região como opcional, mas a resposta posterior não reiterou a opção. Motivo/expectativas não são campos administrativos mínimos e precisam de decisão de privacidade própria.

## Horário e fuso

- Fuso da psicóloga confirmado pela cliente como horário de Brasília: `America/Sao_Paulo`. Para cálculos, usar regras IANA por data, em vez de fixar um offset UTC permanente.
- Detectar zona local como sugestão, exibir para confirmação e oferecer seletor de fusos IANA.
- Não armazenar apenas rótulos UTC fixos. Calcular para a data específica com biblioteca/timezone database confiável; horário de verão muda por região e data.
- Na etapa 2, coletar faixas preferidas e exibir: “A disponibilidade será confirmada por contato”. Não representar preferência como horário disponível.
- Se slots forem habilitados depois: manter horários de origem com zona `America/Sao_Paulo`, calcular a zona escolhida do visitante para a data do slot, mostrar as duas horas e impedir seleção de horário passado/duplicado.

## Estados e critérios de aceite

1. O formulário funciona em celular e computador, é navegável por teclado, tem labels e erros associados aos campos.
2. País, telefone e fuso podem ser alterados sem depender da detecção automática.
3. A página informa que o pedido não é confirmação de agenda e que não se deve enviar detalhes de saúde.
4. Não pedir diagnóstico, histórico, medicação ou documentos clínicos. A inclusão de motivo/expectativas depende de revisão de finalidade, necessidade, hipótese legal e controles próprios.
5. Não enviar valores de campos para analytics, logs de aplicação, URLs ou mensagens de erro.
6. Envio protegido contra spam, validado no servidor e transmitido por HTTPS.
7. Sucesso só aparece após confirmação do recebimento; erro permite tentar novamente sem duplicar inadvertidamente.
8. Definir com a cliente destino dos dados, pessoas com acesso, prazo de resposta, retenção e procedimento de exclusão antes de ativar o endpoint.
9. Aviso explica controlador, finalidade, dados, base legal revisada, operadores/serviços, retenção, direitos e canal de privacidade. Não presumir que checkbox equivale a base legal.
10. Caso haja agenda real, validar conversão para pelo menos `America/New_York`, `Europe/Lisbon` e `Asia/Tokyo`, incluindo datas relevantes de mudança de horário e desambiguação em horários repetidos/inexistentes.

## Fora de escopo até decisão

- Agenda administrável e seleção de slots entram na etapa 3; pagamento, prontuário, avaliação clínica, mensagens de crise e Google Calendar ainda não foram definidos.
- Upload de arquivos e relato clínico detalhado.
- Analytics de conversão individual ou pixels publicitários.

## Decisões que bloqueiam a etapa do formulário

- Definir obrigatoriedade e necessidade dos campos, sobretudo motivo/expectativas.
- Escolher provedor do formulário/backend e destino do envio.
- Definir retenção, exclusão, operadores e revisão do aviso LGPD.
- O fuso da psicóloga já está confirmado como `America/Sao_Paulo`. As regras de slots, bloqueios e horários por modalidade/local pertencem à etapa 3 e não bloqueiam o formulário simples da etapa 2.
