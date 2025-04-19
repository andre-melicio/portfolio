# Guia de Implantação em Produção

Este documento é utilizado quando formos preparar ou revisar a implantação do sistema em produção.

**Ambiente de Produção:**
- Servidor: Ubuntu 22.04 LTS x64, 4 vCPUs, 8GB RAM.
- Banco de Dados: PostgreSQL 14, rodando em container Docker.
- URL da aplicação: http://biblioteca.minhaempresa.com (porta 80, proxy nginx).

**Variáveis de Ambiente Necessárias:**
- `DJANGO_SECRET_KEY`: chave secreta do Django para ambiente produtivo.
- `DB_PASSWORD`: senha do usuário do banco de dados.
- `EMAIL_HOST_USER` / `EMAIL_HOST_PASSWORD`: credenciais do email corporativo para notificações.

**Passos para Implantar:**
1. Fazer *pull* da última versão estável do código (`main`) no servidor.
2. Construir as imagens Docker com `docker-compose -f production.yml build`.
3. Executar migrações do banco de dados: `docker-compose run web python manage.py migrate`.
4. Iniciar os containers: `docker-compose -f production.yml up -d`.
5. Verificar os logs dos serviços para garantir que subiram corretamente (especialmente conexões ao DB e envio de email).

**Pós-implantação:**
- Acessar a URL e realizar um teste de login, cadastro de livro e empréstimo para validar.
- Monitorar o arquivo de log em busca de erros nos primeiros acessos.
