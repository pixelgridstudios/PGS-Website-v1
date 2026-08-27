import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  HeartHandshake,
  ChevronDown,
  Mail,
  ExternalLink,
  Laptop,
  Check,
  Compass,
  Code2,
} from "lucide-react";
import DotDivider from "@/components/DotDivider";
import { openPositions, JobPosition } from "@/data/careers";

const studioPerks = [
  {
    icon: <Laptop className="size-5 text-brand-foreground" />,
    title: "Flexible & Remote-First",
    copy: "Work from our collaborative studio in Pune, or from anywhere across the globe with asynchronous flexibility.",
  },
  {
    icon: <Cpu className="size-5 text-brand-foreground" />,
    title: "High-Density Hardware",
    copy: "Access top-tier multi-RTX workstations, calibrated color monitors, and dedicated in-house + cloud render farm compute.",
  },
  {
    icon: <Sparkles className="size-5 text-brand-foreground" />,
    title: "15% Studio R&D Time",
    copy: "Dedicate 15% of your studio time to personal growth, procedural experiments, styleframe exploration, and internal tools.",
  },
  {
    icon: <Compass className="size-5 text-brand-foreground" />,
    title: "Direct CD Mentorship",
    copy: "Work directly alongside Founder & Creative Director Subhanshu Gajbhiye with flat hierarchy and zero agency bureaucracy.",
  },
  {
    icon: <HeartHandshake className="size-5 text-brand-foreground" />,
    title: "Competitive Compensation",
    copy: "Top-tier compensation packages, milestone project bonuses, paid software subscriptions, and annual hardware stipends.",
  },
  {
    icon: <Layers className="size-5 text-brand-foreground" />,
    title: "Full Creative Credit",
    copy: "We champion our artists publicly. You will receive full credit, styleframe promotion, and permission to share process reels.",
  },
];

const faqs = [
  {
    q: "How does the interview and review process work?",
    a: "We review every showreel and portfolio submission within 48 hours. If there is a strong craft alignment, we schedule a 30-minute creative conversation with Subhanshu Gajbhiye to discuss your work, process, and ambitions. We do not require free speculative test projects — your reel is your testimony.",
  },
  {
    q: "Are roles open to international remote candidates?",
    a: "Yes! While our physical studio base is in Pune, Maharashtra (India), several of our 3D design, simulation, and look development positions are open to global remote collaborators.",
  },
  {
    q: "What if I am only looking for freelance or contract collaborations?",
    a: "We frequently partner with specialist freelance artists for commercial launch sprints. Submit your reel to our General Freelance Roster and we will reach out when tailored project briefs match your skillset.",
  },
  {
    q: "What software stack is standard at Pixel Grid Studios?",
    a: "Our core pipeline is built on Cinema 4D, Redshift, Houdini, Unreal Engine 5, Octane, and Adobe After Effects, color-managed through ACEScg and coordinated via Frame.io.",
  },
];

