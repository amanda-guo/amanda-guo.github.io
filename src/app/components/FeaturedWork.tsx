import React from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowUpRight } from 'lucide-react';

// Blue-tinted schema/config preview
const SchemaPreview = () => (
  <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-schema" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0d1d3d" />
        <stop offset="100%" stopColor="#08080f" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#g-schema)" />
    {[0,44,88,132,176,220].map(y => (
      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" />
    ))}
    {/* Browser chrome */}
    <rect x="20" y="18" width="360" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
    <circle cx="30" cy="20" r="2" fill="rgba(255,80,80,0.25)" />
    <circle cx="38" cy="20" r="2" fill="rgba(255,200,50,0.2)" />
    <circle cx="46" cy="20" r="2" fill="rgba(50,200,80,0.15)" />
    {/* Schema tree spine */}
    <line x1="68" y1="50" x2="68" y2="185" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
    {[50, 95, 140, 185].map((y, i) => (
      <React.Fragment key={y}>
        <circle cx="68" cy={y} r={i === 0 ? 3.5 : 2.5} fill={i === 0 ? '#3b82f6' : `rgba(59,130,246,${0.6 - i * 0.1})`} />
        <line x1="68" y1={y} x2="95" y2={y} stroke="rgba(59,130,246,0.2)" strokeWidth="0.75" />
        <rect
          x="95" y={y - 11} rx="3"
          width={[195, 155, 170, 130][i]} height="20"
          fill={i === 0 ? 'rgba(59,130,246,0.14)' : 'rgba(59,130,246,0.05)'}
          stroke={i === 0 ? 'rgba(59,130,246,0.5)' : 'rgba(59,130,246,0.12)'}
          strokeWidth="0.75"
        />
        {i === 0 && (
          <>
            <rect x="104" y={y - 5} width="60" height="4" rx="1.5" fill="rgba(96,165,250,0.5)" />
            <circle cx="280" cy={y} r="7" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.5)" strokeWidth="0.75" />
            <path d={`M276 ${y} L279 ${y+3} L284 ${y-3}`} stroke="rgba(147,197,253,0.9)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </>
        )}
        {i > 0 && <rect x="104" y={y - 4} width={[80,65,50][i-1]} height="3" rx="1" fill="rgba(59,130,246,0.25)" />}
      </React.Fragment>
    ))}
    <rect x="315" y="48" width="68" height="40" rx="5" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.35)" strokeWidth="0.75" />
    <rect x="323" y="57" width="22" height="3" rx="1" fill="rgba(59,130,246,0.35)" />
    <rect x="323" y="65" width="44" height="7" rx="2" fill="rgba(59,130,246,0.65)" />
    <rect x="323" y="77" width="33" height="3" rx="1" fill="rgba(59,130,246,0.25)" />
  </svg>
);

