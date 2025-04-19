## Foco de trabalho atual (abril 2025)

* **Tarefa em andamento**: iniciar projeto.
1. Criar repositório `portfolio‑lanepage`.  
2. Rodar `npx create-next-app@latest` com TypeScript, ESLint, Tailwind.  
3. Configurar libs de API (`@octokit/rest`, cliente LinkedIn).  

* Próximos passos
4. Implementar `lib/github.ts` para `GET /users/{user}/repos?sort=pushed`.  
5. Implementar `lib/linkedin.ts` com OAuth 2.0 (token de membro).  
6. Criar página `app/page.tsx` que consome cache e renderiza cards.