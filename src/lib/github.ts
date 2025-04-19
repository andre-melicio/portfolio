import { Octokit } from '@octokit/rest'
import type { GitHubRepo } from '@/types/github'
import fs from 'fs/promises'
import path from 'path'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const CACHE_FILE = path.join(process.cwd(), 'public', 'cache', 'github.json')
const CACHE_DURATION = 15 * 60 * 1000 // 15 minutos em ms

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    // Verifica cache
    try {
      const stats = await fs.stat(CACHE_FILE)
      const age = Date.now() - stats.mtimeMs
      
      if (age < CACHE_DURATION) {
        const cache = JSON.parse(await fs.readFile(CACHE_FILE, 'utf-8'))
        return cache.repos
      }
    } catch (error) {
      // Cache não existe ou está corrompido, continua com request
    }

    // Busca repos da API
    const { data: repos } = await octokit.repos.listForUser({
      username,
      sort: 'pushed',
      per_page: 100,
      visibility: 'public'
    })

    // Filtra e formata dados
    const formattedRepos: GitHubRepo[] = repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      pushed_at: repo.pushed_at,
      topics: repo.topics,
      visibility: repo.visibility
    }))

    // Atualiza cache
    await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true })
    await fs.writeFile(CACHE_FILE, JSON.stringify({
      lastUpdate: new Date().toISOString(),
      repos: formattedRepos
    }))

    return formattedRepos
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error)
    throw new Error('Falha ao carregar repositórios do GitHub')
  }
} 