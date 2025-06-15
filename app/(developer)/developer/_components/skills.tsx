import { skillsCommand } from '@/app/data';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[90%] mx-auto">
      {skillsCommand.map((skill, index) => {
        const Icon = skill.Icon;
        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-neutral-800 dark:text-white">
                <Icon className="size-5 opacity-80" />
                <span>{skill.title}</span>
              </div>
              <span className="text-xs text-neutral-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-1 bg-neutral-200 dark:bg-neutral-700" />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
