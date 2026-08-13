import React, { useState } from 'react';
import NavItem from './ui/NavItem';
import {
  ClipboardTextIcon,
  UsersIcon,
  BookOpenTextIcon,
  UsersFourIcon,
} from '@phosphor-icons/react';

export default function Navbar(): React.JSX.Element {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav className="flex h-20 sm:h-16 w-screen shrink-0 flex-wrap items-center justify-evenly gap-4 lg:gap-8 border-y border-(--text-muted)/20 bg-(--bg-card) px-4 py-2 font-serif text-sm tracking-wide shadow-inner sm:w-full sm:max-w-2xl sm:px-8">
      <NavItem
        to="/buod"
        content="Buod"
        icon={ClipboardTextIcon}
        hoveredPath={hoveredPath}
        onHoverStart={() => setHoveredPath('/buod')}
        onHoverEnd={() => setHoveredPath(null)}
      />
      <NavItem
        to="/tauhan"
        content="Tauhan"
        icon={UsersIcon}
        hoveredPath={hoveredPath}
        onHoverStart={() => setHoveredPath('/tauhan')}
        onHoverEnd={() => setHoveredPath(null)}
      />
      <NavItem
        to="/pagsusuri"
        content="Pagsusuri"
        icon={BookOpenTextIcon}
        hoveredPath={hoveredPath}
        onHoverStart={() => setHoveredPath('/pagsusuri')}
        onHoverEnd={() => setHoveredPath(null)}
      />
      <NavItem
        to="/kredito"
        content="Kredito"
        icon={UsersFourIcon}
        hoveredPath={hoveredPath}
        onHoverStart={() => setHoveredPath('/kredito')}
        onHoverEnd={() => setHoveredPath(null)}
      />
    </nav>
  );
}
