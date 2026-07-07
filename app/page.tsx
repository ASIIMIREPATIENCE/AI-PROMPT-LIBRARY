// app/page.tsx
import Link from "next/link";
import { getPrompts } from "@/lib/data";
import PromptCard from "@/components/PromptCard";

interface HomeProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const searchQuery = params.search || "";
  const prompts = await getPrompts(searchQuery);

  const totalPrompts = prompts.length;
  const categories = new Set(prompts.map((p) => p.category)).size;

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* HERO SECTION */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Your AI Prompt <br />
              <span className="text-neutral-600">Library</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Save, organize, and quickly find your favourite AI prompts. Never lose a great
              idea again.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/add"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                Add New Prompt
              </Link>
            </div>
          </div>

          {/* STATS BAR */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
            <div className="bg-neutral-50 rounded-lg p-4 text-center border border-neutral-200">
              <p className="text-2xl font-bold text-neutral-900">{totalPrompts}</p>
              <p className="text-sm text-neutral-500">Total Prompts</p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-4 text-center border border-neutral-200">
              <p className="text-2xl font-bold text-neutral-900">{categories}</p>
              <p className="text-sm text-neutral-500">Categories</p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-4 text-center border border-neutral-200 col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-neutral-900">📝</p>
              <p className="text-sm text-neutral-500">Ready to use</p>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSING SECTION */}
      <section id="browse" className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-900">Browse Prompts</h2>
            <span className="text-sm text-neutral-500 mt-2 sm:mt-0">
              {totalPrompts} prompts available
            </span>
          </div>

          {/* SEARCH FORM */}
          <form method="GET" className="mb-8">
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search prompts by title or category..."
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 outline-none text-neutral-800 placeholder-neutral-400 bg-white transition-shadow"
            />
          </form>

          {/* PROMPT CARDS GRID */}
          {totalPrompts === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-neutral-200">
              <p className="text-neutral-500">No prompts found. Try a different search!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {prompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  title={prompt.title}
                  content={prompt.content}
                  category={prompt.category}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-neutral-500">
              AI Prompt Library &mdash; built with Next.js
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-neutral-500 hover:text-neutral-700">
                GitHub
              </a>
              <a href="#" className="text-sm text-neutral-500 hover:text-neutral-700">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}