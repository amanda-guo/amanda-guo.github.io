import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type NodeId = 'ai' | 'design' | 'engineering' | 'enablement' | 'product' | 'business' | 'center';

interface NodeDef {
  id: Exclude<NodeId, 'center'>;
  label: string;
  x: number;
  y: number;
  description: string;
  tag: string;
}

const NODES: NodeDef[] = [
  { id: 'ai',          label: 'AI',          x: 50, y:  7, description: 'AI-driven interfaces',     tag: 'Emerging'   },
  { id: 'design',      label: 'Design',      x: 13, y: 32, description: 'Understanding people',     tag: 'Lens'       },
  { id: 'engineering', label: 'Engineering', x: 87, y: 32, description: 'Frontend & full-stack',    tag: 'Foundation' },
  { id: 'enablement',  label: 'Enablement',  x: 13, y: 68, description: 'How orgs learn & adopt',  tag: 'Horizon'    },
  { id: 'product',     label: 'Product',     x: 87, y: 68, description: 'What to build & why',     tag: 'Lens'       },
  { id: 'business',    label: 'Business',    x: 50, y: 88, description: 'Zooming out for value',   tag: 'Lens'       },
];

const CENTER = { x: 50, y: 50 };

interface EdgeDef {
  x1: number; y1: number;
  x2: number; y2: number;
  nodes: NodeId[];
}

const EDGES: EdgeDef[] = [
  { x1: 50, y1: 50, x2: 50, y2:  7, nodes: ['center', 'ai']           },
  { x1: 50, y1: 50, x2: 13, y2: 32, nodes: ['center', 'design']       },
  { x1: 50, y1: 50, x2: 87, y2: 32, nodes: ['center', 'engineering']  },
  { x1: 50, y1: 50, x2: 13, y2: 68, nodes: ['center', 'enablement']   },
  { x1: 50, y1: 50, x2: 87, y2: 68, nodes: ['center', 'product']      },
  { x1: 50, y1: 50, x2: 50, y2: 88, nodes: ['center', 'business']     },
  { x1: 87, y1: 32, x2: 87, y2: 68, nodes: ['engineering', 'product']    },
  { x1: 13, y1: 32, x2: 13, y2: 68, nodes: ['design',      'enablement'] },
  { x1: 50, y1:  7, x2: 87, y2: 32, nodes: ['ai',          'engineering'] },
  { x1: 87, y1: 68, x2: 50, y2: 88, nodes: ['product',     'business']   },
  { x1: 13, y1: 68, x2: 50, y2: 88, nodes: ['enablement',  'business']   },
  { x1: 13, y1: 32, x2: 50, y2:  7, nodes: ['design',      'ai']         },
];

