import React from 'react';
import { motion } from 'motion/react';

interface Chapter {
  number: string;
  heading: string;
  company?: string;
  period: string;
  lens: string;
  lensColor: string;
  paragraphs: string[];
  insight: string;
}

const CHAPTERS: Chapter[] = [
  {
    number: '01',
    heading: "I didn't really know what I wanted to do.",
    period: "2018",
    lens: "Beginning",
    lensColor: "text-neutral-500",
    paragraphs: [
      "Choosing Computer Science was a bit of a random act. My grade 12 self did not know what I wanted to do for a career. So I submitted applications to any program that seemed like a plausible path, and chose Computer Science because I felt like it would open some doors.",
      "It did. I just didn't expect to walk through quite so many of them."
    ],
    insight: "I barely experienced the world. How could I know?"
  },
  {
    number: '02',
    heading: "First, I learned how to build things.",
    company: "CIBC",
    period: "2019",
    lens: "Engineering",
    lensColor: "text-sky-400",
    paragraphs: [
      "My first internship was as a software engineer at CIBC, working on a legacy application that helped financial advisors work with high-net-worth clients on education and retirement planning. And when I say legacy, I mean legacy — this thing looked like it was made in 2002 during the Windows XP era.",
      "I learned a lot about software, databases and the complicated world of financial technology. But I also noticed something."
    ],
    insight: "We were all tech, and no people. I knew what I was building. I didn't really know why — or who was on the other side of the screen."
  },
  {
    number: '03',
    heading: "I started looking for the people.",
    company: "Tecsys · WSIB",
    period: "2020–2021",
    lens: "Product + Design",
    lensColor: "text-rose-400",
    paragraphs: [
      "I moved into product and design roles. At Tecsys, I was the first 'official' product designer on my team — learning how to listen to users, extract pain points from interviews, and translate what I heard into better experiences.",
      "At WSIB, I got to take that process end-to-end: designing a COVID-19 self-assessment app to help workers return to the office safely. Suddenly things like trust, accessibility, information hierarchy and whether someone could comfortably use the app from six feet away became design problems."
    ],
    insight: "I was starting to understand what it meant to design for a person, rather than just build for a system."
  },
  {
    number: '04',
    heading: "Then I realized design had constraints too.",
    company: "Arctic Wolf",
    period: "2021",
    lens: "Design + Engineering",
    lensColor: "text-violet-400",
    paragraphs: [
      "At Arctic Wolf, I worked on simplifying a configuration-editing workflow for security engineers. The existing process: remotely log into an environment, edit JSON, push to GitHub, go through code review, merge, and wait for changes to propagate. It could take half a day.",
      "The obvious answer was: give people a UI. The less obvious answer was: okay, but what kind of UI can we actually build within the technical constraints we already have? This was where my engineering background became an advantage — I could understand the limits while still advocating for the person using the system."
    ],
    insight: "Sometimes V1 just needs to be workable. Design and engineering weren't really separate worlds."
  },
  {
    number: '05',
    heading: "So I zoomed out.",
    company: "Deloitte",
    period: "2022",
    lens: "Consulting",
    lensColor: "text-amber-400",
    paragraphs: [
      "At Deloitte, I worked on a six-month migration of a legacy application to a cross-platform Flutter app, coordinating across product, design and engineering. For the first time, I got to see product development from an executive lens.",
      "I started thinking about questions that had nothing to do with implementation: What value are we creating? What does success look like? Why are we doing this in the first place?"
    ],
    insight: "Business strategy has a huge effect on execution. I realized the role I naturally played: helping different teams understand one another."
  },
  {
    number: '06',
    heading: "I had a bit of an identity crisis.",
    period: "2023",
    lens: "Reckoning",
    lensColor: "text-neutral-500",
    paragraphs: [
      "By this point, I'd dabbled in software engineering, product design, and technology consulting. I had a breadth of experience that I truthfully had no idea what to do with. Do I become an engineer? A product manager? A designer? A consultant?",
      "But when I looked back at everything I'd done, I noticed something: the roles were different. The pattern wasn't. I kept finding myself somewhere between disciplines — between engineering and design, between product and the business, between technical teams and the people they were building for."
    ],
    insight: "Maybe I didn't need to choose one perspective. Maybe the value was in being able to understand several."
  },
  {
    number: '07',
    heading: "So I went back to engineering.",
    company: "Wealthsimple",
    period: "2024",
    lens: "Engineering",
    lensColor: "text-sky-400",
    paragraphs: [
      "I joined Wealthsimple as a software engineer and got to experience a fast-paced fintech startup where code shipped to production every week. I built real-time streaming quotes for options trading across mobile and web.",
      "But I wasn't the same engineer I would have been a few years earlier. I brought my design and product perspective with me. I cared about the implementation, but I also cared about how the implementation felt."
    ],
    insight: "The experience needed to make sense to the person using it, not just the system underneath it."
  },
  {
    number: '08',
    heading: "Then I started crossing the boundary.",
    company: "Manulife",
    period: "2024-2025",
    lens: "Full-Stack Engineering",
    lensColor: "text-green-400",
    paragraphs: [
      "At Manulife, I joined as a software engineer and expanded from frontend into full-stack. One application I worked on became known internally as the 'pizza tracker' — inspired by Domino's, except instead of tracking pepperoni pizza, it helped advisors track the status of client claims. People just wanted to know where their thing was.",
      "I started out building the application. Over time I became involved in business and technical requirement scoping, architecture decisions and design collaboration. I was still an engineer. But my title didn't really describe everything I was doing."
    ],
    insight: "I was naturally working beyond the boundaries of the role."
  },
  {
    number: '09',
    heading: "And then I started working horizontally.",
    company: "Manulife University",
    period: "2025–2026",
    lens: "AI + Technology Enablement",
    lensColor: "text-violet-400",
    paragraphs: [
      "My most recent role brought me into Manulife University, training and upskilling technologists across the organization in new technologies, tools and AI. Some weeks I'm developing learning content. Some weeks I'm coaching instructor-led sessions. Some weeks I'm working with senior leaders. Some weeks I'm troubleshooting a hands-on lab five minutes before someone is supposed to use it.",
      "And somehow, all of the perspectives I'd collected along the way became useful at once."
    ],
    insight: "I can understand the technology. I can think about the person learning it. I can help turn a fairly ambiguous idea into something tangible."
  },
];

