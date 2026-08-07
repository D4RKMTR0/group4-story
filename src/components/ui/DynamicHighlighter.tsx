import { useId } from 'react';

interface HighlighterProps {
  variant: 'classic' | 'double' | 'slash' | 'box' | 'underline';
  isHovered: boolean;
  isActive?: boolean;
}

export function DynamicHighlighter({
  variant,
  isHovered,
  isActive,
}: HighlighterProps) {
  const uid = useId(); // unique per component instance, stable across re-renders
  const show = isHovered || isActive;

  const getConfig = () => {
    switch (variant) {
      case 'double':
        return {
          viewBox: '0 0 200 80',
          containerClass:
            '-inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+2rem)]',
          shape: (
            <>
              <path d="M 3 30 Q 45 26 102 29 T 197 27 Q 198 17 194 14 Q 105 12 50 15 T 4 18 Z" />
              <path d="M 5 50 Q 52 46 108 49 T 195 47 Q 197 37 193 34 Q 102 32 48 35 T 6 38 Z" />
            </>
          ),
        };
      case 'slash':
        return {
          viewBox: '0 0 200 70',
          containerClass:
            '-inset-x-3 -inset-y-3.5 w-[calc(100%+1.5rem)] h-[calc(100%+1.75rem)]',
          shape: (
            <path d="M 15 55 Q 50 40 100 25 T 185 15 Q 190 22 180 28 Q 110 38 60 52 T 15 55 Z" />
          ),
        };
      case 'box':
        return {
          viewBox: '0 0 200 70',
          containerClass:
            '-inset-x-4 -inset-y-2 w-[calc(100%+2rem)] h-[calc(100%+1rem)]',
          shape: (
            <path
              d="M 10 35 C 10 10, 30 8, 100 8 C 170 8, 190 12, 190 35 C 190 58, 170 62, 100 62 C 30 62, 10 58, 10 35 Z"
              fill="none"
              strokeWidth="3"
            />
          ),
        };
      case 'underline':
        return {
          viewBox: '0 0 200 30',
          containerClass: 'absolute inset-x-0 -bottom-1 h-4 w-full',
          shape: (
            <path d="M 2 20 Q 50 24 105 21 T 198 22 Q 199 15 196 12 Q 100 14 45 15 T 3 13 Z" />
          ),
        };
      case 'classic':
      default:
        return {
          viewBox: '0 0 200 50',
          containerClass:
            '-inset-x-3 -inset-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]',
          shape: (
            <>
              <path d="M 4 33 Q 35 38 95 34 T 194 31 Q 197 19 193 15 Q 120 11 60 14 T 6 18 Z" />
              <path
                d="M 12 28 Q 60 31 110 27 T 188 25 Q 189 20 186 18 Q 110 16 55 19 T 10 22 Z"
                opacity="0.6"
              />
            </>
          ),
        };
    }
  };

  const { viewBox, containerClass, shape } = getConfig();
  const filterId = `texture-${uid}`;
  const maskId = `wipe-${uid}`;

  return (
    <div className={`pointer-events-none absolute z-0 ${containerClass}`}>
      <svg
        className="h-full w-full overflow-visible"
        viewBox={viewBox}
        preserveAspectRatio="none"
        style={{ mixBlendMode: 'multiply' }}
      >
        <defs>
          <filter
            id={filterId}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.9"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id={maskId}>
            <rect
              x="0"
              y="0"
              width="200"
              height={viewBox.split(' ')[3]}
              fill="white"
              className={`origin-left transition-all duration-300 ease-out ${show ? 'scale-x-100' : 'scale-x-0'}`}
            />
          </mask>
        </defs>
        <g
          filter={`url(#${filterId})`}
          className="fill-green-700/60 stroke-green-700/60"
          mask={`url(#${maskId})`}
        >
          {shape}
        </g>
      </svg>
    </div>
  );
}