// Sky-tinted learning platform preview
const AIPreview = () => (
  <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-ai" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#071e30" />
        <stop offset="100%" stopColor="#080c14" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#g-ai)" />
    {[[0,0,0.85],[1,0,0.7],[2,0,1.0],[3,0,0.45],[4,0,0.6],[0,1,0.55],[1,1,0.4],[2,1,0.3],[3,1,0.2],[0,2,0.15],[1,2,0.1]].map(([col, row, prog], i) => (
      <React.Fragment key={i}>
        <rect x={30 + Number(col) * 70} y={35 + Number(row) * 58} width={60} height={48} rx="5"
          fill={`rgba(14,165,233,${0.04 + Number(prog) * 0.1})`}
          stroke={`rgba(14,165,233,${0.08 + Number(prog) * 0.28})`}
          strokeWidth="0.75"
        />
        <rect x={35 + Number(col) * 70} y={72 + Number(row) * 58} width={50} height="3" rx="1.5" fill="rgba(14,165,233,0.1)" />
        <rect x={35 + Number(col) * 70} y={72 + Number(row) * 58} width={50 * Number(prog)} height="3" rx="1.5"
          fill={`rgba(14,165,233,${0.35 + Number(prog) * 0.5})`}
        />
        {Number(prog) === 1.0 && (
          <path d={`M${48 + Number(col) * 70} ${56 + Number(row) * 58} L${54 + Number(col) * 70} ${62 + Number(row) * 58} L${64 + Number(col) * 70} ${50 + Number(row) * 58}`}
            stroke="rgba(14,165,233,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        )}
      </React.Fragment>
    ))}
    <rect x="330" y="150" width="54" height="52" rx="5" fill="rgba(14,165,233,0.1)" stroke="rgba(14,165,233,0.35)" strokeWidth="0.75" />
    <rect x="338" y="160" width="18" height="3" rx="1" fill="rgba(14,165,233,0.4)" />
    <rect x="338" y="168" width="38" height="8" rx="2" fill="rgba(14,165,233,0.65)" />
    <rect x="338" y="181" width="28" height="3" rx="1" fill="rgba(14,165,233,0.3)" />
    <rect x="338" y="189" width="20" height="3" rx="1" fill="rgba(14,165,233,0.2)" />
  </svg>
);

const TradingPreview = () => (
  <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-trading" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#091a10" />
        <stop offset="100%" stopColor="#080808" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#g-trading)" />
    {[40,80,120,160,200].map(y => (
      <line key={y} x1="40" y1={y} x2="385" y2={y} stroke="rgba(52,211,153,0.05)" strokeWidth="0.5" />
    ))}
    {[
      [60, 130, 160, 155, true],[85, 115, 145, 118, false],[110, 110, 140, 136, true],
      [135, 100, 132, 104, false],[160, 90, 125, 93, true],[185, 80, 118, 83, false],
      [210, 72, 108, 75, true],[235, 65, 100, 68, true],[260, 58, 95, 60, false],
      [285, 52, 90, 55, true],[310, 46, 85, 48, true],[335, 40, 80, 42, true],
    ].map(([x, high, low, close, green], i) => {
      const openY = Number(green) ? Number(close) + 10 : Number(close) - 10;
      const color = green ? 'rgba(52,211,153,0.75)' : 'rgba(239,68,68,0.55)';
      return (
        <React.Fragment key={i}>
          <line x1={x} y1={high} x2={x} y2={low} stroke={color} strokeWidth="0.8" />
          <rect x={Number(x) - 5} y={Math.min(openY, Number(close))} width="10" height={Math.max(Math.abs(openY - Number(close)), 2)} rx="1" fill={color} />
        </React.Fragment>
      );
    })}
    <polyline
      points="60,150 85,130 110,138 135,115 160,103 185,90 210,80 235,70 260,62 285,55 310,48 335,42"
      fill="none" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" strokeDasharray="5 3"
    />
    <rect x="318" y="15" width="52" height="19" rx="9.5" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.45)" strokeWidth="0.75" />
    <circle cx="330" cy="24.5" r="2.5" fill="rgba(52,211,153,0.9)" />
    <rect x="336" y="21.5" width="25" height="4" rx="2" fill="rgba(52,211,153,0.55)" />
  </svg>
);

const MigrationPreview = () => (
  <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-migration" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#191000" />
        <stop offset="100%" stopColor="#080808" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#g-migration)" />
    <rect x="35" y="30" width="105" height="160" rx="10" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.18)" strokeWidth="0.75" />
    <rect x="43" y="44" width="89" height="132" rx="3" fill="rgba(245,158,11,0.03)" />
    <rect x="55" y="22" width="30" height="4" rx="2" fill="rgba(245,158,11,0.2)" />
    {[0,1,2,3,4,5].map(i => (
      <rect key={i} x="50" y={54 + i * 19} width={[70,88,50,78,60,82][i]} height="14" rx="1"
        fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.12)" strokeWidth="0.5" />
    ))}
    <rect x="55" y="168" width="38" height="5" rx="1" fill="rgba(245,158,11,0.2)" />
    <line x1="155" y1="110" x2="240" y2="110" stroke="rgba(245,158,11,0.35)" strokeWidth="1.5" />
    <path d="M235 104 L244 110 L235 116" fill="none" stroke="rgba(245,158,11,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M160 104 L151 110 L160 116" fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="255" y="18" width="110" height="184" rx="14" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.45)" strokeWidth="1" />
    <rect x="263" y="35" width="94" height="154" rx="7" fill="rgba(245,158,11,0.04)" />
    <rect x="290" y="22" width="36" height="5" rx="2.5" fill="rgba(245,158,11,0.3)" />
    <rect x="270" y="44" width="80" height="28" rx="5" fill="rgba(245,158,11,0.18)" />
    <rect x="278" y="51" width="50" height="5" rx="2" fill="rgba(245,158,11,0.6)" />
    <rect x="278" y="60" width="36" height="4" rx="1.5" fill="rgba(245,158,11,0.35)" />
    {[0,1,2,3].map(i => (
      <React.Fragment key={i}>
        <rect x="270" y={82 + i * 32} width="80" height="24" rx="4" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.18)" strokeWidth="0.5" />
        <circle cx="280" cy={94 + i * 32} r="3" fill="rgba(245,158,11,0.45)" />
        <rect x="288" y={90 + i * 32} width="45" height="3.5" rx="1" fill="rgba(245,158,11,0.3)" />
        <rect x="288" y={96 + i * 32} width="33" height="2.5" rx="1" fill="rgba(245,158,11,0.2)" />
      </React.Fragment>
    ))}
    <rect x="285" y="174" width="50" height="14" rx="4" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.5)" strokeWidth="0.75" />
    <rect x="293" y="178" width="34" height="5" rx="1.5" fill="rgba(245,158,11,0.5)" />
  </svg>
);

