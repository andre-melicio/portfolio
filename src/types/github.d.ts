export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  pushed_at: string
  topics: string[]
  visibility: string
}

export interface GitHubCache {
  lastUpdate: string
  repos: GitHubRepo[]
} 