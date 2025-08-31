
// ============= INSTALLATION SECTION =============

// InstallationSection.tsx
import { CodeBlock } from "./CodeBlock";

interface InstallationSectionProps {
  packageName: string;
  dependencies?: string[];
}

export const InstallationSection: React.FC<InstallationSectionProps> = ({ 
  packageName, 
  dependencies = [] 
}) => {
  const packageManagers = [
    { name: "npm", command: `npm install ${packageName}` },
    // { name: "yarn", command: `yarn add ${packageName}` },
    // { name: "pnpm", command: `pnpm add ${packageName}` },
    // { name: "bun", command: `bun add ${packageName}` },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
          Install the package
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packageManagers.map((pm) => (
            <div key={pm.name}>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                {pm.name}
              </p>
              <CodeBlock code={pm.command} />
            </div>
          ))}
        </div>
      </div>
      
      {dependencies.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Required dependencies
          </h3>
          <CodeBlock code={`npm install ${dependencies.join(" ")}`} />
        </div>
      )}
    </div>
  );
};
