import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Scale, FileCheck, ArrowLeft, ChevronRight, Gavel, Award, DollarSign, Clock, AlertTriangle, ShieldAlert } from "lucide-react";
import DotDivider from "@/components/DotDivider";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const termsSections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    icon: <FileCheck className="size-4.5 text-emerald-400" />,
    content: (
      <p className="leading-relaxed">
        By accessing the Pixel Grid Studios website, submitting a creative brief, or commissioning our 3D motion design and film production services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must refrain from using our services.
      </p>
    ),
  },
  {
    id: "services-conduct",
    number: "02",
    title: "Permitted Use & Conduct",
    icon: <Gavel className="size-4.5 text-cyan-400" />,
    content: (
      <div className="space-y-3">
        <p>You agree to engage Pixel Grid Studios exclusively for lawful commercial purposes. You are strictly prohibited from:</p>
        <ul className="space-y-2 pl-2">
          <li className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>Submitting unlawful, defamatory, or infringing materials as project references or briefing assets.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>Attempting to reverse engineer, decompile, or scrape proprietary video reels, 3D simulations, or interactive web shaders.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>Disrupting server infrastructure or interfering with our 60FPS video delivery pipeline.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    number: "03",
    title: "Intellectual Property Rights",
    icon: <Award className="size-4.5 text-amber-400" />,
    content: (
      <div className="space-y-4">
        <p>
          All creative works showcased on this website—including showreels, 3D motion styleframes, procedural shaders, typography, UI mockups, and proprietary pipeline code—remain the exclusive intellectual property of Pixel Grid Studios or respective client brand licensors.
        </p>
        <div className="p-4 rounded-xl bg-brand-bg text-brand-subtle text-sm font-mono space-y-2 border-0">
          <div><strong className="text-brand-foreground">Client Deliverables:</strong> Upon full payment of all contracted milestone fees, final delivered render files (master Prores/MP4/H.264 exports) are transferred to the client with full commercial usage rights as defined in the Statement of Work (SOW).</div>
          <div><strong className="text-brand-foreground">Working Source Files:</strong> Proprietary 3D project files (.c4d, .hip, Redshift shaders, node trees) remain the property of Pixel Grid Studios unless explicitly negotiated and purchased under a source-file buyout agreement.</div>
        </div>
      </div>
    ),
  },
  {
    id: "orders-payment",
    number: "04",
    title: "Orders, Quotes & Payment Terms",
    icon: <DollarSign className="size-4.5 text-emerald-400" />,
    content: (
      <div className="space-y-3">
        <p>All project engagements are governed by formal custom Statements of Work (SOW):</p>
        <ul className="space-y-2 pl-2">
          <li className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <span><strong className="text-brand-foreground font-semibold">Pricing Currency:</strong> Estimates are quoted in US Dollars (USD) or Indian Rupees (INR) depending on client domicile, subject to applicable taxes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <span><strong className="text-brand-foreground font-semibold">Milestone Schedule:</strong> Standard production requires a 50% mobilization deposit prior to project commencement, with remaining balances tied to styleframe signoff and final master asset delivery.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <span><strong className="text-brand-foreground font-semibold">Invoicing &amp; Late Settlements:</strong> Invoices are payable within 14 calendar days. Unsettled balances may pause active render pipelines.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "project-timelines",
    number: "05",
    title: "Production Timelines & Deliverables",
    icon: <Clock className="size-4.5 text-purple-400" />,
    content: (
      <p className="leading-relaxed">
        We pride ourselves on 100% on-time delivery across all 6 phases of our production pipeline (Concept, R&amp;D, Styleframes, 3D Animation, Lighting/Shading, Delivery). Delivery estimates depend on prompt receipt of client feedback, CAD model assets, and formal milestone approvals. Delays resulting from external client blockers automatically extend subsequent timeline milestones.
      </p>
    ),
  },
  {
    id: "client-responsibilities",
    number: "06",
    title: "Client Responsibilities & Assets",
    icon: <FileCheck className="size-4.5 text-blue-400" />,
    content: (
      <div className="space-y-3">
        <p>To ensure flawless production execution, the client warrants that:</p>
        <ul className="space-y-2 pl-2">
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-foreground/40 shrink-0" />
            <span>All brand guidelines, vector logos, and engineering CAD data provided are accurate and complete.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-foreground/40 shrink-0" />
            <span>Materials supplied do not infringe on any third-party intellectual property or copyright.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-foreground/40 shrink-0" />
            <span>Designated creative decision-makers provide consolidated written feedback at each review gate.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "revisions-modifications",
    number: "07",
    title: "Revisions & Scope Modifications",
    icon: <AlertTriangle className="size-4.5 text-amber-400" />,
    content: (
      <p className="leading-relaxed">
        Each project scope includes defined revision rounds at designated milestone gates (e.g., 2 storyboard iterations, 2 styleframe passes, 2 animation review cycles). Fundamental changes to script, voiceover, narrative structure, or 3D product geometry requested after milestone approval constitute scope expansions and will be quoted separately before execution.
      </p>
    ),
  },
  {
    id: "liability-warranties",
    number: "08",
    title: "Limitation of Liability & Warranties",
    icon: <ShieldAlert className="size-4.5 text-rose-400" />,
    content: (
      <div className="space-y-3">
        <p>
          Pixel Grid Studios delivers all creative services with the highest professional standard of care. To the maximum extent permitted by applicable law, Pixel Grid Studios disclaims all incidental, indirect, or consequential damages.
        </p>
        <p className="font-mono text-sm text-brand-subtle">
          Our aggregate financial liability for any claim arising from a project engagement shall not exceed the total fees actually paid to Pixel Grid Studios under the specific Statement of Work.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law",
    number: "09",
    title: "Governing Law & Jurisdiction",
    icon: <Scale className="size-4.5 text-emerald-400" />,
    content: (
      <div className="space-y-3">
        <p>
          These Terms and any project contracts executed with Pixel Grid Studios shall be governed by and construed in accordance with the laws of India. Any legal dispute or arbitration arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
        </p>
      </div>
    ),
  },
];

export const TermsConditions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("acceptance");
  const isManualScrolling = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    isManualScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 850);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveTab(termsSections[termsSections.length - 1].id);
        return;
      }

      let currentId = termsSections[0].id;
      for (const sec of termsSections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            currentId = sec.id;
          }
        }
      }
      setActiveTab(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] py-8 sm:py-12">
        {/* Back Link */}
        <FadeIn delay={0.1} direction="none" className="mb-6 sm:mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-brand-subtle hover:text-brand-foreground transition-colors group"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Home</span>
          </Link>
        </FadeIn>

        {/* Hero Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <TextReveal
            text="Terms & Conditions"
            className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-brand-foreground"
          />
          <FadeIn delay={0.2} direction="up" className="mt-2 text-base sm:text-lg text-brand-subtle font-normal">
            Clear, transparent guidelines for a seamless, professional creative collaboration.
          </FadeIn>
        </div>

        {/* Main Layout: Sidebar Navigation Left + Content Cards Right */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[340px_1fr] items-start">
          {/* Left Sticky Table of Contents Navigation (Refined Larger Font & Tactile Spacing) */}
          <aside className="hidden lg:block sticky top-24 rounded-2xl bg-brand-muted/70 p-6 shadow-xs border-0">
            <span className="font-mono text-sm uppercase tracking-widest text-brand-subtle font-semibold block mb-4">
              Contract Articles
            </span>
            <ul className="space-y-1.5">
              {termsSections.map((sec) => {
                const isActive = activeTab === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-display text-sm sm:text-base font-semibold tracking-normal transition-colors duration-150 cursor-pointer border-0 ${
                        isActive
                          ? "bg-brand-panel text-brand-panel-foreground shadow-xs"
                          : "text-brand-subtle hover:text-brand-foreground hover:bg-brand-bg"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-medium opacity-60 shrink-0">{sec.number}</span>
                        <span className="leading-snug">{sec.title}</span>
                      </div>
                      <ChevronRight className={`size-4 shrink-0 transition-transform ${isActive ? "opacity-100 translate-x-0.5" : "opacity-0"}`} />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-4 border-t border-brand-foreground/10 text-left">
              <span className="font-mono text-sm uppercase tracking-wider text-brand-subtle block mb-1.5">
                Project Inquiries
              </span>
              <a
                href="mailto:hello@pixelgridstudios.com"
                className="font-mono text-sm font-medium text-brand-foreground hover:underline"
              >
                hello@pixelgridstudios.com
              </a>
            </div>
          </aside>

          {/* Right Structured Clause Cards */}
          <div className="space-y-6">
            {/* Overview Intro Banner */}
            <FadeIn delay={0.1} fullWidth className="rounded-2xl sm:rounded-3xl bg-brand-panel text-brand-panel-foreground p-6 sm:p-10 shadow-lg border-0">
              <span className="font-mono text-sm uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
                Pipeline Standard
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-bold tracking-tight">
                Designed for Transparency &amp; Speed
              </h2>
              <p className="mt-3 text-sm sm:text-base text-brand-panel-foreground/80 leading-relaxed font-normal">
                Our commercial agreements are built on mutual respect, clear milestone deliverables, and uncompromised craft. Every commission is directly led by Creative Director Subhanshu Gajbhiye with complete scope visibility.
              </p>
            </FadeIn>

            {/* Structured Section Loop with Strictly In-Line Icon & Header */}
            {termsSections.map((sec) => (
              <FadeIn delay={0.1} fullWidth key={sec.id}>
                <section
                  id={sec.id}
                  className="rounded-2xl sm:rounded-3xl bg-brand-muted/70 p-6 sm:p-10 shadow-xs border-0 scroll-mt-28"
                >
                  {/* Header Block: Article badge above, Icon and Heading strictly in-line */}
                  <div className="mb-5 pb-4 border-b border-brand-foreground/10">
                    <span className="font-mono text-sm uppercase tracking-widest text-emerald-500 font-semibold block mb-2">
                      Article {sec.number}
                    </span>
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-brand-bg text-brand-foreground shadow-xs">
                        {sec.icon}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-brand-foreground leading-tight">
                        {sec.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base leading-relaxed text-brand-subtle font-normal">
                    {sec.content}
                  </div>
                </section>
              </FadeIn>
            ))}
          </div>
        </div>

        <DotDivider />

        {/* Footer Contact Quick Link */}
        <FadeIn delay={0.1} fullWidth className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-brand-subtle">
            Pixel Grid Studios · Commercial Terms of Service · Updated August 2026
          </span>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-6 py-2.5 font-display text-sm font-semibold shadow-xs transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] border-0"
          >
            <span>Commission a Brief</span>
            <ChevronRight className="size-3.5 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default TermsConditions;
