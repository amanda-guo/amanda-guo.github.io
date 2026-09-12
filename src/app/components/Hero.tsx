import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

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
  { id: 'ai',          label: 'AI',          x: 50, y:  7, description: 'What comes next',        tag: 'Emerging'   },
  { id: 'design',      label: 'Design',      x: 13, y: 32, description: 'Understanding people',   tag: 'Lens'       },
  { id: 'engineering', label: 'Engineering', x: 87, y: 32, description: 'How things get built',   tag: 'Foundation' },
  { id: 'enablement',  label: 'Enablement',  x: 13, y: 68, description: 'How orgs learn & adopt', tag: 'Horizon'    },
  { id: 'product',     label: 'Product',     x: 87, y: 68, description: 'What to build & why',    tag: 'Lens'       },
  { id: 'business',    label: 'Business',    x: 50, y: 93, description: 'Zooming out for value',  tag: 'Lens'       },
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
  { x1: 50, y1: 50, x2: 50, y2: 93, nodes: ['center', 'business']     },
  { x1: 87, y1: 32, x2: 87, y2: 68, nodes: ['engineering', 'product']    },
  { x1: 13, y1: 32, x2: 13, y2: 68, nodes: ['design',      'enablement'] },
  { x1: 50, y1:  7, x2: 87, y2: 32, nodes: ['ai',          'engineering'] },
  { x1: 87, y1: 68, x2: 50, y2: 93, nodes: ['product',     'business']   },
  { x1: 13, y1: 32, x2: 50, y2:  7, nodes: ['design',      'ai']         },
];

