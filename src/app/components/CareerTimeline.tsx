import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ActDef {
  id: string;
  number: string;
  period: string;
  shortTitle: string;
  actLabel: string;
  subheading: string;
  role: string;
  companies: string[];
  metric: string;
  metricLabel: string;
  metricSub: string;
  narrative: string;
  insight: string;
  tags: string[];
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const ACTS: ActDef[] = [
  {
    id: 'act1',
    number: 'I',
    period: '2021',
    shortTitle: 'Arctic Wolf',
    actLabel: 'Act I · In Medias Res',
    subheading: 'The Crucible at Arctic Wolf',
    role: 'Design Engineer',
    companies: ['Arctic Wolf'],
    metric: '−95%',
    metricLabel: 'configuration time reduced',
    metricSub: '2× team velocity',
    narrative:
      "Dropped into a bottleneck where 200 security engineers were hand-editing raw JSON files, waiting up to half a day for configurations to propagate through code review. Solving this wasn't purely an engineering task, nor was it just a design problem — it required speaking both languages fluently. By bridging frontend development with deep empathy for CLI-driven workflows, I led the creation of a React web app generated directly from a JSON schema, short-circuiting the entire pipeline and slashing config publishing time by 95%.",
    insight:
      "The most friction-heavy challenges in technology don't live inside isolated engineering or design silos — they exist at the boundaries between them.",
    tags: ['React', 'TypeScript', 'JSON Schema', 'Design Engineering', 'UX Research'],
    accentColor: '#3b82f6',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/20',
    accentText: 'text-blue-400',
  },
  {
    id: 'act2',
    number: 'II',
    period: '2019 – 2021',
    shortTitle: 'Departure',
    actLabel: 'Act II · Gathering Perspectives',
    subheading: 'User Advocacy & Discovery',
    role: 'Software Engineer → Product Designer → UX Designer',
    companies: ['CIBC', 'Tecsys', 'WSIB Lab'],
    metric: '2M+',
    metricLabel: 'banking clients impacted',
    metricSub: 'From pipelines to pandemic-era safety apps',
    narrative:
      "My path wasn't a straight line — it was a deliberate journey across organizational worlds. I began in software engineering at CIBC, optimizing open-banking data pipelines for 2 million clients on a Windows XP-era legacy app, only to realize the team was \"all tech and no people.\" Driven by that gap, I stepped into product design. At Tecsys, I analyzed user interview footage to optimize order management flows. At the WSIB Innovation Lab, under pandemic conditions, I led end-to-end design for a COVID-19 safety self-assessment app built specifically for socially distanced usability.",
    insight:
      "Switching disciplines wasn't a detour — it was the only way to understand the full picture of what it means to build something for a person.",
    tags: ['UX Research', 'User Interviews', 'Legacy Systems', 'Accessibility', 'Healthcare'],
    accentColor: '#0ea5e9',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/20',
    accentText: 'text-sky-400',
  },
  {
    id: 'act3',
    number: 'III',
    period: '2022 – 2023',
    shortTitle: 'Deloitte & WS',
    actLabel: 'Act III · Executive & High-Velocity',
    subheading: 'Strategic Execution at Scale',
    role: 'Technology Consultant → Software Engineer',
    companies: ['Deloitte Digital', 'Wealthsimple'],
    metric: '5×',
    metricLabel: 'user engagement boost',
    metricSub: 'Legacy-to-Flutter in 6 months',
    narrative:
      "As a consultant at Deloitte Digital, I viewed product development through an executive lens for the first time — orchestrating a tight 6-month legacy-to-Flutter migration across engineering, product, and design that drove a 5× boost in user engagement. At Wealthsimple, I returned to engineering with a product designer's mindset, shipping real-time streaming stock option quotes in one of Canada's fastest-moving fintech environments.",
    insight:
      "Seeing the same problem from both the C-suite and the codebase changes how you build. Zoom out and the answer is usually simpler.",
    tags: ['Flutter', 'Cross-Platform', 'Product Strategy', 'React', 'WebSockets', 'Fintech'],
    accentColor: '#34d399',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/20',
    accentText: 'text-emerald-400',
  },
  {
    id: 'act4',
    number: 'IV',
    period: '2023 – 2026',
    shortTitle: 'Manulife',
    actLabel: 'Act IV · Return with the Elixir',
    subheading: 'AI Scaling & Full-Stack Synthesis',
    role: 'Software Engineer → Developer Relations Engineer',
    companies: ['Manulife', 'Manulife University'],
    metric: '−17%',
    metricLabel: 'call center volume',
    metricSub: '4,000 learners upskilled in AI',
    narrative:
      "At Manulife, I architected full-stack \"pizza tracker\" status workflows that reduced call center volume by 17% — by simply translating the question \"where is my thing?\" into a scalable answer. Today, as a Developer Relations Engineer at Manulife University, I bring all disciplines together: upskilling 4,000 learners in AI-driven tools and automation, facilitating executive stakeholder roadmaps, and empowering technical teams to drive user-centric innovation. Every perspective I've collected has become useful at once.",
    insight:
      "The synthesis is the point. Years of switching disciplines wasn't confusion — it was preparation for a role that doesn't have a name yet.",
    tags: ['AI APIs', 'Developer Relations', 'Full-Stack', 'Node.js', 'React', 'Learning Design'],
    accentColor: '#f59e0b',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/20',
    accentText: 'text-amber-400',
  },
];

export const CareerTimeline = () => {
  const [activeAct, setActiveAct] = useState(0);
  const act = ACTS[activeAct];

  return (
    <section id="timeline" className="relative py-28 lg:py-36 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-['DM_Mono'] uppercase tracking-[0.3em] text-blue-400 mb-5"
          >
            02 · The Path Here
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-medium tracking-tighter text-white leading-[0.95] mb-5"
          >
            Cross-disciplinary
            <br />
            <span className="italic font-['Libre_Baskerville'] font-normal text-neutral-500">experience.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-base text-neutral-400 leading-relaxed max-w-md"
          >
            Engineering, design, consulting, AI enablement — not a scattered resume, but a deliberate accumulation of perspectives.
          </motion.p>
        </div>

        {/* Horizontal stepper */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center mb-12"
        >
          {ACTS.map((a, i) => (
            <React.Fragment key={a.id}>
              <button
                onClick={() => setActiveAct(i)}
                className="flex flex-col items-center gap-2.5 group focus:outline-none"
                aria-selected={activeAct === i}
              >
                <motion.div
                  animate={{
                    backgroundColor: activeAct === i ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0)',
                    borderColor: activeAct === i ? a.accentColor : 'rgba(255,255,255,0.15)',
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={activeAct === i ? { boxShadow: `0 0 16px ${a.accentColor}35` } : {}}
                >
                  <span
                    className="text-xs font-['DM_Mono'] transition-colors duration-200"
                    style={{ color: activeAct === i ? a.accentColor : 'rgba(255,255,255,0.3)' }}
                  >
                    {a.number}
                  </span>
                </motion.div>
                <span className={`text-[10px] font-['DM_Mono'] uppercase tracking-[0.18em] hidden sm:block transition-colors duration-200 ${
                  activeAct === i ? 'text-neutral-300' : 'text-neutral-600 group-hover:text-neutral-500'
                }`}>
                  {a.shortTitle}
                </span>
              </button>

              {i < ACTS.length - 1 && (
                <div className="flex-1 h-px mx-3 sm:mx-4 bg-white/[0.08]" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={act.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${act.accentColor}70, transparent)` }} />

            <div className="p-7 md:p-10 grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16">
              {/* Left: metadata + metric */}
              <div>
                <p className={`text-[11px] font-['DM_Mono'] uppercase tracking-[0.2em] mb-4 ${act.accentText}`}>{act.actLabel}</p>
                <h3 className="text-2xl font-['Plus_Jakarta_Sans'] font-medium text-white leading-snug mb-2">
                  {act.subheading}
                </h3>
                <p className="text-xs text-neutral-500 font-['DM_Mono'] leading-relaxed mb-5">{act.role}</p>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {act.companies.map(co => (
                    <span key={co} className="text-[10px] font-['DM_Mono'] text-neutral-400 border border-white/[0.09] rounded px-2 py-0.5">
                      {co}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] font-['DM_Mono'] uppercase tracking-[0.18em] text-neutral-500 mb-10">{act.period}</p>

                {/* Metric */}
                <div className={`rounded-xl p-5 ${act.accentBg} border ${act.accentBorder}`}>
                  <p className={`text-5xl font-['Plus_Jakarta_Sans'] font-semibold tracking-tighter leading-none mb-2 ${act.accentText}`}>
                    {act.metric}
                  </p>
                  <p className="text-sm text-neutral-300 mb-1">{act.metricLabel}</p>
                  <p className="text-xs text-neutral-500">{act.metricSub}</p>
                </div>
              </div>

              {/* Right: narrative + insight + tags */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-base text-neutral-300 leading-[1.8] mb-8 font-light">
                    {act.narrative}
                  </p>

                  <blockquote className="border-l-2 pl-5 mb-8" style={{ borderColor: `${act.accentColor}50` }}>
                    <p className={`text-sm italic font-['Libre_Baskerville'] leading-relaxed ${act.accentText} opacity-85`}>
                      "{act.insight}"
                    </p>
                  </blockquote>

                  <div className="flex flex-wrap gap-1.5">
                    {act.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-neutral-400 border border-white/[0.08] rounded px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-10 pt-8 border-t border-white/[0.06]">
                  <button
                    onClick={() => setActiveAct(i => Math.max(0, i - 1))}
                    disabled={activeAct === 0}
                    className="text-xs font-['DM_Mono'] uppercase tracking-widest text-neutral-500 disabled:opacity-30 hover:text-neutral-300 transition-colors disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                  <span className="text-neutral-700">·</span>
                  <button
                    onClick={() => setActiveAct(i => Math.min(ACTS.length - 1, i + 1))}
                    disabled={activeAct === ACTS.length - 1}
                    className="text-xs font-['DM_Mono'] uppercase tracking-widest text-neutral-500 disabled:opacity-30 hover:text-neutral-300 transition-colors disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                  <span className="ml-auto text-[11px] font-['DM_Mono'] text-neutral-600">
                    {activeAct + 1} / {ACTS.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
