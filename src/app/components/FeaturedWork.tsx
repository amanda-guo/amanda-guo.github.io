import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Figma, Github, Sparkles } from 'lucide-react';

const DesignPreview = () => (
  <div className="relative h-full overflow-hidden bg-gradient-to-br from-blue-950 via-neutral-900 to-neutral-950">
    <div className="absolute left-[9%] top-[13%] h-[74%] w-[82%] rounded-xl border border-blue-300/25 bg-neutral-950/75 p-4 shadow-2xl shadow-blue-950/40 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-blue-300/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-blue-300/25" />
      </div>
      <div className="grid h-[calc(100%-1rem)] grid-cols-[0.65fr_1fr] gap-3 pt-4">
        <div className="rounded-md border border-blue-300/15 bg-blue-400/10 p-3">
          <div className="mb-2 h-2 w-3/4 rounded-full bg-blue-200/60" />
          <div className="mb-1.5 h-1.5 w-full rounded-full bg-white/15" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="rounded-md border border-white/10 bg-white/[0.04]" />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md bg-blue-400/20" />
            <div className="rounded-md border border-white/10 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GithubPreview = () => (
  <div className="relative h-full overflow-hidden bg-gradient-to-br from-sky-950 via-neutral-900 to-neutral-950">
    <div className="absolute inset-x-[9%] top-[14%] rounded-xl border border-sky-300/20 bg-neutral-950/80 p-5 shadow-2xl shadow-sky-950/30 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github className="h-5 w-5 text-white" aria-hidden="true" />
          <span className="h-2 w-20 rounded-full bg-white/35" />
        </div>
        <span className="rounded-full border border-sky-300/25 bg-sky-400/10 px-2 py-1 text-[9px] font-['DM_Mono'] uppercase tracking-wider text-sky-200">
          Public
        </span>
      </div>
      <div className="mb-4 grid grid-cols-7 gap-1.5">
        {Array.from({ length: 35 }, (_, index) => (
          <span
            key={index}
            className={`aspect-square rounded-sm ${
              index % 5 === 0
                ? 'bg-sky-300/80'
                : index % 3 === 0
                  ? 'bg-sky-400/40'
                  : 'bg-white/[0.06]'
            }`}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <span className="h-1.5 w-1/3 rounded-full bg-sky-200/45" />
        <span className="h-1.5 w-1/4 rounded-full bg-white/15" />
      </div>
    </div>
  </div>
);

const ComingSoonPreview = () => (
  <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-neutral-900 to-neutral-950">
    <div className="absolute h-44 w-44 rounded-full border border-blue-300/10" />
    <div className="absolute h-32 w-32 rounded-full border border-blue-300/15" />
    <div className="absolute h-20 w-20 rounded-full border border-blue-300/25 bg-blue-400/[0.06]" />
    <Sparkles className="relative h-8 w-8 text-blue-300" aria-hidden="true" />
  </div>
);

interface WorkCardProps {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  action: string;
  icon: React.ReactNode;
  preview: React.ReactNode;
  index: number;
}

const WorkCard = ({
  eyebrow,
  title,
  description,
  href,
  action,
  icon,
  preview,
  index,
}: WorkCardProps) => {
  const content = (
    <>
      <div className="aspect-[16/10] overflow-hidden border-b border-black/10 dark:border-white/10">{preview}</div>
      <div className="flex min-h-64 flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="flex items-center gap-2 text-[11px] font-['DM_Mono'] uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            {icon}
            {eyebrow}
          </span>
          {href && (
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-blue-50 dark:bg-white/[0.04] text-neutral-800 dark:text-neutral-200 transition-all duration-300 group-hover:border-blue-600 dark:group-hover:border-blue-300/60 group-hover:bg-blue-100 dark:group-hover:bg-blue-400/15 group-hover:text-blue-800 dark:group-hover:text-white">
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.75}
                aria-hidden="true"
              />
            </span>
          )}
        </div>
        <h3 className="mb-3 text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">{title}</h3>
        <p className="mb-7 text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">{description}</p>
        <span className={`mt-auto text-[11px] font-['DM_Mono'] uppercase tracking-[0.18em] ${href ? 'text-neutral-950 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>
          {action}
        </span>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={href ? { y: -8 } : undefined}
      className={`group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.025] ${
        href
          ? 'shadow-lg shadow-blue-950/5 dark:shadow-black/10 transition-[border-color,background-color,box-shadow] duration-300 hover:border-blue-500 dark:hover:border-blue-300/60 hover:bg-blue-50/40 dark:hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-blue-900/15 dark:hover:shadow-blue-950/40'
          : ''
      }`}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-300 focus-visible:ring-inset"
          aria-label={`${title} (opens in a new tab)`}
        >
          {content}
        </a>
      ) : (
        <div className="h-full">{content}</div>
      )}
    </motion.article>
  );
};

export const FeaturedWork = () => (
  <section id="work" className="relative border-t border-black/10 dark:border-white/10 py-24 sm:py-28 lg:py-36">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-xs font-['DM_Mono'] uppercase tracking-[0.3em] text-blue-700 dark:text-blue-300"
        >
          01 · Featured Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 text-4xl font-medium leading-[0.95] tracking-tighter text-neutral-950 dark:text-white sm:text-5xl"
        >
          Explore my work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="max-w-lg text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
        >
          Product thinking expressed through design, code, and practical experiments with AI.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <WorkCard
          eyebrow="Design"
          title="Design portfolio"
          description="Selected product design, UX strategy, and systems-thinking work across complex digital products."
          href="http://amanda-guo.github.io/design-portfolio/"
          action="View design portfolio"
          icon={<Figma className="h-3.5 w-3.5" aria-hidden="true" />}
          preview={<DesignPreview />}
          index={0}
        />
        <WorkCard
          eyebrow="Engineering"
          title="GitHub"
          description="A closer look at the prototypes, front-end systems, and technical experiments behind my product work."
          href="https://github.com/amanda-guo"
          action="Explore repositories"
          icon={<Github className="h-3.5 w-3.5" aria-hidden="true" />}
          preview={<GithubPreview />}
          index={1}
        />
        <WorkCard
          eyebrow="In progress"
          title="AI + product"
          description="Coming soon — more on building useful AI experiences and turning emerging technology into clear product value."
          action="More on AI and product soon"
          icon={<Sparkles className="h-3.5 w-3.5" aria-hidden="true" />}
          preview={<ComingSoonPreview />}
          index={2}
        />
      </div>
    </div>
  </section>
);