export const Hero = () => {
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null);

  const isEdgeLit = (edge: EdgeDef) =>
    hoveredNode !== null && edge.nodes.includes(hoveredNode);

  const hoveredDef = hoveredNode && hoveredNode !== 'center'
    ? NODES.find(n => n.id === hoveredNode)
    : null;

  const tooltipStyle = (node: NodeDef): React.CSSProperties => {
    const common: React.CSSProperties = {
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 30,
      whiteSpace: 'nowrap',
    };
    const positions: Record<NodeDef['id'], React.CSSProperties> = {
      ai: { left: '50%', top: '18%', transform: 'translateX(-50%)' },
      design: { left: '22%', top: '22%' },
      engineering: { right: '22%', top: '22%' },
      enablement: { left: '22%', bottom: '20%' },
      product: { right: '22%', bottom: '20%' },
      business: { left: '50%', bottom: '20%', transform: 'translateX(-50%)' },
    };
    return { ...common, ...positions[node.id] };
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-stone-50 dark:bg-neutral-950 overflow-hidden transition-colors duration-300">
      {/* Ambient atmosphere — blue tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-blue-200/45 dark:bg-blue-950/35 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-sky-200/35 dark:bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1725540a_1px,transparent_1px),linear-gradient(to_bottom,#1725540a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-12 sm:pb-16 gap-8 sm:gap-12 lg:gap-0">

        {/* Left — copy */}
        <div className="flex-1 flex flex-col justify-center lg:pr-20 max-w-xl lg:max-w-none">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-['DM_Mono'] uppercase tracking-[0.3em] text-blue-700 dark:text-blue-400 mb-8"
          >
            Technical Product Builder · Applied AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-['Plus_Jakarta_Sans'] font-medium tracking-tighter leading-[0.88] mb-8 text-neutral-950 dark:text-white"
          >
            Hi, I'm
            <br />
            <span className="italic font-['Libre_Baskerville'] font-normal text-neutral-600 dark:text-neutral-400">Amanda.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-neutral-700 dark:text-neutral-300 font-light leading-relaxed mb-10 max-w-[480px]"
          >
            I build{' '}
            <span className="text-neutral-950 dark:text-white font-normal">AI-driven experiences</span>{' '}
            that make complex systems feel simple, working at the intersection of engineering, design, and product to bridge the people who build them and the people who use them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex items-center gap-6 flex-wrap"
          >
            <a
              href="#work"
              className="flex items-center gap-3 text-xs font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-950 dark:text-white group"
            >
              <span>See my work</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="text-neutral-700 dark:text-neutral-300 inline-block"
              >↓</motion.span>
            </a>
            <span className="w-px h-4 bg-black/15 dark:bg-white/10" />
            <a
              href="#timeline"
              className="text-xs font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
            >
              Read my story →
            </a>
          </motion.div>
        </div>

        {/* Right — graph (pure SVG, single coordinate system) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="flex-1 w-full max-w-[360px] md:max-w-[440px] lg:max-w-[520px] xl:max-w-[560px] relative"
          style={{ aspectRatio: '1 / 1' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Edges */}
            {EDGES.map((edge, i) => {
              const lit = isEdgeLit(edge);
              return (
                <motion.line
                  key={i}
                  x1={edge.x1} y1={edge.y1}
                  x2={edge.x2} y2={edge.y2}
                  stroke={lit ? '#2563eb' : 'var(--graph-edge)'}
                  strokeWidth={lit ? 0.45 : 0.2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.07, duration: 0.5 }}
                  style={{ filter: lit ? 'url(#glow)' : undefined }}
                />
              );
            })}

            {/* Peripheral nodes */}
            {NODES.map((node, i) => {
              const isHovered = hoveredNode === node.id;
              const labelBelow = node.y < 50;
              return (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.09, duration: 0.5 }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onFocus={() => setHoveredNode(node.id)}
                  onBlur={() => setHoveredNode(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${node.label}: ${node.description}`}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx={node.x} cy={node.y} r={7} fill="transparent" />

                  {isHovered && (
                    <motion.circle
                      cx={node.x} cy={node.y}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.25"
                      initial={{ r: 2, opacity: 0.7 }}
                      animate={{ r: 7, opacity: 0 }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                    />
                  )}

                  <circle
                    cx={node.x} cy={node.y}
                    r={isHovered ? 2.2 : 1.6}
                    fill={isHovered ? '#60a5fa' : 'var(--graph-node-fill)'}
                    stroke={isHovered ? '#2563eb' : 'var(--graph-node-stroke)'}
                    strokeWidth={isHovered ? 0.4 : 0.35}
                    style={{
                      filter: isHovered ? 'url(#glow)' : undefined,
                      transition: 'r 0.2s, fill 0.2s, stroke 0.2s',
                    }}
                  />

                  <text
                    x={node.x}
                    y={labelBelow ? node.y + 5.5 : node.y - 4}
                    textAnchor="middle"
                    fontSize="2.8"
                    fontFamily="DM Mono, monospace"
                    fill={isHovered ? 'var(--graph-active-label)' : 'var(--graph-label)'}
                    letterSpacing="0.4"
                    style={{ transition: 'fill 0.2s' }}
                  >
                    {node.label.toUpperCase()}
                  </text>
                </motion.g>
              );
            })}

            {/* Center — Amanda */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              onMouseEnter={() => setHoveredNode('center')}
              onMouseLeave={() => setHoveredNode(null)}
              tabIndex={0}
              role="img"
              aria-label="Amanda at the intersection of AI, design, engineering, enablement, product, and business"
              style={{ cursor: 'pointer' }}
            >
              <motion.circle
                cx={CENTER.x} cy={CENTER.y}
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="0.25"
                animate={{ r: [9, 14, 9], opacity: [0.35, 0, 0.35] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
              <motion.circle
                cx={CENTER.x} cy={CENTER.y}
                fill="none"
                stroke="#2563eb"
                strokeWidth="0.25"
                animate={{ r: [5.5, 8, 5.5], opacity: [0.45, 0.1, 0.45] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.7 }}
              />
              <circle cx={CENTER.x} cy={CENTER.y} r={10} fill="transparent" />
              <circle
                cx={CENTER.x} cy={CENTER.y} r={3}
                fill={hoveredNode === 'center' ? '#60a5fa' : 'rgba(37,99,235,0.45)'}
                stroke={hoveredNode === 'center' ? '#93c5fd' : 'rgba(59,130,246,0.55)'}
                strokeWidth="0.4"
                style={{ filter: 'url(#glow)', transition: 'fill 0.3s, stroke 0.3s' }}
              />
              <circle cx={CENTER.x} cy={CENTER.y} r={0.9} fill="rgba(255,255,255,0.85)" />
              <text
                x={CENTER.x}
                y={CENTER.y + 11}
                textAnchor="middle"
                fontSize="2.8"
                fontFamily="DM Mono, monospace"
                fill="var(--graph-active-label)"
                letterSpacing="0.5"
              >
                AMANDA
              </text>
            </motion.g>

            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1.2 }}
              aria-hidden="true"
            >
              <rect
                x="35"
                y="95"
                width="30"
                height="4"
                rx="2"
                fill="var(--graph-instruction-fill)"
                stroke="var(--graph-instruction-stroke)"
                strokeWidth="0.2"
              />
              <text
                x="50"
                y="97.8"
                textAnchor="middle"
                fontSize="2.15"
                fontFamily="DM Mono, monospace"
                fontStyle="italic"
                fill="var(--graph-label)"
                letterSpacing="0.35"
              >
                HOVER OVER A NODE
              </text>
            </motion.g>
          </svg>

          {/* HTML tooltip */}
          <AnimatePresence>
            {hoveredDef && (
              <motion.div
                key={hoveredDef.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={tooltipStyle(hoveredDef)}
                className="bg-white/95 dark:bg-neutral-900/95 border border-blue-600/30 dark:border-blue-500/25 rounded-lg px-3 py-2 shadow-xl shadow-blue-950/15 dark:shadow-black/50"
              >
                <p className="text-[10px] font-['DM_Mono'] uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-0.5">{hoveredDef.tag}</p>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 font-light">{hoveredDef.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-3 pb-10"
      >
        <div className="w-px h-14 overflow-hidden bg-gradient-to-b from-transparent via-black/15 dark:via-white/10 to-transparent">
          <motion.div
            animate={{ y: [-56, 56] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-blue-700/50 dark:via-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};
