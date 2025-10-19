import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { SiReact, SiSelenium, SiPandas, SiTailwindcss } from "react-icons/si";

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "google-map-scrape-data",
      desc: "Google Maps scraping toolkit (Selenium + pandas). Educational use only.",
      tags: ["Python", "Selenium", "pandas"],
      link: "https://github.com/RifatParadoxical/google-map-scrape-data",
      updated: "Oct 12, 2025",
      image: "map.webp",
    },
    {
      id: 2,
      title: "table-scrape-from-website",
      desc: "Table extraction with requests + lxml -> pandas DataFrame. Clean CSV outputs.",
      tags: ["Python", "requests", "lxml", "pandas"],
      link: "https://github.com/RifatParadoxical/table-scrape-from-website",
      updated: "Oct 5, 2025",
      image: "table.webp",
    },
    {
      id: 3,
      title: "ps5-data_scrape-alibaba",
      desc: "Scraper for product listings on Alibaba using Selenium. Paginated scraping and save to CSV.",
      tags: ["Python", "Selenium", "webscraping"],
      link: "https://github.com/RifatParadoxical/ps5-data_scrape-alibaba",
      updated: "Oct 2, 2025",
      image: "alibaba.webp",
    },
    {
      id: 4,
      title: "real_estate-data-scraping",
      desc: "Real estate listing scraper (BS4 / Selenium) with basic normalization for price/location.",
      tags: ["Python", "BeautifulSoup", "Selenium"],
      link: "https://github.com/RifatParadoxical/real_estate-data-scraping",
      updated: "Oct 1, 2025",
      image: "real_estate.webp",
    }
  ];

  function scrollToProjects() {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white font-sans">
      {/* Hero Section */}
      <motion.header
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="max-w-6xl mx-auto px-6 py-12 sm:py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-8"
>
  {/* Left: Text (on mobile this appears above the image due to flex-col-reverse) */}
  <div className="flex-1 mt-4 lg:mt-0 text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Rifat Paradoxical
    </h1>

    <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
      Web scraping & data automation · Clean deliverables (CSV / JSON / Sheets)
    </p>

    <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3">
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={scrollToProjects}
        className="bg-cyan-500 text-black px-5 py-2.5 rounded-full font-semibold shadow hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label="See Projects"
      >
        See Projects
      </motion.button>

      <motion.a
        whileHover={{ scale: 1.03 }}
        href="mailto:zikkiz275@gmail.com"
        className="border px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition flex items-center gap-2"
        aria-label="Hire Me via Email"
      >
        <Mail size={16} /> Hire Me
      </motion.a>
    </div>

    <div className="mt-4 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 text-xs text-slate-400">
      <div className="flex items-center gap-2">📞 <span className="font-medium">+880-194-455-3174</span></div>
      <div className="flex items-center gap-2">🐙 <a className="underline" href="https://github.com/RifatParadoxical">github.com/RifatParadoxical</a></div>
      <div className="flex items-center gap-2">🔗 <a className="underline" href="https://linkedin.com/in/md-rifat-dev">linkedin.com/in/md-rifat-dev</a></div>
    </div>
  </div>

  {/* Right: Image (on mobile this appears below text) */}
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
    className="flex-1 flex justify-center lg:justify-end"
  >
    <motion.div
      whileHover={{ rotate: 1 }}
      className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-gradient-to-tr from-slate-800 to-slate-900 p-2"
      aria-hidden="false"
    >
      <img
        src="photo.webp"
        alt="Rifat Paradoxical"
        loading="lazy"
        className="w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-72 h-auto object-cover rounded-xl"
      />
    </motion.div>
  </motion.div>
</motion.header>

      {/* Quick Skills */}
      <section className="max-w-6xl mx-auto mt-6 mb-6 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="bg-slate-900 p-6 rounded-3xl border border-slate-800 -mt-10 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.12 }} className="text-4xl bg-gradient-to-br from-cyan-400 to-indigo-400 p-3 rounded-xl">
              <FaPython />
            </motion.div>
            <div>
              <div className="text-sm text-slate-400 hidden md:block">Primary</div>
              <div className="font-medium hidden md:block">Python, Selenium, Scrapy, Playwright</div>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center text-slate-300">
              <SiReact size={28} />
              <div className="text-xs mt-1">React</div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center text-slate-300">
              <SiPandas size={28} />
              <div className="text-xs mt-1">Pandas</div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center text-slate-300">
              <SiSelenium size={28} />
              <div className="text-xs mt-1">Selenium</div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center text-slate-300">
              <SiTailwindcss size={28} />
              <div className="text-xs mt-1">Tailwind</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About & Education */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-3">About Me</h2>
            <p className="text-slate-300">I build reliable scrapers and data pipelines that convert messy web data into clean, actionable datasets. I focus on reliable delivery, clear README, and reproducible code.</p>
            <div className="mt-6">
              <h3 className="font-semibold">Education</h3>
              <ul className="mt-2 text-sm text-slate-400">
                <li><strong>SSC</strong> — Hasnabad Kamuchan Shah High School, GPA: <em>5.00/5.00</em> (2023)</li>
                <li className="mt-1"><strong>HSC</strong> — Dr Mahbubur Rahman Mollah College, GPA: <em>4.50/5.00</em> (2025)</li>
                <li className="mt-2 hidden">Currently pursuing Undergraduate — <em>Computer Science</em> (template)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Certificates & Activities</h3>
            <div className="text-slate-300 text-sm">Debating club (1st place), Campus Ambassador (2 terms), Social Work Volunteer — add your certificate links to each project card for trust.</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">Debating </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">Campus Ambassador</div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">Volunteer</div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">Science Fest Competitor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.article key={p.id} layout whileHover={{ scale: 1.01 }} onClick={() => setActive(p)} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow cursor-pointer">
              <div className="h-44 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="text-xs text-slate-500">{p.updated}</div>
                </div>
                <p className="text-slate-400 text-sm mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs border border-slate-700 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <motion.div initial={{ y: 20, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.95 }} transition={{ duration: 0.25 }} className="bg-slate-900 w-11/12 md:w-3/4 lg:w-2/3 rounded-2xl p-6 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{active.title}</h3>
                    <p className="text-slate-400 text-sm mt-2">{active.desc}</p>
                    <div className="mt-3 text-xs text-slate-500">Updated: {active.updated}</div>
                  </div>

                  <div className="flex gap-3">
                    <a href={active.link} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">View Repo</a>
                    <button onClick={() => setActive(null)} className="px-2 py-2 border rounded">Close</button>
                  </div>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <img src={active.image} alt="preview" className="w-full h-56 object-cover rounded" />
                  <div className="text-sm text-slate-300">
                    <h4 className="font-semibold">Quick notes</h4>
                    <ul className="list-disc ml-5 mt-2 text-slate-400">
                      <li>Fields scraped: All data and keys required.</li>
                      <li>Output: CSV / JSON / Google Sheets</li>
                      <li>Delivery: Clean README + reusable script</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Testimonials & Contact */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Client Feedback</h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow">
              <p className="text-slate-300 italic">“Delivered a scraper that saved our team 10+ hours weekly. Clear code, fast delivery.”</p>
              <div className="mt-4 text-sm text-cyan-400">— E-commerce Analyst, Remote</div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-3"><Mail size={18}/> <a href="mailto:zikkiz275@gmail.com" className="underline">zikkiz275@gmail.com</a></div>
                <div className="flex items-center gap-3">📞 <a href="tel:+8801944553174" className="underline">+880-194-455-3174</a></div>
                <div className="flex items-center gap-3"><Github size={18}/> <a href="https://github.com/RifatParadoxical" className="underline">github.com/RifatParadoxical</a></div>
                <div className="flex items-center gap-3"><Linkedin size={18}/> <a href="https://linkedin.com/in/md-rifat-dev" className="underline">linkedin.com/in/md-rifat-dev</a></div>
                </div>

              <div className="mt-6 text-xs text-slate-500">Pro tip: When requesting a quote, include: target URL, fields needed, preferred format (CSV/JSON), and deadline.</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <div>© {new Date().getFullYear()} RIFAT - ALL RIGHTS RESERVED</div>
      </footer>
    </div>
  );
}