export const Hero = () => {
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null);

  const isEdgeLit = (edge: EdgeDef) =>
    hoveredNode !== null && edge.nodes.includes(hoveredNode);

  const hoveredDef = hoveredNode && hoveredNode !== 'center'
    ? NODES.find(n => n.id === hoveredNode)
    : null;

  // Tooltip placement rules (SVG labels are above/below each node, so):
  // - Left nodes  → tooltip to the RIGHT  (clear of label which is above/below)
  // - Right nodes → tooltip to the LEFT   (clear of label which is above/below)
  // - AI (top centre, y=7)  → tooltip below the label; label sits at ~13% so anchor top at 15%
  // - Business (bottom centre, y=93) → tooltip above the label; label sits at ~89% so anchor bottom at 15%
  const tooltipStyle = (node: NodeDef): React.CSSProperties => {
    const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 30, whiteSpace: 'nowrap' };
    if (node.x < 25) {
      // Design (32%) and Enablement (68%) — to the right, vertically centred on dot
      return { ...common, left: `${node.x}%`, top: `${node.y}%`, transform: 'translateX(14px) translateY(-50%)' };
    }
    if (node.x > 75) {
      // Engineering (32%) and Product (68%) — to the left, vertically centred on dot
      return { ...common, left: `${node.x}%`, top: `${node.y}%`, transform: 'translateX(calc(-100% - 14px)) translateY(-50%)' };
    }
    if (node.y < 20) {
      // AI — below circle; SVG label baseline is ~13%, start tooltip at 15%
      return { ...common, left: '50%', top: '15%', transform: 'translateX(-50%)' };
    }
    // Business — above circle; SVG label top is ~88%, end tooltip at ~86%
    return { ...common, left: '50%', bottom: '15%', transform: 'translateX(-50%)' };
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-neutral-950 overflow-hidden">
      {/* Ambient atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-violet-950/25 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-indigo-950/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-16 gap-12 lg:gap-0">

        {/* Left — copy */}
        <div className="flex-1 flex flex-col justify-center lg:pr-20 max-w-xl lg:max-w-none">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.3em] text-violet-400 mb-8"
          >
            Portfolio · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl xl:text-[5.5rem] font-['Plus_Jakarta_Sans'] font-medium tracking-tighter leading-[0.88] mb-8 text-white"
          >
            Hi, I'm
            <br />
            <span className="italic font-['Libre_Baskerville'] font-normal text-neutral-400">Amanda.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-neutral-400 font-light leading-relaxed mb-3 max-w-[380px]"
          >
            I work at the intersection of{' '}
            <span className="text-neutral-200 font-normal">product, technology and people.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-sm text-neutral-600 font-light leading-relaxed mb-10 max-w-[340px]"
          >
            Which is a polished way of saying I've spent years figuring out where I fit — and realizing the value was in connecting perspectives that don't speak the same language.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex items-center gap-6 flex-wrap"
          >
            <a
              href="#story"
              className="flex items-center gap-3 text-[10px] font-['DM_Mono'] uppercase tracking-[0.25em] text-white group"
            >
              <span>Come see how I got here</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="text-neutral-500 inline-block"
              >↓</motion.span>
            </a>
            <span className="w-px h-4 bg-white/10" />
            <Link
              to="/work"
              className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-500 hover:text-white transition-colors duration-300"
            >
              View Work →
            </Link>
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
          {/* All graph elements in one SVG — circles and lines share coordinates */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
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
                  stroke={lit ? '#7c6df9' : 'rgba(255,255,255,0.07)'}
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
                  style={{ cursor: 'pointer' }}
                >
                  {/* Transparent hit area */}
                  <circle cx={node.x} cy={node.y} r={7} fill="transparent" />

                  {/* Ripple on hover */}
                  {isHovered && (
                    <motion.circle
                      cx={node.x} cy={node.y}
                      fill="none"
                      stroke="#7c6df9"
                      strokeWidth="0.25"
                      initial={{ r: 2, opacity: 0.7 }}
                      animate={{ r: 7, opacity: 0 }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                    />
                  )}

                  {/* Node dot */}
                  <circle
                    cx={node.x} cy={node.y}
                    r={isHovered ? 2.2 : 1.6}
                    fill={isHovered ? '#a78bfa' : '#171717'}
                    stroke={isHovered ? '#c4b5fd' : '#525252'}
                    strokeWidth={isHovered ? 0.4 : 0.35}
                    style={{
                      filter: isHovered ? 'url(#glow)' : undefined,
                      transition: 'r 0.2s, fill 0.2s, stroke 0.2s',
                    }}
                  />

                  {/* Label */}
                  <text
                    x={node.x}
                    y={labelBelow ? node.y + 5.5 : node.y - 4}
                    textAnchor="middle"
                    fontSize="2.8"
                    fontFamily="DM Mono, monospace"
                    fill={isHovered ? '#c4b5fd' : '#404040'}
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
              style={{ cursor: 'pointer' }}
            >
              {/* Outer pulse ring */}
              <motion.circle
                cx={CENTER.x} cy={CENTER.y}
                fill="none"
                stroke="#6d28d9"
                strokeWidth="0.25"
                animate={{ r: [9, 14, 9], opacity: [0.35, 0, 0.35] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
              {/* Inner ring */}
              <motion.circle
                cx={CENTER.x} cy={CENTER.y}
                fill="none"
                stroke="#7c3aed"
                strokeWidth="0.25"
                animate={{ r: [5.5, 8, 5.5], opacity: [0.45, 0.1, 0.45] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.7 }}
              />
              {/* Transparent hit area */}
              <circle cx={CENTER.x} cy={CENTER.y} r={10} fill="transparent" />
              {/* Core circle */}
              <circle
                cx={CENTER.x} cy={CENTER.y} r={3}
                fill={hoveredNode === 'center' ? '#a78bfa' : 'rgba(109,40,217,0.45)'}
                stroke={hoveredNode === 'center' ? '#c4b5fd' : 'rgba(139,92,246,0.55)'}
                strokeWidth="0.4"
                style={{
                  filter: 'url(#glow)',
                  transition: 'fill 0.3s, stroke 0.3s',
                }}
              />
              {/* Inner white dot */}
              <circle cx={CENTER.x} cy={CENTER.y} r={0.9} fill="rgba(255,255,255,0.85)" />
              {/* Label */}
              <text
                x={CENTER.x}
                y={CENTER.y + 11}
                textAnchor="middle"
                fontSize="2.8"
                fontFamily="DM Mono, monospace"
                fill="#a78bfa"
                letterSpacing="0.5"
              >
                AMANDA
              </text>
            </motion.g>

            {/* Hint text */}
            <motion.text
              x="50" y="99"
              textAnchor="middle"
              fontSize="2.4"
              fontFamily="DM Mono, monospace"
              fill="#262626"
              letterSpacing="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1.2 }}
            >
              HOVER A NODE
            </motion.text>
          </svg>

          {/* HTML tooltip — positioned using same percentage coords as SVG nodes */}
          <AnimatePresence>
            {hoveredDef && (
              <motion.div
                key={hoveredDef.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={tooltipStyle(hoveredDef)}
                className="bg-neutral-900/95 border border-violet-500/20 rounded-lg px-3 py-2 shadow-xl shadow-black/50"
              >
                <p className="text-[9px] font-['DM_Mono'] uppercase tracking-widest text-violet-400 mb-0.5">{hoveredDef.tag}</p>
                <p className="text-[11px] text-neutral-300 font-light">{hoveredDef.description}</p>
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
        <div className="w-px h-14 overflow-hidden bg-gradient-to-b from-transparent via-white/10 to-transparent">
          <motion.div
            animate={{ y: [-56, 56] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};
