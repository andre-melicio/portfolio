## Contexto técnico

### Linguagens & frameworks
* **TypeScript** + **Next.js 14**  
* **Tailwind CSS** (mobile‑first)  
* Node 18 LTS para build; testes em **Jest** (≥ 80 % cobertura).  
* ESLint + Prettier para estilo.

### Hospedagem
* **GitHub Pages** (padrão) ou Vercel/Netlify.  
* CDN global incluso, SSL grátis, domínio customizado via CNAME.

### Integrações externas
| Serviço              | Uso                                           |
|----------------------|-----------------------------------------------|
| GitHub API REST      | Listar repositórios públicos.                 |
| LinkedIn Posts API   | Buscar últimas publicações do perfil.         |
| GitHub Actions       | Build, cache e deploy automáticos.            |

### Requisitos não funcionais
* **Desempenho**: TTFB < 200 ms (Brasil‑Sul); build ≤ 120 s.  
* **Segurança**: `GITHUB_TOKEN` (`public_repo`) & `LINKEDIN_TOKEN` (`r_liteprofile r_ugc_posts`) armazenados como **Secrets**; nunca expostos ao front.  
* **Confiabilidade**: 99,9 % uptime; e‑mail on‑failure.  
* **Observabilidade**: logs de build + page‑view analytics (ex.: Plausible).  
* **Manutenibilidade**: código tipado, lintado e testado; estrutura monorepo simples.