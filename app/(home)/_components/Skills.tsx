'use client';

import { skillsCommand } from '@/app/data';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import  Link  from 'next/link';

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Link href="/skills"><Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      /></Link>
      <HoverEffect items={skillsCommand} />
    </div>
  );
};
export default Skills;
