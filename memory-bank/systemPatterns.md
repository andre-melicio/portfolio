## Arquitetura e padrões

### Visão de alto nível
sql
Copiar
Editar
     +-------------------+
     |  GitHub Actions   |  gatilhos: push / webhook / cron
     +---------+---------+
               |
        Build (Next.js SSG/ISR)
               |
      +--------v---------+
      |  Static Assets   |
      +--------+---------+
               |
CDN (GitHub Pages / Vercel / Netlify)
               |
      Usuário  ⇄  Navegador
markdown
Copiar
Editar

### Componentes‑chave
1. **Next.js 14 com App Router**  
   * SSG na build e **Incremental Static Regeneration** só para a home.  
2. **APIs internas** `/api/github.ts` e `/api/linkedin.ts` (server‑side only).  
3. Cache JSON em `/public/cache/*.json` com TTL 15 min.  
4. **Fallback SWR** opcional no cliente (stale‑while‑revalidate).  
5. Workflow GitHub Actions (checkout → setup‑node → build → deploy‑pages).

### Padrões aplicados
* **SSG + ISR** para alto desempenho e baixo custo.  
* **Cache‑Aside** (gera JSON, serve estático).  
* **12‑Factor**: config via variáveis de ambiente (tokens).  
* **CI/CD automatizado** usando GitHub Actions como orquestrador único.
