# Domínio e titularidade das contas — Soraia Medeiros

> Consulta realizada em 12/11/2026; documento revisado em 13/11/2026. O projeto ainda não contém confirmação de registro do domínio, criação de conta Cloudflare ou pagamento. A disponibilidade pode mudar a qualquer momento.

## Resultado da verificação

- O [Registro.br mostrou `soraiamedeiros.com.br` disponível para registro](https://registro.br/busca-dominio/?fqdn=soraiamedeiros.com.br), com opção de **R$ 40 por um ano**, na consulta de 12/11/2026. Não há nova confirmação de disponibilidade neste documento.
- A pesquisa pública não encontrou um site oficial claramente associado à Soraia. Isso não prova que ela não tenha outro domínio ou site não indexado. Perguntar se já possui algum domínio, acesso ao registrador ou contrato anterior antes de comprar outro.
- **Disponível** significa que o endereço específico ainda podia ser registrado na consulta; não significa que esteja reservado. Confirmar novamente imediatamente antes de concluir o pedido.

## O que faz cada serviço

- **Registro.br:** registra e renova o nome `.com.br` em nome de um CPF/CNPJ.
- **DNS:** direciona o endereço para o serviço que entrega o site.
- **Cloudflare Workers:** hospeda arquivos do site e, futuramente, executa funções de API. Workers não substitui o registro anual do domínio.
- **GitHub:** guarda código, histórico e especificações; não é a titularidade do domínio.

## Passo a passo recomendado para registrar

1. Soraia confirma que deseja `soraiamedeiros.com.br` e que não existe domínio anterior a aproveitar. Escolher se o titular será seu CPF ou CNPJ profissional, conforme sua operação.
2. Soraia cria/acessa sua conta no [Registro.br](https://registro.br/). Usar e-mail que ela controla e habilitar autenticação em duas etapas. Não compartilhar senha; Isaac pode orientar por chamada ou ser cadastrado como contato técnico depois.
3. Na [busca do Registro.br](https://registro.br/busca-dominio/?fqdn=soraiamedeiros.com.br), conferir novamente disponibilidade e clicar em **REGISTRAR**.
4. Informar o **CPF/CNPJ da titular**, dados exigidos e contato administrativo. O campo DNS é opcional no pedido inicial; pode usar provisoriamente o DNS gratuito do Registro.br. Ler e aceitar contrato/política somente se a titular concordar.
5. Concluir o pedido e pagar pelos meios apresentados no Registro.br. Guardar comprovante, e-mail de cadastro e data de renovação. Responder eventuais pendências dentro do prazo do e-mail.
6. Criar conta Cloudflare **controlada pela Soraia**; adicionar o domínio e escolher o plano Free, se adequado. Conferir registros DNS, especialmente os de e-mail se o novo domínio vier a ser usado para correio.
7. Copiar os dois nameservers atribuídos pela Cloudflare e configurá-los no Registro.br. Depois que a zona ficar ativa, conectar o domínio ao Worker publicado; conferir HTTPS, `www`/sem `www` e redirecionamento canônico.

O [tutorial administrativo do Registro.br](https://www.registro.br/ajuda/tutoriais-administrativos/) descreve a busca, CPF/CNPJ, contatos, DNS opcional e pagamento. A [Cloudflare explica a troca de nameservers](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/) e o [vínculo de domínio ao Worker](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## Em qual conta fica a Cloudflare?

**Recomendação: conta da cliente, com Isaac convidado como membro técnico.** Assim a cliente mantém acesso, faturamento, domínio e continuidade mesmo se trocar de desenvolvedor. Isaac usa sua própria identidade e recebe somente as permissões necessárias, por exemplo acesso à plataforma Workers e ao DNS do domínio; evitar senha compartilhada e superadministrador permanente. A Cloudflare permite convidar membros com papéis e escopos específicos ([gerenciar membros](https://developers.cloudflare.com/fundamentals/manage-members/manage/), [papéis](https://developers.cloudflare.com/fundamentals/manage-members/roles/)).

Manter o projeto na conta pessoal do desenvolvedor é viável para prototipar, mas cria uma transferência futura e mistura faturamento/permissões de clientes diferentes. Antes de publicar, definir também o acesso da cliente ao repositório GitHub, hoje na conta de Isaac, e registrar quem faz renovações, atualizações e suporte.

## Pendências imediatas

1. A Soraia confirma se já possui outro domínio/site e qual CPF/CNPJ será titular do novo domínio.
2. A Soraia decide registrar `soraiamedeiros.com.br` enquanto estiver disponível e realiza a contratação/pagamento.
3. Criar conta Cloudflare sob controle dela, convidar Isaac com escopo técnico adequado e conectar o domínio após o registro.
