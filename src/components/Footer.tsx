interface Member {
  name: string;
}

export default function Footer() {
  const members: Member[] = [
    { name: 'Maria Fenelly C. David' },
    { name: 'Stella Cassandra R. De Jesus' },
    { name: 'Samantha Kathalea Y. Juson' },
    { name: 'Elisha Jasmine V. Laurito' },
    { name: 'Brent Adrian M. Fogarty' },
    { name: 'Eishan Quiel J. Oliveros' },
  ];

  return (
    <footer className="border-t border-(--border) bg-(--bg-card) px-6 py-6 text-(--text-muted)">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-md font-semibold tracking-wide text-(--text)">
            Group 4
          </p>
          <p className="mt-1 text-sm text-(--text-dim)">9 - Avery</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-md font-display font-bold tracking-widest text-(--text)">
            Mga Miyembro
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
            {members.map(({ name }) => (
              <li key={name} className="text-(--text-muted)">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}