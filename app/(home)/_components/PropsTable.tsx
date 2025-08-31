// ============= PROPS TABLE =============

// PropsTable.tsx
interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="text-left py-3 px-2 font-medium text-zinc-900 dark:text-zinc-100">
              Prop
            </th>
            <th className="text-left py-3 px-2 font-medium text-zinc-900 dark:text-zinc-100">
              Type
            </th>
            <th className="text-left py-3 px-2 font-medium text-zinc-900 dark:text-zinc-100">
              Default
            </th>
            <th className="text-left py-3 px-2 font-medium text-zinc-900 dark:text-zinc-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr 
              key={prop.name} 
              className={index < props.length - 1 ? "border-b border-zinc-100 dark:border-zinc-800/50" : ""}
            >
              <td className="py-3 px-2 font-mono text-zinc-900 dark:text-zinc-100">
                {prop.name}
                {prop.required && (
                  <span className="text-red-500 ml-1">*</span>
                )}
              </td>
              <td className="py-3 px-2 text-zinc-600 dark:text-zinc-400 font-mono text-xs">
                {prop.type}
              </td>
              <td className="py-3 px-2 text-zinc-600 dark:text-zinc-400">
                {prop.default || "-"}
              </td>
              <td className="py-3 px-2 text-zinc-600 dark:text-zinc-400">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
