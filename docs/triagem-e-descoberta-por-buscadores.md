# Triagem inicial e descoberta do site

**Análise de 19/11/2026.** Recomendações para a fase inicial; nenhuma integração de formulário ou chatbot está implementada nesta prévia.

## Recomendação em etapas

1. Publicar o site com links para WhatsApp, e-mail e Instagram, depois de aprovar textos, fotos, privacidade e domínio. Usar no WhatsApp Business uma saudação curta, mensagem de ausência e respostas rápidas. A triagem continua humana.
2. Se o volume de contatos justificar, acrescentar formulário próprio e curto no site. Coletar somente nome, contato, país/fuso, modalidade e faixas gerais de disponibilidade. Informar finalidade, canal de resposta, retenção e direitos. Não solicitar relato clínico livre nesta etapa.
3. Considerar automação conversacional na API oficial do WhatsApp Business somente depois de definir fluxo, necessidade de escala, custos, armazenamento, segurança, encaminhamento humano e avaliação de privacidade.

## Formulário HTML e armazenamento

Um formulário HTML apenas mostra campos no navegador. Para receber dados, precisa de um destino: um endpoint (por exemplo, Cloudflare Worker), serviço de formulários ou Google Forms. Um banco de dados **não é obrigatório**: o endpoint pode validar e encaminhar para uma caixa de e-mail ou outro serviço autorizado. A caixa de e-mail também armazena os dados e precisa de política de acesso, retenção e exclusão. Banco de dados faz sentido quando houver painel de triagem, busca por solicitações, estados, integração com agenda ou histórico operacional.

Google Forms pode servir como protótipo de baixo esforço: pode ser incorporado ao site e guarda respostas no próprio Forms ou em Sheets. A interface e a experiência visual são menos controláveis; as permissões do formulário e da planilha vinculada precisam ser administradas separadamente. Para o site final, a recomendação é um formulário próprio, curto, com endpoint seguro e antispam. Antes de ativar qualquer uma das opções, decidir fornecedor, acesso, retenção e aviso de privacidade. Dados sobre saúde são sensíveis na LGPD; por isso, evitar coletá-los em triagem administrativa e pedir revisão jurídica para qualquer fluxo que os trate.

## WhatsApp: opções

| Opção | Faz o quê | Complexidade |
|---|---|---|
| WhatsApp Business (aplicativo) | Saudação, ausência e respostas rápidas; boa organização manual | Baixa |
| Link com mensagem inicial sugerida | Abre a conversa com texto pré-preenchido; paciente pode editar | Baixa |
| Plataforma oficial/API + fluxo | Perguntas e respostas automatizadas, integração e encaminhamento humano | Alta; requer conta, provedor ou desenvolvimento, manutenção e possível cobrança por mensagens |

O chatbot não deve classificar gravidade clínica, diagnosticar ou prometer vaga. Perguntas seguras para uma triagem administrativa: modalidade desejada, cidade/país, fuso, preferência geral de horário e canal de retorno. Oferecer sempre passagem para atendimento humano e evitar pedir detalhes íntimos pelo bot.

## Ser encontrado por buscadores e experiências de IA

Não há cadastro que garanta que uma IA recomende a profissional. Primeiro, o site precisa estar público em domínio próprio, acessível a robôs e **sem a marcação `noindex` da prévia**. Depois: títulos e descrições claros; conteúdo textual original que responda às dúvidas reais sobre psicoterapia, modalidades e regiões; CRP e dados profissionais consistentes; links internos; sitemap e Search Console; perfil da empresa no Google quando a profissional definir os dados publicáveis; Bing Webmaster Tools; dados estruturados coerentes com o texto visível; atualização periódica de conteúdo útil. Permitir o rastreador de busca da OpenAI (`OAI-SearchBot`) se quiser elegibilidade para resultados do ChatGPT Search. A permissão de `GPTBot` para treinamento é uma escolha separada. `llms.txt` não é requisito do Google para suas experiências de IA. Aparição e posição nunca são garantidas.

### Fontes oficiais

- [Google: recursos de IA e seu site](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: construir e enviar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [OpenAI: robôs de rastreamento](https://developers.openai.com/api/docs/bots)
- [Meta: WhatsApp Business Platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/overview)
- [WhatsApp: mensagem de saudação](https://faq.whatsapp.com/501866148528310/)
- [WhatsApp: respostas rápidas](https://faq.whatsapp.com/1791149784551042/)
- [Google Forms: onde salvar respostas](https://support.google.com/docs/answer/2917686)
- [Google Forms: incorporar em site](https://support.google.com/docs/answer/2839588)
- [ANPD: perguntas frequentes sobre dados sensíveis](https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes)
