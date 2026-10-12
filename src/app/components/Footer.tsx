import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-950 border-t border-white/10 py-20 sm:py-24 px-6">
      <div className="max-w-7xl mx-auto lg:px-6">

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 md:gap-16 mb-16 sm:mb-20">
          {/* Left — CTA */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-300 mb-6"
            >
              Get in touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-['Plus_Jakarta_Sans'] font-medium tracking-tighter leading-[0.9] mb-10"
            >
              Let's
              <br />
              <span className="italic font-['Libre_Baskerville'] font-normal text-neutral-300">connect.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <a
                href="mailto:ayzguo@gmail.com"
                className="group flex items-center gap-4 text-neutral-200 hover:text-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </div>
                <span className="text-sm font-['Plus_Jakarta_Sans'] font-light">ayzguo@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 pl-14">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-['DM_Mono'] uppercase tracking-widest text-neutral-300">Open to conversations</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Nav links */}
          <div className="flex flex-col justify-end gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-300 mb-5">Navigate</p>
                <ul className="space-y-4">
                  {[
                    { label: 'Work', to: '/#work' },
                    { label: 'Story', to: '/#timeline' },
                    { label: 'Contact', to: '/#contact' },
                  ].map(item => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="text-base font-['Plus_Jakarta_Sans'] font-light text-neutral-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                      >
                        {item.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-300 mb-5">Elsewhere</p>
                <ul className="space-y-4">
                  {[
                    { label: 'Design portfolio', href: '#' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amanda-guo' },
                    { label: 'GitHub', href: 'https://github.com/amanda-guo' },
                    { label: 'Resume', href: '#' },
                  ].map(item => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-['Plus_Jakarta_Sans'] font-light text-neutral-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                        aria-label={`${item.label} (opens in a new tab)`}
                      >
                        {item.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-xs font-['DM_Mono'] uppercase tracking-widest text-neutral-300">
            © 2026 Amanda
          </p>
          <p className="text-xs font-['DM_Mono'] uppercase tracking-widest text-neutral-300 text-center md:text-right">
            Product · Engineering · Design · People
          </p>
        </div>
      </div>
    </footer>
  );
};
