import { Suspense } from 'react'
import GitHubRepos from '@/components/GitHubRepos'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">André Melício</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Desenvolvedor Full Stack
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projetos no GitHub</h2>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        }>
          <GitHubRepos />
        </Suspense>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Posts no LinkedIn</h2>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        }>
          {/* LinkedInPosts será implementado após aprovação da API */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <p className="text-yellow-800 dark:text-yellow-200">
              Integração com LinkedIn em desenvolvimento. Em breve seus posts aparecerão aqui!
            </p>
          </div>
        </Suspense>
      </section>

      <footer className="text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 André Melício. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
} 