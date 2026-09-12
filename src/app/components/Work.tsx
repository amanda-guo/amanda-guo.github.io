import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ALL_TAGS = ['All', 'Engineering', 'Product Design', 'Consulting', 'Tech Enablement'];

export const Work = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p =>
        p.category.toLowerCase().includes(activeTag.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(activeTag.toLowerCase()))
      );

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <Link
              to="/"
              className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-600 hover:text-neutral-400 transition-colors mb-8 block"
            >
              ← Back to Story
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-['Plus_Jakarta_Sans'] font-medium tracking-tighter leading-[0.88]"
            >
              Selected
              <br />
              <span className="italic font-['Libre_Baskerville'] font-normal text-neutral-500">Work</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-neutral-500 font-['Plus_Jakarta_Sans'] font-light text-sm leading-relaxed max-w-xs md:text-right md:pb-2"
          >
            Projects across engineering, design, consulting and technology enablement — told from the perspective of someone who worked across all of them.
          </motion.p>
        </div>

        {/* Filter tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-3"
        >
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-[10px] font-['DM_Mono'] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-white text-black border-white'
                  : 'border-white/10 text-neutral-500 hover:border-white/30 hover:text-neutral-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-14"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        className="group cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-neutral-900 rounded-sm">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full opacity-70 group-hover:scale-[1.04] group-hover:opacity-90 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500" />

          {/* Hover chip */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <span className="text-[9px] font-['DM_Mono'] uppercase tracking-widest text-white">View</span>
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Tags overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="text-[9px] font-['DM_Mono'] uppercase tracking-wider bg-black/50 backdrop-blur-sm text-neutral-400 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Meta */}
        <div className="flex justify-between items-start border-t border-white/8 pt-4">
          <div>
            <p className="text-[10px] font-['DM_Mono'] uppercase tracking-widest text-violet-400 mb-1">{project.company}</p>
            <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-medium tracking-tight text-white leading-tight">{project.title}</h3>
            <p className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-neutral-600 mt-1">{project.category}</p>
          </div>
          <span className="text-[10px] font-['DM_Mono'] text-neutral-700 pt-0.5">{project.year}</span>
        </div>
      </motion.div>

      {/* Project detail drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[101] w-full md:w-[580px] bg-neutral-900 border-l border-white/8 overflow-y-auto"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-7 right-7 p-2 text-neutral-600 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] overflow-hidden bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.25em] text-violet-400 mb-2">{project.company} · {project.year}</p>
                <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-medium tracking-tighter text-white mb-1">{project.title}</h2>
                <p className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-neutral-600 mb-6">{project.role}</p>

                <p className="text-neutral-400 font-['Plus_Jakarta_Sans'] font-light leading-relaxed text-sm mb-8">
                  {project.description}
                </p>

                <div>
                  <p className="text-[10px] font-['DM_Mono'] uppercase tracking-widest text-neutral-600 mb-3">Skills & Disciplines</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-['DM_Mono'] uppercase tracking-wider border border-white/10 text-neutral-400 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
