# Contexto Técnico – Sistema de Biblioteca

**Linguagens e Frameworks:** 
- Backend em **Python 3.11** usando Django para a interface web e casos de uso, com SQLAlchemy para acesso ao banco de dados.
- Frontend web em **HTML/CSS/JS** (simples, uso interno apenas).
- Banco de Dados **PostgreSQL** hospedado localmente.

**Configuração de Desenvolvimento:**
- Sistema de versionamento **Git**; seguir modelo Git Flow para ramificações (main, develop, feature branches).
- Ambiente virtual Python (`venv`) para dependências. Arquivo `requirements.txt` lista libs necessárias.
- Padronização de código conforme **PEP8** (Python) e ESLint (JS).

**Restrições e Considerações Técnicas:**
- O sistema deve rodar em computadores modestos (limite de 4GB RAM, CPUs dual-core).
- Deve funcionar offline (cache local de operações) e sincronizar dados quando online, devido a possíveis quedas de internet.
- Compatibilidade com Windows e Linux. Testes automatizados devem ser executados em ambos OS.

**Dependências Externas:**
- Biblioteca de envio de e-mails (para notificações de atraso): usar **SMTP** via smtplib (evitar serviços externos por restrição de privacidade).
- Nenhum serviço em nuvem externo deve ser necessário para operação principal (exigência do cliente para funcionamento offline).
