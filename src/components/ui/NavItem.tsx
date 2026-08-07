import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
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
  hoveredPath: string | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function NavItem({
  to,
  content,
  icon: IconComponent,
  hoveredPath,
  onHoverStart,
  onHoverEnd,
}: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentVariant, setCurrentVariant] = useState<HighlightVariant>('classic');

  const getNewVariant = (currentVariant: HighlightVariant) => {
    let newVariant: HighlightVariant;
    do {
      newVariant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
    } while (newVariant === currentVariant && VARIANTS.length > 1);
    return newVariant;
  };

  const handleMouseEnter = () => {
    onHoverStart();
    if (isActive) return;
    const randomVariant = getNewVariant(currentVariant);
    setCurrentVariant(randomVariant);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    onHoverEnd();
    setIsHovered(false);
  };

  const isDifferentItemHovered = hoveredPath !== null && hoveredPath !== to;
  const shouldHighlight = isActive ? !isDifferentItemHovered : isHovered;

  return (
    <NavLink
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-2 px-3 py-1 mx-1"
    >
      <span
        className="relative z-0 flex items-center gap-1 font-display text-xl"
        style={{ mixBlendMode: 'darken' }}
      >
        {IconComponent && <IconComponent size={24} />}
        {content}
      </span>
      <div className="absolute inset-0 pointer-events-none">
        <DynamicHighlighter variant={currentVariant} isHovered={shouldHighlight} />
      </div>
    </NavLink>
  );
}