interface ProjectDef {
  number: string;
  category: string;
  title: string;
  company: string;
  problem: string;
  solution: string;
  impact: string;
  impactLabel: string;
  impactSub: string;
  stack: string[];
  Preview: React.FC;
  accent: string;
  accentBg: string;
  accentBorder: string;
}

const PROJECTS: ProjectDef[] = [
  {
    number: '01',
    category: 'AI · Design Engineering',
    title: 'Schema-Driven Configuration UI',
    company: 'Arctic Wolf',
    problem: '200 security engineers losing half a day to CLI-based JSON editing and PR wait times.',
    solution: 'A React app generated from a JSON schema that short-circuited the entire pipeline — no SSH, no code review, instant feedback.',
    impact: '−95%',
    impactLabel: 'config time',
    impactSub: '2× team velocity',
    stack: ['React', 'TypeScript', 'JSON Schema', 'REST API'],
    Preview: SchemaPreview,
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/20',
  },
  {
    number: '02',
    category: 'Learning Design · DevRel',
    title: 'Enterprise AI Enablement Platform',
    company: 'Manulife University',
    problem: '4,000 technologists needing to upskill in AI tools and automation across a large enterprise.',
    solution: 'Hands-on labs, interactive modules, and executive-level roadmap sessions — bridging strategy and technical practice.',
    impact: '4,000',
    impactLabel: 'learners upskilled',
    impactSub: 'Org-wide AI transformation',
    stack: ['AI APIs', 'Learning Design', 'React', 'Technical Facilitation'],
    Preview: AIPreview,
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/20',
  },
  {
    number: '03',
    category: 'Fintech · Frontend Engineering',
    title: 'Real-Time Options Trading UX',
    company: 'Wealthsimple',
    problem: 'Options traders needed live streaming quotes with sub-second latency on both web and mobile.',
    solution: 'Shipped real-time streaming quote infrastructure with a product-forward UX — feature-parity across both platforms.',
    impact: 'Live',
    impactLabel: 'streaming quotes',
    impactSub: 'Web + Mobile',
    stack: ['React', 'WebSockets', 'TypeScript', 'Mobile'],
    Preview: TradingPreview,
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/20',
  },
  {
    number: '04',
    category: 'Consulting · Cross-Platform',
    title: 'Legacy-to-Flutter Migration',
    company: 'Deloitte Digital',
    problem: 'An aging legacy application with poor UX that needed full modernization within a 6-month window.',
    solution: 'Coordinated engineering, product, and design through a full Flutter migration — delivered on-time with 5× engagement uplift.',
    impact: '5×',
    impactLabel: 'user engagement',
    impactSub: '6-month delivery',
    stack: ['Flutter', 'Cross-Platform', 'Product Strategy', 'UX'],
    Preview: MigrationPreview,
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/20',
  },
];

