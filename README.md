# Portfolio

Portfolio profissional que exibe automaticamente seus repositórios do GitHub e posts do LinkedIn.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub API](https://docs.github.com/en/rest)
- [LinkedIn API](https://learn.microsoft.com/en-us/linkedin/marketing)

## 📦 Pré-requisitos

- Node.js 20.x
- NPM ou Yarn
- Conta GitHub
- Conta LinkedIn Developer

## 🔧 Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/andre-melicio/portfolio.git
   cd portfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto
   ```env
   GITHUB_TOKEN=seu_token_aqui
   LINKEDIN_TOKEN=seu_token_aqui  # Opcional - será necessário após aprovação
   ```

4. Execute em desenvolvimento:
   ```bash
   npm run dev
   ```

## 🌐 Deploy

O deploy é feito automaticamente no GitHub Pages quando:
- Há um push na branch main
- Todo dia às 04:00 UTC (via GitHub Actions)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 TODO

- [ ] Implementar integração com LinkedIn após aprovação da API
- [ ] Adicionar filtros por linguagem
- [ ] Implementar tema escuro automático baseado no horário
- [ ] Adicionar mais métricas dos repositórios
- [ ] Melhorar performance de carregamento 