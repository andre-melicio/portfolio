
## Visão geral do projeto – Landing Page de Portfólio

**Objetivo principal**  
Criar uma landing page pública que apresente, de forma automática e contínua:

1. Repositórios públicos do GitHub (nome, descrição, estrelas, data do último commit).  
2. Postagens recentes do LinkedIn (texto ou primeira linha, data, total de reações, link).  
3. Site disponível 24 × 7 em domínio próprio ou `username.github.io`.

### Escopo

| Item                                           | Dentro | Fora |
|------------------------------------------------|:------:|:----:|
| Listagem dinâmica de repositórios GitHub       |  ✔     |      |
| Importação até 10 posts do LinkedIn            |  ✔     |      |
| Página única (SPA/SSG) + rota `/api/cache`     |  ✔     |      |
| Automação de rebuilds (webhooks / cron)        |  ✔     |      |
| Hospedagem em GitHub Pages / Vercel / Netlify  |  ✔     |      |
| Deploy de apps independentes                   |        |  ✖   |
| CMS completo / e‑commerce / pagamentos         |        |  ✖   |
| Hosting on‑premise                             |        |  ✖   |

### Requisitos de alto nível
* SSG/ISR com Next.js 14.  
* Build automático por push, webhook ou cron diário (04:00 UTC).  
* Lighthouse ≥ 90 em Performance e Acessibilidade.  
* Responsividade e suporte a tema claro/escuro.
