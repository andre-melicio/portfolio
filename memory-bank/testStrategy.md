# Estratégia de Testes

**Abordagem de Teste:** O projeto seguirá **Testes de Unidade** para regras de negócio e **Testes de Integração** para casos de uso completos. Vamos adotar elementos de TDD em novos módulos críticos.

**Cobertura Alvo:** Almejamos > 80% de cobertura de código em testes automatizados. Funcionalidades centrais (empréstimo, devolução, cálculo de atraso) devem ter cobertura próxima de 100%.

**Ferramentas de Teste:** 
- Framework de testes **Pytest** (Python) para unidades e integração.
- Uso do plugin **pytest-django** para configurar ambiente de teste isolado do Django.
- Ferramenta de cobertura **coverage.py** para medir porcentagem de código executado pelos testes.

**Cenários de Teste Importantes:**
- Empréstimo de livro quando há unidades disponíveis (deve reduzir estoque e registrar empréstimo ativo).
- Tentativa de empréstimo quando não há livros disponíveis (deve ser impedida com mensagem de erro).
- Devolução de livro e verificação de atualização no estoque.
- Geração de relatório de atrasos com usuários que passaram da data de devolução (inclui envio de notificação).

**Critérios de Aceitação (para testes de aceitação/manual):**
- Usuário consegue cadastrar um novo livro fornecendo título e autor, e ele aparece na listagem.
- ... *(outros critérios definidos pelos requisitos do projeto)*
