import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, ArrowLeft, ChevronRight, Lock, Eye, FileText, Globe } from "lucide-react";
import DotDivider from "@/components/DotDivider";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const privacySections = [
  {
    id: "info-we-collect",
    number: "01",
    title: "Information We Collect",
    icon: <Eye className="size-4.5 text-emerald-400" />,
    summary: "Personal details, telemetry, and project briefing data provided directly or automatically.",
    content: (
      <div className="space-y-4">
        <p>
          Pixel Grid Studios collects information necessary to communicate, review creative briefs, and deliver motion design, 3D visualization, and brand film services:
        </p>
        <ul className="space-y-2.5 pl-2">
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <span>
              <strong className="text-brand-foreground font-semibold">Personal &amp; Contact Details:</strong> Name, professional email address, company affiliation, target budget, and briefing descriptions submitted through our intake forms or direct communications.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <span>
              <strong className="text-brand-foreground font-semibold">Technical &amp; Usage Telemetry:</strong> IP address, device viewport dimensions, browser architecture, referring URLs, and interaction metrics to ensure optimal video playback and 60FPS UI rendering.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <span>
              <strong className="text-brand-foreground font-semibold">Cookies &amp; Local Storage:</strong> Lightweight local storage tokens used exclusively for storing your interface preference (Light / Dark mode selection). We do not deploy intrusive third-party cross-site advertising trackers.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We Use Your Information",
    icon: <FileText className="size-4.5 text-cyan-400" />,
    summary: "Service delivery, production communications, and high-fidelity video stream optimization.",
    content: (
      <div className="space-y-4">
        <p>Your data is processed strictly for legitimate studio operations and project delivery:</p>
        <ul className="space-y-2.5 pl-2">
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>Evaluating project scopes, timelines, and generating technical production proposals.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>Direct correspondence regarding active milestones, 3D styleframe reviews, and delivery archives.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>Analyzing web performance, video bandwidth streaming efficiency, and preventing malicious activity.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>Complying with statutory tax, invoicing, and commercial accounting regulations.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "sharing-disclosure",
    number: "03",
    title: "Information Sharing & Disclosure",
    icon: <Globe className="size-4.5 text-amber-400" />,
    summary: "We never sell client data. Sharing is restricted to vetted cloud infrastructure partners.",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-brand-foreground">
          Pixel Grid Studios does not sell, rent, or trade your personal or project data to data brokers or advertising networks under any circumstances.
        </p>
        <p>Information is disclosed solely in the following controlled contexts:</p>
        <ul className="space-y-2.5 pl-2">
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
            <span>
              <strong className="text-brand-foreground font-semibold">Infrastructure Service Providers:</strong> Trusted enterprise cloud providers (Vercel, Vimeo Enterprise, AWS) who host video assets and database records under strict confidentiality and non-disclosure standards.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
            <span>
              <strong className="text-brand-foreground font-semibold">Legal &amp; Regulatory Compliance:</strong> When mandated by court subpoenas, governmental audits, or applicable statutory law in India.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "data-security",
    number: "04",
    title: "Data Security & Integrity",
    icon: <Lock className="size-4.5 text-purple-400" />,
    summary: "Encrypted transmission, access controls, and protected digital asset management.",
    content: (
      <p className="leading-relaxed">
        We implement industry-standard encryption protocols (HTTPS / TLS 1.3) for all web traffic and secure credential management for project repository access. While no digital system can claim absolute invulnerability, we continuously audit our pipeline to safeguard your confidential product launch assets, CAD models, and briefing materials against unauthorized intrusion or accidental loss.
      </p>
    ),
  },
  {
    id: "your-rights",
    number: "05",
    title: "Your Rights & Data Portability",
    icon: <ShieldCheck className="size-4.5 text-emerald-400" />,
    summary: "Request inspection, correction, or deletion of your records at any time.",
    content: (
      <div className="space-y-3">
        <p>Under international privacy frameworks (including GDPR, CCPA, and Indian DPDPA), you retain the right to:</p>
        <ul className="space-y-2 pl-2">
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-foreground/40 shrink-0" />
            <span>Request a complete export of personal information stored on our servers.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-foreground/40 shrink-0" />
            <span>Request rectification or correction of inaccurate contact records.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-foreground/40 shrink-0" />
            <span>Request permanent deletion of your intake records and contact archives.</span>
          </li>
        </ul>
        <p className="pt-2 text-sm font-mono text-brand-subtle">
          To exercise any of these rights, email Subhanshu Gajbhiye at <a href="mailto:hello@pixelgridstudios.com" className="underline font-semibold text-brand-foreground">hello@pixelgridstudios.com</a>.
        </p>
      </div>
    ),
  },
  {
    id: "third-party-links",
    number: "06",
    title: "External Platforms & Embeds",
    icon: <Globe className="size-4.5 text-blue-400" />,
    summary: "Policies governing Vimeo, Behance, and external social network integrations.",
    content: (
      <p className="leading-relaxed">
        Our website features embedded 4K video streams hosted via Vimeo and hyperlinks to studio showcases on Behance, Instagram, and LinkedIn. Interacting with external players or clicking outward links subjects you to the individual privacy policies of those respective third-party platforms.
      </p>
    ),
  },
  {
    id: "policy-updates",
    number: "07",
    title: "Policy Revisions & Contact Desk",
    icon: <Mail className="size-4.5 text-emerald-400" />,
    summary: "Periodic reviews, effective date stamps, and creative director contact line.",
    content: (
      <div className="space-y-3">
        <p>
          Pixel Grid Studios reserves the right to revise this Privacy Policy to reflect advancements in technology, cloud infrastructure updates, or statutory requirements. All modifications take effect immediately upon publication.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-brand-bg text-brand-subtle font-mono text-sm space-y-1 border-0">
          <div><strong className="text-brand-foreground">Studio:</strong> Pixel Grid Studios</div>
          <div><strong className="text-brand-foreground">Creative Director:</strong> Subhanshu Gajbhiye</div>
          <div><strong className="text-brand-foreground">Studio Desk:</strong> hello@pixelgridstudios.com</div>
          <div><strong className="text-brand-foreground">Studio Base:</strong> Pune, Maharashtra, India</div>
          <div><strong className="text-brand-foreground">Effective Date:</strong> August 2026</div>
        </div>
      </div>
    ),
  },
];

export const PrivacyPolicy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("info-we-collect");
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
        setActiveTab(privacySections[privacySections.length - 1].id);
        return;
      }

      let currentId = privacySections[0].id;
      for (const sec of privacySections) {
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
            text="Privacy Policy"
            className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-brand-foreground"
          />
          <FadeIn delay={0.2} direction="up" className="mt-2 text-base sm:text-lg text-brand-subtle font-normal">
            Safeguarding your project briefs, intellectual assets, and telemetry with transparency and integrity.
          </FadeIn>
        </div>

        {/* Main Content Layout: Sidebar Navigation Left + Content Cards Right */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[340px_1fr] items-start">
          {/* Left Sticky Table of Contents Navigation (Refined Larger Font & Tactile Spacing) */}
          <aside className="hidden lg:block sticky top-24 rounded-2xl bg-brand-muted/70 p-6 shadow-xs border-0">
            <span className="font-mono text-sm uppercase tracking-widest text-brand-subtle font-semibold block mb-4">
              Document Clauses
            </span>
            <ul className="space-y-1.5">
              {privacySections.map((sec) => {
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
                Direct Inquiries
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
                Commitment to Confidentiality
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-bold tracking-tight">
                Your Trust is Our Primary Asset
              </h2>
              <p className="mt-3 text-sm sm:text-base text-brand-panel-foreground/80 leading-relaxed font-normal">
                At Pixel Grid Studios, we frequently collaborate with pre-launch consumer tech, automotive, and digital entertainment brands under strict NDAs. We treat your briefing data, proprietary CAD geometries, and styleframes with absolute security protocols.
              </p>
            </FadeIn>

            {/* Structured Section Loop with Strictly In-Line Icon & Header */}
            {privacySections.map((sec) => (
              <FadeIn delay={0.1} fullWidth key={sec.id}>
                <section
                  id={sec.id}
                  className="rounded-2xl sm:rounded-3xl bg-brand-muted/70 p-6 sm:p-10 shadow-xs border-0 scroll-mt-28"
                >
                  {/* Header Block: Clause badge above, Icon and Heading strictly in-line */}
                  <div className="mb-5 pb-4 border-b border-brand-foreground/10">
                    <span className="font-mono text-sm uppercase tracking-widest text-emerald-500 font-semibold block mb-2">
                      Clause {sec.number}
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
            Pixel Grid Studios · Legal &amp; Privacy Standards · Updated August 2026
          </span>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-6 py-2.5 font-display text-sm font-semibold shadow-xs transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] border-0"
          >
            <span>Have a Question? Contact Us</span>
            <ChevronRight className="size-3.5 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
