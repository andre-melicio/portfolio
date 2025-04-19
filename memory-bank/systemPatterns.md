# Arquitetura e Padrões do Sistema – Sistema de Biblioteca

**Arquitetura Geral:** Adota-se os princípios da **Clean Architecture (Arquitetura Limpa)** – separando o sistema em camadas de domínio, aplicação, interface e infraestrutura. As regras de negócio não dependem de detalhes de implementação externos:
- Camada de **Domínio**: contém entidades como *Livro* e *Usuário* e regras de negócio (ex: política de empréstimo).
- Camada de **Aplicação**: contém os casos de uso (ex: *RegistrarEmpréstimo*, *CadastrarLivro*) orquestrando as operações do domínio.
- Camada de **Interface** (Interface do Usuário/API): responsável pela interação com o usuário (ex: interface web) ou APIs externas. Chama os casos de uso da aplicação.
- Camada de **Infraestrutura**: detalhes técnicos como repositório de dados (ex: banco de dados SQL) e frameworks. Implementa interfaces definidas pelo domínio/aplicação (por exemplo, repositório de livros).

**Regras de Dependência:** Cada camada só pode depender de camadas mais internas. Por exemplo, a camada de aplicação conhece o domínio, mas o domínio não conhece nada externo; a interface conhece a aplicação (casos de uso), mas não o contrário. Isso garante baixo acoplamento e facilidade de manutenção.

**Padrões de Projeto Utilizados:**
- *Repository Pattern*: a persistência de Livro/Usuário é abstraída em repositórios, permitindo trocar o banco de dados sem impactar o domínio&#8203;:contentReference[oaicite:12]{index=12}.
- *DTOs*: objetos de transferência de dados entre camadas, para não expor entidades do domínio diretamente na interface.
- *Injeção de Dependência*: as implementações de repositório e serviços externos são injertadas nas camadas superiores, seguindo o princípio da inversão de dependências da Clean Architecture.

**Decisões-chave:**
- Banco de dados escolhido: PostgreSQL (relacional) pelos requisitos de consistência e estrutura dos dados.
- Framework web: Django (Python) para acelerar o desenvolvimento da interface e exposição de APIs, mantendo camada de interface isolada.
- Não há uso de bibliotecas ORM automáticas; optou-se por SQLAlchemy para controle fino e compatibilidade com Clean Architecture.

**Componentes e Relacionamentos:**
- O componente **Gestor de Empréstimos** coordena repositório de livros, usuários e notificação de atrasos.
- O **Módulo de Relatórios** gera listas de livros atrasados consultando diretamente a camada de aplicação (não acessa o DB diretamente).
