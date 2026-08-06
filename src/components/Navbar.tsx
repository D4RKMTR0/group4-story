import React from 'react';
import NavItem from './ui/NavItem';

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="flex min-w-2xl shrink-0 flex-wrap  gap-8 border-y border-(--text-muted)/20 bg-(--bg-card) px-8 py-2 font-serif text-sm tracking-wide shadow-inner">
      <NavItem to="/buod" content="Buod"/>
    </nav>
  );
}
