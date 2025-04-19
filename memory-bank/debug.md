# Memória de Depuração

**Problemas Conhecidos & Soluções:**
- *Erro de conexão ao banco de dados na inicialização*: Ocorre se o serviço PostgreSQL não estiver ativo. **Solução:** Verificar se o container Docker do banco foi iniciado antes do backend.
- *Bug:* Aplicação não envia email de atraso. **Causa provável:** Configurações SMTP ausentes no `.env`. **Solução:** Adicionar variáveis de email (SMTP_HOST, SMTP_LOGIN) e reiniciar.

**Procedimentos de Depuração:**
1. Habilitar logging detalhado: setar `DEBUG=true` no arquivo de configuração do Django para obter stack traces completos.
2. Utilizar script de teste (`scripts/teste_integrado.py`) que reproduz um fluxo completo (cadastrar livro -> emprestar -> devolver) para verificar onde ocorre falha.
3. Verificar integridade das camadas: se a camada de Interface está passando dados corretos para a Aplicação (possíveis quebras nas entidades de domínio).

**Ferramentas Disponíveis:**
- Logging em arquivo (`logs/app.log`) para verificar eventos durante execução.
- Testes unitários (`pytest`) podem ser executados com marcador `-m "debug"` para rodar apenas testes relevantes a problemas recentes.
