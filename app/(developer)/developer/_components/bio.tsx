'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MovingBorderBtn } from '@/components/ui/moving-border';
import BioLoading from './bio-loading';

const Bio = () => {
  const [data, setData] = useState<GithubResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBio = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://api.github.com/users/yuvraj-singh-lodhi'
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getBio();
  }, []);

  if (loading) return <BioLoading />;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {data && (
        <>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <MovingBorderBtn borderRadius="100%">
              <Image
                src={data.avatar_url}
                alt="Yuvraj Singh Lodhi"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </MovingBorderBtn>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl font-semibold">{data.name}</h1>
                <BsFillPatchCheckFill className="text-blue-500 size-5" />
              </div>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </div>

          <p className="text-sm text-zinc-300">{data.bio}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <SiGithub className="text-xl text-yellow-500" />
              <span className="hidden sm:inline">GitHub:</span>
              <Link
                href={data.html_url}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                @{data.login}
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <SiLinkedin className="text-xl text-yellow-500" />
              <span className="hidden sm:inline">LinkedIn:</span>
              <Link
                href="https://www.linkedin.com/in/yuvrajsinghlodhi/"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                @yuvrajsinghlodhi
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Bio;
