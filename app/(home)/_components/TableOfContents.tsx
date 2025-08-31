// TableOfContents.tsx
interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: TOCItem[];
  onSectionClick: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, onSectionClick }) => {
  return (
    <nav className="space-y-1">
      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">
        Table of Contents
      </h3>
      <ul className="space-y-1 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onSectionClick(section.id)}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors block py-1 text-left w-full"
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