const PERSPECTIVES = [
  { label: 'Engineering', color: 'bg-sky-400', desc: 'How things actually get built' },
  { label: 'Design', color: 'bg-rose-400', desc: 'Understanding people' },
  { label: 'Product', color: 'bg-orange-400', desc: 'What to build & why' },
  { label: 'Consulting', color: 'bg-amber-400', desc: 'Zooming out for value' },
  { label: 'AI + Enablement', color: 'bg-violet-400', desc: 'How organizations learn' },
];

export const StorySection = () => {
  return (
    <section id="story" className="bg-neutral-950 relative overflow-hidden">
      {/* Section opener */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-6 mb-4"
        >
          <span className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.3em] text-neutral-600">How I got here</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-['Plus_Jakarta_Sans'] font-medium tracking-tighter leading-[0.9] text-white"
        >
          Looking back, <br />
          <span className="italic font-['Libre_Baskerville'] font-normal text-neutral-500">it wasn't that random.</span>
        </motion.h2>
      </div>

      {/* Chapters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-0">
        {CHAPTERS.map((chapter, i) => (
          <ChapterBlock key={chapter.number} chapter={chapter} index={i} />
        ))}
      </div>

      {/* Synthesis section */}
      <SynthesisSection />
    </section>
  );
};

const ChapterBlock = ({ chapter, index }: { chapter: Chapter; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 py-20 border-b border-white/5 last:border-0"
    >
      {/* Left col — meta */}
      <div className="flex flex-row md:flex-col gap-4 md:gap-0 items-start md:pt-1">
        <span className="font-['DM_Mono'] text-[10px] tracking-widest text-neutral-700 md:mb-6 md:block">{chapter.number}</span>
        <div className="flex flex-col gap-1">
          {chapter.company && (
            <span className="text-xs font-['Plus_Jakarta_Sans'] text-neutral-400 font-medium">{chapter.company}</span>
          )}
          <span className="text-[10px] font-['DM_Mono'] text-neutral-700 uppercase tracking-wider">{chapter.period}</span>
          <span className={`text-[10px] font-['DM_Mono'] uppercase tracking-wider mt-2 ${chapter.lensColor}`}>
            {chapter.lens}
          </span>
        </div>
      </div>

      {/* Right col — content */}
      <div className="max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-['Plus_Jakarta_Sans'] font-medium tracking-tight text-white mb-6 leading-tight">
          {chapter.heading}
        </h3>
        <div className="space-y-4 mb-8">
          {chapter.paragraphs.map((p, pi) => (
            <p key={pi} className="text-neutral-500 font-['Plus_Jakarta_Sans'] font-light leading-relaxed text-[15px]">
              {p}
            </p>
          ))}
        </div>
        {/* Insight pull-quote */}
        <div className="border-l-2 border-violet-500/30 pl-5">
          <p className="text-neutral-300 font-['Libre_Baskerville'] italic text-base leading-relaxed">
            "{chapter.insight}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const SynthesisSection = () => {
  return (
    <div className="border-t border-white/5 max-w-7xl mx-auto px-6 lg:px-12 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-16"
      >
        <p className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.3em] text-violet-400 mb-6">The thread</p>
        <h2 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-medium tracking-tighter text-white leading-[0.95] mb-8">
          I wasn't changing directions.
          <br />
          <span className="italic font-['Libre_Baskerville'] font-normal text-neutral-400">I was collecting perspectives.</span>
        </h2>
        <p className="text-neutral-500 font-['Plus_Jakarta_Sans'] font-light text-base leading-relaxed max-w-xl">
          Working across engineering, design, product, consulting, and technology enablement has taught me how to navigate ambiguity, communicate across disciplines, and build things that work — for the people using them, the teams building them, and the organizations behind them.
        </p>
      </motion.div>

      {/* Perspectives collected */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
      >
        {PERSPECTIVES.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            className="border border-white/6 rounded-lg p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
          >
            <div className={`w-2 h-2 rounded-full ${p.color} mb-4 group-hover:scale-125 transition-transform`} />
            <p className="text-sm font-['Plus_Jakarta_Sans'] font-medium text-neutral-300 mb-1">{p.label}</p>
            <p className="text-[11px] font-['DM_Mono'] text-neutral-600 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* What's next + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-12 border-t border-white/5"
      >
        <div className="max-w-sm">
          <p className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.25em] text-neutral-600 mb-3">What's next</p>
          <p className="text-neutral-400 font-['Plus_Jakarta_Sans'] font-light text-sm leading-relaxed">
            Apparently, <span className="text-white font-normal">AI.</span> I'm interested in what happens when the tools we use to build technology start changing how we think about building it in the first place. Learning, experimenting, building things.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="/work"
            className="inline-flex items-center gap-3 bg-white text-black text-[11px] font-['DM_Mono'] uppercase tracking-[0.2em] px-7 py-4 rounded-full hover:bg-neutral-100 transition-colors"
          >
            See my work
          </a>
          <p className="text-[10px] font-['DM_Mono'] text-neutral-700 text-center">Projects & case studies →</p>
        </div>
      </motion.div>
    </div>
  );
};
