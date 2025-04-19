import { getGitHubRepos } from '@/lib/github'
import type { GitHubRepo } from '@/types/github'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

async function GitHubRepos() {
  const repos = await getGitHubRepos('andre-melicio')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <article
          key={repo.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              {repo.name}
            </a>
          </h3>
          
          {repo.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {repo.description}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                {repo.language}
              </span>
            )}
            
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
              {repo.stargazers_count}
            </span>

            <span>
              Atualizado {formatDistanceToNow(new Date(repo.pushed_at), {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
          </div>
        </article>
      ))}
    </div>
  )
}

export default GitHubRepos 