export const Careers: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const departments = [
    "All",
    "3D & Motion",
    "Art Direction & LookDev",
    "FX & Simulation",
    "Production & Pipeline",
  ];

  const filteredPositions =
    selectedDept === "All"
      ? openPositions
      : openPositions.filter((p) => p.department === selectedDept);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("careers@pixelgridstudios.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] pt-8 sm:pt-12 pb-2 sm:pb-3">
        {/* 1. Page Header */}
        <section data-reveal className="flex flex-col gap-4 max-w-4xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-foreground leading-[1.05]">
            Join the Studio
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-brand-subtle font-normal leading-relaxed max-w-3xl">
            We build campaign-defining 3D launch films, procedural visual systems, and spatial CGI for products that matter. We are always looking for visionary artists, technical directors, and motion storytellers.
          </p>
        </section>

        <DotDivider className="my-6 sm:my-8" />

        {/* 3. Open Positions Section */}
        <section data-reveal className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium mb-1">
                <Briefcase className="size-4 text-emerald-500" />
                <span>Open Opportunities ({filteredPositions.length})</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-foreground">
                Available Positions
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => {
                const isSelected = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setSelectedDept(dept)}
                    className={`h-9 px-4 inline-flex items-center justify-center rounded-full font-mono text-xs font-medium transition-colors duration-150 cursor-pointer select-none border-0 ${
                      isSelected
                        ? "bg-brand-panel text-brand-panel-foreground font-semibold shadow-xs"
                        : "bg-brand-muted text-brand-subtle hover:text-brand-foreground hover:bg-brand-muted/80"
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Job Postings List */}
          <div className="space-y-4">
            {filteredPositions.map((position) => {
              const isExpanded = expandedPosition === position.id;
              return (
                <div
                  key={position.id}
                  className="rounded-2xl sm:rounded-3xl bg-brand-muted overflow-hidden transition-all duration-200 border-0 shadow-xs"
                >
                  {/* Position Summary Row */}
                  <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div
                      onClick={() => setExpandedPosition(isExpanded ? null : position.id)}
                      className="space-y-2 max-w-2xl cursor-pointer select-none"
                    >
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-brand-subtle">
                        <span className="rounded-full bg-brand-bg px-3 py-1 font-semibold text-brand-foreground shadow-2xs">
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {position.location}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          {position.type}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground hover:text-brand-subtle transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-subtle leading-relaxed">
                        {position.overview}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        to={`/careers/apply?role=${encodeURIComponent(position.title)}`}
                        className="h-10 sm:h-11 px-5 sm:px-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground text-xs sm:text-sm font-medium shadow-md transition-opacity duration-150 hover:opacity-90 border-0 select-none cursor-pointer shrink-0"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setExpandedPosition(isExpanded ? null : position.id)}
                        aria-label="Expand role details"
                        className="size-10 sm:size-11 inline-flex items-center justify-center rounded-full bg-brand-bg text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors border-0 cursor-pointer shrink-0"
                      >
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Full Breakdown Drawer */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-brand-foreground/10 animate-in fade-in duration-200">
                      <div className="grid gap-8 lg:grid-cols-2 pt-6">
                        {/* Responsibilities */}
                        <div className="space-y-3">
                          <h4 className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold">
                            Core Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {position.responsibilities.map((r, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-subtle leading-relaxed">
                                <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-3">
                          <h4 className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold">
                            What We're Looking For
                          </h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-subtle leading-relaxed">
                                <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tool Stack & Direct Apply Bar */}
                      <div className="mt-8 pt-6 border-t border-brand-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs uppercase text-brand-subtle font-semibold mr-2">
                            Primary Stack:
                          </span>
                          {position.tools.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-brand-bg px-3 py-1 font-mono text-xs font-medium text-brand-foreground shadow-2xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/careers/apply?role=${encodeURIComponent(position.title)}`}
                          className="h-11 sm:h-12 px-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-panel text-brand-panel-foreground text-xs sm:text-sm font-medium shadow-md transition-opacity hover:opacity-90 border-0 shrink-0 select-none cursor-pointer"
                        >
                          <Mail className="size-4" />
                          <span>Apply for {position.title}</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Spontaneous / Freelance General Roster Card */}
        <section data-reveal className="mt-8 rounded-2xl sm:rounded-3xl bg-brand-panel text-brand-panel-foreground p-8 sm:p-12 shadow-md border-0">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                <Sparkles className="size-4" />
                <span>Freelance Roster &amp; Spontaneous Submissions</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
                Don’t see your exact role listed?
              </h2>
              <p className="text-base text-brand-panel-foreground/80 leading-relaxed">
                We are constantly expanding our global roster of specialist freelance animators, sound designers, lookdev artists, and realtime creators for upcoming commercial sprints. Send over your reel anytime.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to="/careers/apply?role=Freelance+Roster+%26+General+Specialist"
                className="h-12 px-7 sm:px-8 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black text-xs sm:text-sm font-medium shadow-md transition-opacity hover:opacity-90 border-0 select-none cursor-pointer shrink-0"
              >
                <span>Join Freelance Network</span>
                <ArrowRight className="size-4" />
              </Link>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="h-12 px-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white text-xs sm:text-sm font-mono font-medium transition-colors hover:bg-white/20 border-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="size-4" />
                    <span>careers@pixelgridstudios.com</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        <DotDivider className="my-6 sm:my-8" />

        {/* 5. Studio Culture & Pillars Grid */}
        <section data-reveal className="space-y-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium mb-1">
              <Sparkles className="size-4 text-amber-500" />
              <span>Studio Philosophy &amp; Benefits</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-foreground">
              Built for craft, engineered for artists
            </h2>
            <p className="mt-2 text-base sm:text-lg text-brand-subtle font-normal">
              We operate without redundant management layers. Every member of our studio works directly on high-visibility campaigns with world-class computational resources.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studioPerks.map((perk, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl bg-brand-muted p-6 sm:p-8 flex flex-col justify-between gap-4 border-0 shadow-xs"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-bg shadow-xs">
                  {perk.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-brand-foreground">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-brand-subtle leading-relaxed">
                    {perk.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <DotDivider className="my-6 sm:my-8" />

        {/* 6. Recruitment FAQs Section */}
        <section data-reveal className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-sm sm:text-base text-brand-subtle">
              Everything you need to know about our recruitment pipeline, remote eligibility, and studio standards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-brand-muted p-6 sm:p-8 space-y-2.5 border-0 shadow-xs"
              >
                <h3 className="font-display text-base sm:text-lg font-bold text-brand-foreground">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-brand-subtle leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
