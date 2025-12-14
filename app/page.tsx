import Link from "next/link";

export default function Home() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  const capabilities = [
    {
      title: "Immersive Interfaces",
      description:
        "Designing adaptive, holographic-inspired UI systems that feel alive across mixed-reality surfaces.",
    },
    {
      title: "Narrative Systems",
      description:
        "Crafting interactive story frameworks that weave AI companions, sound design, and dynamic visuals into cohesive journeys.",
    },
    {
      title: "Futurist Strategy",
      description:
        "Forecasting cultural signals and translating them into product roadmaps that keep teams years ahead.",
    },
    {
      title: "Creative Engineering",
      description:
        "Rapid prototyping with Next.js, WebGL, and shaders to render multi-sensory digital experiences.",
    },
  ];

  const timeline = [
    {
      year: "2024",
      role: "Principal Creative Technologist — Luminous Labs",
      details:
        "Leading a team exploring neural UI paradigms, building adaptive dashboards for orbital research vessels.",
    },
    {
      year: "2022",
      role: "Futurist-in-Residence — Axis Collective",
      details:
        "Architected speculative design systems for climate-responsive cities, merging data visualization with responsive architecture.",
    },
    {
      year: "2020",
      role: "Senior Product Designer — Pulse Interfaces",
      details:
        "Shipped the first gesture-based OS for ambient computing, reaching 12M daily interactions worldwide.",
    },
  ];

  const contactLinks = [
    {
      label: "Email",
      value: "nova@aurora.codes",
      href: "mailto:nova@aurora.codes",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/novacarter",
      href: "https://www.linkedin.com/in/novacarter",
    },
    {
      label: "GitHub",
      value: "github.com/novacarter",
      href: "https://github.com/novacarter",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[-15%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/25 blur-[160px]" />
        <div className="absolute right-[-18%] top-[30%] h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-[180px]" />
        <div className="absolute bottom-[-10%] left-1/2 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <header className="relative z-20 flex w-full items-center justify-between px-6 py-8 md:px-10">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200" />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-200">
            Nova Carter
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.3em] text-slate-300/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col gap-32 px-6 pb-32 pt-12 md:px-10">
        <section id="intro" className="flex flex-col gap-12 md:flex-row md:items-end">
          <div className="grid gap-8 md:flex-1">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Signal Received
            </div>
            <div className="grid gap-6">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Futurist designer &amp; creative technologist crafting luminous digital realities.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200/80 md:text-xl">
                I explore the liminal zone between speculative fiction and tangible product design—building immersive
                interfaces, intelligent narratives, and experiences that feel like they arrived from the next century.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100 transition-colors hover:border-cyan-200 hover:bg-cyan-300/30"
              >
                Initiate Contact
              </Link>
              <Link
                href="#timeline"
                className="flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Mission Log
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex h-56 w-56 shrink-0 items-center justify-center rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 backdrop-blur md:mx-0 md:h-64 md:w-64">
            <div className="absolute inset-6 rounded-[2rem] border border-cyan-200/40" />
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              <div className="absolute inset-0 bg-[conic-gradient(at_top,_#22d3ee33,_#6366f133,_#a855f733,_transparent_70%)] blur-2xl" />
            </div>
            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[1.8rem] bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.4),_rgba(6,6,27,0.9)_70%)] text-center text-lg font-semibold uppercase tracking-[0.3em] text-cyan-100/90">
              NC
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg md:p-12">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
            About
          </div>
          <div className="grid gap-6 text-base leading-7 text-slate-200/85 md:grid-cols-[2fr,1fr] md:gap-10">
            <p>
              Based in Neo-Los Angeles, I lead exploratory design initiatives that merge art direction, interaction
              design, and speculative futures research. I partner with visionary teams to decode weak signals,
              prototype ambitious concepts, and launch experiences that feel cinematic, inclusive, and unmistakably
              modern.
            </p>
            <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/40 p-6">
              <span className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Current Focus</span>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li>• Neural interface storytelling</li>
                <li>• Ambient computing rituals</li>
                <li>• Real-time generative identities</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="capabilities" className="grid gap-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
              Capabilities
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Modular skill constellation
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-200/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 grid gap-4">
                  <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                  <p className="text-sm leading-6 text-slate-200/75">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 backdrop-blur-lg md:p-12">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
            Mission Log
          </div>
          <div className="grid gap-8">
            {timeline.map((entry) => (
              <div key={entry.year} className="grid gap-2 border-l border-white/15 pl-6">
                <span className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">{entry.year}</span>
                <h3 className="text-lg font-semibold text-white">{entry.role}</h3>
                <p className="text-sm leading-6 text-slate-200/80">{entry.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-8 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-lg md:p-12">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
            Contact
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-200/80">
            Let’s align timelines. I’m currently open to collaborations, residencies, and speaking engagements focused
            on immersive technology, speculative design, and cinematic product ecosystems.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-200/50 hover:bg-cyan-200/10"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-slate-400">{link.label}</span>
                <p className="mt-3 text-sm font-semibold text-cyan-100 transition-colors group-hover:text-white">
                  {link.value}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 pb-12 text-center text-xs uppercase tracking-[0.35em] text-slate-500 md:px-10">
        Crafted in the midnight lab — {new Date().getFullYear()}
      </footer>
    </div>
  );
}
