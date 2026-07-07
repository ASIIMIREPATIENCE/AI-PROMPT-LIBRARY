// app/add/page.tsx
import { addPrompt } from "@/lib/data";
import Link from "next/link";

export default function AddPromptPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-700 mb-6"
        >
          ← Back to Library
        </Link>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 md:p-8">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Add New Prompt</h1>
          <p className="text-neutral-500 text-sm mb-6">
            Fill in the details below to save a new AI prompt.
          </p>

          <form action={addPrompt} className="space-y-5">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">
                Prompt Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="e.g., Email Marketing Copy"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 outline-none text-neutral-800"
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-neutral-700 mb-1">
                Prompt Content
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={5}
                placeholder="Write your prompt here..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 outline-none text-neutral-800 resize-y"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                required
                placeholder="e.g., Coding, Writing, Lifestyle"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 outline-none text-neutral-800"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors"
            >
              Save Prompt
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}