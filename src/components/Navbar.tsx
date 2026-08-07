import React, { useState } from 'react';
import NavItem from './ui/NavItem';
import {
  ClipboardTextIcon,
  UsersIcon,
  BookOpenTextIcon,
} from '@phosphor-icons/react';

export default function Navbar(): React.JSX.Element {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav className="flex justify-evenly w-full max-w-2xl shrink-0 flex-wrap gap-8 border-y border-(--text-muted)/20 bg-(--bg-card) px-8 py-2 font-serif text-sm tracking-wide shadow-inner">
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
    </nav>
  );
}
