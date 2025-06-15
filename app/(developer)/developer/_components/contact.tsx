import { contactCommand } from '@/app/data';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="space-y-5 max-w-md mx-auto">
      {contactCommand.map((contact, index) => {
        const Icon = contact.icon;
        return (
          <div key={index} className="flex items-center justify-between bg-muted p-4 rounded-lg shadow-sm hover:bg-muted/70 transition">
            <div className="flex items-center gap-3">
              <Icon className="size-6 text-yellow-500" />
              <div className="text-base text-zinc-200">{contact.title}</div>
            </div>
            <Link
              href={contact.link}
              target="_blank"
              className="text-blue-400 text-sm hover:underline truncate max-w-[60%] text-right"
            >
              {contact.username}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
