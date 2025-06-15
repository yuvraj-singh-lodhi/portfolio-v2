import { projectsCommand } from '@/app/data';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="space-y-8">
      {projectsCommand.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row gap-4 p-4 rounded-lg ${project.background} text-white`}
        >
          {/* Project Image */}
          <div className="w-full sm:w-[300px] h-[150px] relative">
            {project.cover ? (
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 rounded-md flex items-center justify-center text-sm text-gray-300">
                No Image
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="flex-1 space-y-2">
            <Link
              href={project.link || '#'}
              target="_blank"
              className="text-2xl font-semibold hover:underline"
            >
              {project.title}
            </Link>
            <p className="text-sm text-white/90">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((Icon, idx) => (
                <Icon key={idx} className="size-6 sm:size-7" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
