import { useState } from 'react';
import { NavLink } from 'react-router';
import { DynamicHighlighter } from './DynamicHighlighter';
import { type Icon } from '@phosphor-icons/react';

type HighlightVariant = 'classic' | 'double' | 'slash' | 'box' | 'underline';
const VARIANTS: HighlightVariant[] = [
  'classic',
  'double',
  'slash',
  'box',
  'underline',
];

interface NavItemProps {
  to: string;
  content: string;
  icon?: Icon;
}

export default function NavItem({ to, content }: NavItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentVariant, setCurrentVariant] =
    useState<HighlightVariant>('classic');

  const getNewVariant = (currentVariant: HighlightVariant) => {
    let newVariant: HighlightVariant;

    do {
      newVariant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
    } while (newVariant === currentVariant && VARIANTS.length > 1);

    return newVariant;
  };

  const handleMouseEnter = () => {
    const randomVariant = getNewVariant(currentVariant);
    setCurrentVariant(randomVariant);
    setIsHovered(true);
  };

  return (
    <NavLink
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center gap-2 px-3 py-1"
    >
      <span
        className="relative z-0 font-display text-xl"
        style={{ mixBlendMode: 'darken' }}
      >
        {content}
      </span>
      <div className="absolute inset-y-0 left-0 min-w-full">
        <DynamicHighlighter variant={currentVariant} isHovered={isHovered} />
      </div>
    </NavLink>
  );
}
