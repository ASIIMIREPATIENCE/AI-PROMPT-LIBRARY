// components/promptcard.tsx

interface PromptCardProps {
  title: string;
  content: string;
  category: string;
}

export default function PromptCard({ title, content, category }: PromptCardProps) {
  const preview = content.length > 100 ? content.slice(0, 100) + "..." : content;

  return (
    <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <span className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full whitespace-nowrap ml-2">
          {category}
        </span>
      </div>
      <p className="text-sm text-neutral-600 leading-relaxed">{preview}</p>
    </div>
  );
}