import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
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
  { id: 'ai', label: 'AI', x: 50, y: 7, description: "What comes next", tag: "Emerging" },
  { id: 'design', label: 'Design', x: 13, y: 32, description: 'Understanding people', tag: "Lens" },
  { id: 'engineering', label: 'Engineering', x: 87, y: 32, description: 'How things get built', tag: "Foundation" },
  { id: 'enablement', label: 'Enablement', x: 13, y: 68, description: 'How orgs learn & adopt', tag: "Horizon" },
  { id: 'product', label: 'Product', x: 87, y: 68, description: 'What to build & why', tag: "Lens" },
  { id: 'business', label: 'Business', x: 50, y: 93, description: 'Zooming out for value', tag: "Lens" },
];

const CENTER = { x: 50, y: 50 };

interface EdgeDef {
  x1: number; y1: number;
  x2: number; y2: number;
  nodes: NodeId[];
}

const EDGES: EdgeDef[] = [
  { x1: 50, y1: 50, x2: 50, y2: 7, nodes: ['center', 'ai'] },
  { x1: 50, y1: 50, x2: 13, y2: 32, nodes: ['center', 'design'] },
  { x1: 50, y1: 50, x2: 87, y2: 32, nodes: ['center', 'engineering'] },
  { x1: 50, y1: 50, x2: 13, y2: 68, nodes: ['center', 'enablement'] },
  { x1: 50, y1: 50, x2: 87, y2: 68, nodes: ['center', 'product'] },
  { x1: 50, y1: 50, x2: 50, y2: 93, nodes: ['center', 'business'] },
  { x1: 87, y1: 32, x2: 87, y2: 68, nodes: ['engineering', 'product'] },
  { x1: 13, y1: 32, x2: 13, y2: 68, nodes: ['design', 'enablement'] },
  { x1: 50, y1: 7, x2: 87, y2: 32, nodes: ['ai', 'engineering'] },
  { x1: 87, y1: 68, x2: 50, y2: 93, nodes: ['product', 'business'] },
  { x1: 13, y1: 32, x2: 50, y2: 7, nodes: ['design', 'ai'] },
];

export const Hero = () => {
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const graphRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredNode(null);
  }, []);

  const getParallax = (nx: number, ny: number) => {
    const dx = (nx - 50) / 50;
    const dy = (ny - 50) / 50;
    const depth = Math.sqrt(dx * dx + dy * dy);
    return {
      x: mouseOffset.x * depth * 2,
      y: mouseOffset.y * depth * 1.5,
    };
  };

  const isEdgeLit = (edge: EdgeDef) =>
    hoveredNode !== null && edge.nodes.includes(hoveredNode);

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

        {/* Right — interactive graph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          ref={graphRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex-1 w-full max-w-[360px] md:max-w-[440px] lg:max-w-[520px] xl:max-w-[580px]"
          style={{ aspectRatio: '1 / 1', position: 'relative' }}
        >
          {/* SVG edges — percentage coordinates match the div positions */}
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
          >
            <defs>
              <filter id="nodeglow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {EDGES.map((edge, i) => {
              const lit = isEdgeLit(edge);
              return (
                <motion.line
                  key={i}
                  x1={`${edge.x1}%`} y1={`${edge.y1}%`}
                  x2={`${edge.x2}%`} y2={`${edge.y2}%`}
                  stroke={lit ? '#7c6df9' : 'rgba(255,255,255,0.06)'}
                  strokeWidth={lit ? 1.5 : 0.7}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.07, duration: 0.5 }}
                  style={{ filter: lit ? 'url(#nodeglow)' : undefined }}
                />
              );
            })}
          </svg>

          {/* Peripheral nodes */}
          {NODES.map((node, i) => {
            const offset = getParallax(node.x, node.y);
            const isHovered = hoveredNode === node.id;
            const labelBelow = node.y < 50;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.09, duration: 0.45, type: 'spring', bounce: 0.35 }}
                style={{
                  position: 'absolute',
                  left: `${node.x + offset.x}%`,
                  top: `${node.y + offset.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 0.18s ease-out, top 0.18s ease-out',
                  zIndex: isHovered ? 20 : 10,
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: labelBelow ? -6 : 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute pointer-events-none z-30
                      ${labelBelow ? 'top-full mt-6' : 'bottom-full mb-6'}
                      ${node.x < 25 ? 'left-0' : node.x > 75 ? 'right-0' : 'left-1/2 -translate-x-1/2'}
                    `}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <div className="bg-neutral-900/95 border border-violet-500/20 rounded-lg px-3 py-2 shadow-xl shadow-black/50">
                      <p className="text-[9px] font-['DM_Mono'] uppercase tracking-widest text-violet-400 mb-0.5">{node.tag}</p>
                      <p className="text-[11px] text-neutral-300 font-light">{node.description}</p>
                    </div>
                  </motion.div>
                )}

                {/* Dot + label */}
                <div className="relative flex items-center justify-center cursor-pointer">
                  {isHovered && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0.6 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute w-4 h-4 rounded-full bg-violet-400/40"
                    />
                  )}
                  <div
                    className={`w-[10px] h-[10px] rounded-full border-2 transition-all duration-200 ${
                      isHovered
                        ? 'bg-violet-400 border-violet-300 shadow-[0_0_14px_rgba(124,109,249,0.9)] scale-125'
                        : 'bg-neutral-900 border-neutral-600 hover:border-neutral-400 hover:scale-110'
                    }`}
                  />
                  <span
                    className={`absolute whitespace-nowrap text-[9px] font-['DM_Mono'] uppercase tracking-wider transition-colors duration-200 ${
                      labelBelow ? 'top-full mt-[10px]' : 'bottom-full mb-[10px]'
                    } ${isHovered ? 'text-violet-300' : 'text-neutral-600 hover:text-neutral-400'}`}
                  >
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Center — Amanda */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.7, type: 'spring', bounce: 0.4 }}
            style={{
              position: 'absolute',
              left: `${CENTER.x}%`,
              top: `${CENTER.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 15,
            }}
            onMouseEnter={() => setHoveredNode('center')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="relative flex items-center justify-center cursor-pointer">
              {/* Slow pulse rings */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.0, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute w-20 h-20 rounded-full border border-violet-500/25"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.7 }}
                className="absolute w-12 h-12 rounded-full border border-violet-400/35"
              />
              {/* Core */}
              <div
                className={`w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
                  hoveredNode === 'center'
                    ? 'bg-violet-400 shadow-[0_0_28px_rgba(124,109,249,1)] scale-110'
                    : 'bg-violet-700/50 border border-violet-500/60 shadow-[0_0_16px_rgba(124,109,249,0.45)]'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white/90" />
              </div>
              <span className="absolute top-full mt-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-['DM_Mono'] uppercase tracking-widest text-violet-400">
                Amanda
              </span>
            </div>
          </motion.div>

          {/* Hover hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.2 }}
            className="absolute bottom-0 inset-x-0 text-center text-[9px] font-['DM_Mono'] text-neutral-700 uppercase tracking-[0.25em] pointer-events-none"
          >
            Hover a node
          </motion.p>
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
