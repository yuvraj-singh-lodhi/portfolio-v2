// ============= CODE BLOCK =============

// CodeBlock.tsx
"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = "bash",
  filename 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      {filename && (
        <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className="bg-zinc-900 dark:bg-zinc-950 text-zinc-100 p-4 rounded-lg overflow-x-auto text-sm border border-zinc-700">
          <code>{code}</code>
        </pre>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="absolute top-2 right-2 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
