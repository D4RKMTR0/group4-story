// src/components/Footer.tsx
import { Fragment } from 'react';

interface Member {
  name: string;
  contribution: string;
}

export default function Footer() {
  const members: Member[] = [
    { name: 'Lorem Ipsum', contribution: 'Sit Dolor' },
    { name: 'Amet Consectetur', contribution: 'Adipiscing Elit' },
    { name: 'Tempor Incididunt', contribution: 'Labore Magna' },
    { name: 'Aliqua Enim', contribution: 'Minim Veniam' },
  ];

  return (
    <footer className="border-t border-(--border) bg-(--bg-card) px-6 py-6 text-(--text-muted)">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-(--text)">
            Group 4
          </p>
          <p className="mt-1 text-xs text-(--text-dim)">9 - Avery</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="font-display text-[10px] font-bold tracking-widest text-(--text) uppercase">
            Mga Miyembro
          </p>
          <ul className="grid grid-cols-[auto_auto] justify-start gap-x-2 gap-y-1 text-xs">
            {members.map(({ name, contribution }) => (
              <Fragment key={name}>
                <span className="text-(--text-muted)">{name}</span>
                <span className="text-(--text-dim)">— {contribution}</span>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