const ProjectCard = ({ project, index }: { project: ProjectDef; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative flex flex-col bg-white/[0.02] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/[0.14] transition-colors duration-500"
  >
    {/* Preview area */}
    <div className="relative h-52 overflow-hidden border-b border-white/[0.06]">
      <project.Preview />
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/[0.09] rounded-full px-2.5 py-1">
        <Clock size={10} className="text-neutral-500" />
        <span className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.15em] text-neutral-500">Coming soon</span>
      </div>
      <div className="absolute bottom-3 left-4">
        <span className="text-[10px] font-['DM_Mono'] tracking-widest text-white/20">{project.number}</span>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-[11px] font-['DM_Mono'] uppercase tracking-[0.18em] ${project.accent}`}>{project.category}</span>
        <span className="text-white/20">·</span>
        <span className="text-[11px] font-['DM_Mono'] uppercase tracking-[0.15em] text-neutral-500">{project.company}</span>
      </div>

      <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-medium text-white leading-tight mb-4">
        {project.title}
      </h3>

      <div className="space-y-2.5 mb-6 flex-1">
        <p className="text-sm leading-relaxed text-neutral-400">
          <span className="text-neutral-300 font-medium">Problem — </span>{project.problem}
        </p>
        <p className="text-sm leading-relaxed text-neutral-400">
          <span className="text-neutral-400 font-medium">Solution — </span>{project.solution}
        </p>
      </div>

      {/* Impact metric */}
      <div className={`inline-flex items-center gap-3 mb-5 px-4 py-3 rounded-lg ${project.accentBg} border ${project.accentBorder} self-start`}>
        <span className={`text-3xl font-['Plus_Jakarta_Sans'] font-semibold tracking-tighter leading-none ${project.accent}`}>
          {project.impact}
        </span>
        <div>
          <p className={`text-xs font-medium leading-none mb-1 ${project.accent} opacity-80`}>{project.impactLabel}</p>
          <p className="text-[11px] text-neutral-500 leading-none">{project.impactSub}</p>
        </div>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map(tag => (
          <span key={tag} className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-neutral-500 border border-white/[0.08] rounded px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>

      <button
        disabled
        className="flex items-center gap-1.5 text-[11px] font-['DM_Mono'] uppercase tracking-widest text-neutral-600 cursor-not-allowed select-none w-fit"
      >
        <span>Case study unavailable</span>
        <ArrowUpRight size={11} />
      </button>
    </div>
  </motion.article>
);

export const FeaturedWork = () => (
  <section id="work" className="relative py-28 lg:py-36 border-t border-white/[0.05]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-['DM_Mono'] uppercase tracking-[0.3em] text-blue-400 mb-5"
        >
          01 · Featured Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-medium tracking-tighter text-white leading-[0.95] mb-5"
        >
          What I've built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-base text-neutral-400 leading-relaxed max-w-md"
        >
          AI-driven interfaces and cross-disciplinary product work — each project sits at the boundary between engineering, design, and strategy.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 text-xs font-['DM_Mono'] uppercase tracking-[0.2em] text-neutral-600 text-center"
      >
        Case studies in progress — check back soon
      </motion.p>
    </div>
  </section>
);
