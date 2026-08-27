import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Link as LinkIcon,
  MapPin,
  Clock,
  Briefcase,
  Layers,
  AlertCircle,
  Mail,
  Check,
  Send,
  ShieldCheck,
  Cpu,
  Gift,
} from "lucide-react";
import DotDivider from "@/components/DotDivider";
import { openPositions, JobPosition } from "@/data/careers";

const softwareOptions = [
  "Cinema 4D",
  "Redshift",
  "Houdini",
  "Unreal Engine 5",
  "Octane",
  "After Effects",
  "Blender",
  "VEX / Python",
  "DaVinci Resolve",
  "Figma / Notion",
];

const experienceOptions = [
  "1-3 Years",
  "3-5 Years",
  "5-8 Years",
  "8+ Years / Lead",
];

const availabilityOptions = [
  "Immediate",
  "2 Weeks",
  "1 Month",
  "Freelance Project Basis",
];

export const CareersApply: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const roleParam = searchParams.get("role");
  const defaultPosition =
    openPositions.find((p) => p.title.toLowerCase() === roleParam?.toLowerCase()) ||
    openPositions.find((p) => p.id === roleParam) ||
    openPositions[0];

  const [selectedPosition, setSelectedPosition] = useState<JobPosition>(defaultPosition);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [portfolioUrl, setPortfolioUrl] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [experience, setExperience] = useState<string>("3-5 Years");
  const [availability, setAvailability] = useState<string>("Immediate");
  const [selectedTools, setSelectedTools] = useState<string[]>([
    "Cinema 4D",
    "Redshift",
  ]);
  const [note, setNote] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync position with search param
  useEffect(() => {
    if (roleParam) {
      const match =
        openPositions.find((p) => p.title.toLowerCase() === roleParam.toLowerCase()) ||
        openPositions.find((p) => p.id === roleParam);
      if (match) {
        setSelectedPosition(match);
      }
    }
  }, [roleParam]);

  const handleRoleChange = (roleTitle: string) => {
    const match = openPositions.find((p) => p.title === roleTitle);
    if (match) {
      setSelectedPosition(match);
      setSearchParams({ role: match.title });
    }
  };

  const toggleTool = (tool: string) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!name.trim()) {
      setErrorMessage("Please provide your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }
    if (!portfolioUrl.trim()) {
      setErrorMessage("Please provide your Showreel / Portfolio link.");
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setPortfolioUrl("");
    setLocation("");
    setNote("");
    setErrorMessage(null);
  };

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] pt-8 sm:pt-12 pb-2 sm:pb-3">
        {/* Top Navigation: Back Link */}
        <div data-reveal className="mb-6 sm:mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-subtle hover:text-brand-foreground transition-colors group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Careers &amp; All Roles</span>
          </Link>
        </div>

        {isSubmitted ? (
          /* SUCCESS CONFIRMATION STATE */
          <section data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center border-0 shadow-sm">
            <div className="mx-auto flex size-16 sm:size-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-inner mb-6">
              <CheckCircle2 className="size-10 sm:size-12" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-semibold">
                Application Received · 48-Hour Turnaround
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-brand-foreground">
                Thank you, {name.split(" ")[0]}!
              </h1>
              <p className="text-base sm:text-lg text-brand-subtle leading-relaxed">
                Your portfolio and submission for <strong className="text-brand-foreground">{selectedPosition.title}</strong> have been received. Founder &amp; Creative Director Subhanshu Gajbhiye will review your reel within 48 hours.
              </p>
            </div>

            {/* Submission Receipt Box */}
            <div className="my-8 rounded-2xl bg-brand-bg p-6 text-left text-xs sm:text-sm font-mono space-y-2 max-w-2xl mx-auto shadow-xs border-0">
              <div className="pb-2 border-b border-brand-foreground/10 flex items-center justify-between">
                <span className="font-semibold text-brand-foreground">Application Receipt</span>
                <span className="text-emerald-500 flex items-center gap-1 font-semibold">
                  <Check className="size-3.5" /> Logged to Queue
                </span>
              </div>
              <div className="pt-2"><span className="text-brand-subtle">Target Role:</span> <strong className="text-brand-foreground">{selectedPosition.title}</strong></div>
              <div><span className="text-brand-subtle">Candidate:</span> <strong className="text-brand-foreground">{name}</strong> ({email})</div>
              <div><span className="text-brand-subtle">Showreel URL:</span> <a href={portfolioUrl} target="_blank" rel="noreferrer" className="text-brand-foreground underline">{portfolioUrl}</a></div>
              <div><span className="text-brand-subtle">Experience &amp; Availability:</span> <strong className="text-brand-foreground">{experience} · {availability}</strong></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/careers"
                className="h-11 sm:h-12 px-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground text-xs sm:text-sm font-medium shadow-md transition-opacity hover:opacity-90 border-0"
              >
                <span>Return to Careers</span>
                <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={handleReset}
                className="h-11 sm:h-12 px-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand-bg text-brand-foreground text-xs sm:text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors border-0 cursor-pointer"
              >
                <span>Submit Another Role</span>
              </button>
            </div>
          </section>
        ) : (
          <div className="space-y-8">
            {/* ============================================================ */}
            {/* 1. TOP SECTION: 100% FULL-WIDTH JOB DESCRIPTION HERO TAB    */}
            {/* ============================================================ */}
            <section data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted p-8 sm:p-12 lg:p-14 border-0 shadow-xs space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-brand-subtle">
                <span className="rounded-full bg-brand-bg px-3.5 py-1 font-semibold text-brand-foreground shadow-2xs">
                  {selectedPosition.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  {selectedPosition.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {selectedPosition.type}
                </span>
                <span>·</span>
                <span>{selectedPosition.experience}</span>
              </div>

              {/* Title & Overview */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-500 font-semibold">
                  <Sparkles className="size-4" />
                  <span>Job Description</span>
                </div>
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-foreground leading-[1.06]">
                  {selectedPosition.title}
                </h1>
                <p className="text-lg sm:text-xl text-brand-subtle leading-relaxed max-w-4xl pt-1">
                  {selectedPosition.overview}
                </p>
              </div>

              {/* Tool Stack Tags & Quick Jump in Full-Width Header */}
              <div className="pt-6 border-t border-brand-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs uppercase text-brand-subtle font-semibold mr-2">
                    Primary Stack:
                  </span>
                  {selectedPosition.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-bg px-3.5 py-1.5 font-mono text-xs font-medium text-brand-foreground shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#application-form"
                  className="h-10 px-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground text-xs sm:text-sm font-medium shadow-md transition-opacity hover:opacity-90 border-0 shrink-0"
                >
                  <span>Apply Now ↓</span>
                </a>
              </div>
            </section>

            <DotDivider className="my-6 sm:my-8" />

            {/* ============================================================ */}
            {/* 2. TWO COLUMNS SIDE-BY-SIDE BELOW                           */}
            {/* ============================================================ */}
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              
              {/* LEFT COLUMN (5 Columns Sticky): Studio Application Protocol */}
              <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                <div data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted p-6 sm:p-8 space-y-6 border-0 shadow-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-500 font-semibold">
                      <Sparkles className="size-4" />
                      <span>Direct Studio Review</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground">
                      Application Protocol
                    </h2>
                    <p className="text-sm text-brand-subtle leading-relaxed">
                      We evaluate artists based on craft, kinematic intuition, and visual taste. Here is our direct commitment to every applicant:
                    </p>
                  </div>

                  {/* Protocol Commitments */}
                  <ul className="space-y-3 font-mono text-xs text-brand-subtle">
                    <li className="flex items-start gap-2.5">
                      <ShieldCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>48-Hour Turnaround:</strong> Every reel receives direct review from Subhanshu Gajbhiye.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ShieldCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>No Free Spec Work:</strong> We will never ask you to complete unpaid test projects.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ShieldCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Full Creative Credit:</strong> Complete public attribution and portfolio freedom.</span>
                    </li>
                  </ul>

                  {/* 3-Step Hiring Timeline */}
                  <div className="pt-4 border-t border-brand-foreground/10 space-y-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brand-subtle font-semibold block">
                      Recruitment Milestones
                    </span>
                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground text-[11px] font-bold">1</span>
                        <span className="text-brand-foreground font-medium">Reel &amp; Craft Assessment (48h)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground text-[11px] font-bold">2</span>
                        <span className="text-brand-foreground font-medium">30-Min Creative Call with CD</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground text-[11px] font-bold">3</span>
                        <span className="text-brand-foreground font-medium">Offer &amp; Farm Onboarding</span>
                      </div>
                    </div>
                  </div>

                  {/* Studio Base & Compute */}
                  <div className="pt-4 border-t border-brand-foreground/10 space-y-2 font-mono text-xs text-brand-subtle">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-3.5 text-brand-foreground" />
                      <span><strong>Studio Base:</strong> Pune, Maharashtra, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="size-3.5 text-brand-foreground" />
                      <span><strong>Compute:</strong> Dedicated Multi-RTX GPU + Cloud Farm</span>
                    </div>
                  </div>

                  {/* Direct Contact */}
                  <div className="pt-4 border-t border-brand-foreground/10 text-xs font-mono text-brand-subtle">
                    Confidential reels or inquiries? Email us at{" "}
                    <a href="mailto:careers@pixelgridstudios.com" className="text-brand-foreground underline font-medium">
                      careers@pixelgridstudios.com
                    </a>
                  </div>
                </div>
              </aside>

              {/* RIGHT COLUMN (7 Columns): JD Breakdown + Application Form */}
              <main className="lg:col-span-7 space-y-8">
                
                {/* 1. Responsibilities, Requirements & What We Offer */}
                <section data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted p-6 sm:p-10 lg:p-12 border-0 shadow-xs space-y-8">
                  
                  {/* Core Responsibilities */}
                  <div className="space-y-3.5">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-brand-foreground font-semibold flex items-center gap-2">
                      <Briefcase className="size-4 text-emerald-500" />
                      <span>Core Responsibilities</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {selectedPosition.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-brand-subtle leading-relaxed">
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We're Looking For */}
                  <div className="space-y-3.5 pt-6 border-t border-brand-foreground/10">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-brand-foreground font-semibold flex items-center gap-2">
                      <Sparkles className="size-4 text-emerald-500" />
                      <span>What We're Looking For</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {selectedPosition.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-brand-subtle leading-relaxed">
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What Pixel Grid Offers */}
                  {selectedPosition.whatWeOffer && selectedPosition.whatWeOffer.length > 0 && (
                    <div className="space-y-3.5 pt-6 border-t border-brand-foreground/10">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-brand-foreground font-semibold flex items-center gap-2">
                        <Gift className="size-4 text-amber-500" />
                        <span>What Pixel Grid Offers</span>
                      </h3>
                      <ul className="space-y-2.5">
                        {selectedPosition.whatWeOffer.map((offer, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-brand-subtle leading-relaxed">
                            <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{offer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>

                <DotDivider className="my-6 sm:my-8" />

                {/* 2. Candidate Application Form */}
                <section
                  id="application-form"
                  data-reveal
                  className="rounded-2xl sm:rounded-3xl bg-brand-muted p-6 sm:p-10 lg:p-12 border-0 shadow-xs"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Form Headline */}
                    <div className="space-y-1 pb-4 border-b border-brand-foreground/10">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium">
                        <Mail className="size-4 text-emerald-500" />
                        <span>Direct Submission</span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-brand-foreground">
                        Apply for this Position
                      </h2>
                      <p className="text-sm text-brand-subtle leading-relaxed">
                        Fill in your showreel and background details. Subhanshu Gajbhiye and the lead team will review your application within 48 hours.
                      </p>
                    </div>

                    {/* Target Role Selector (Dynamic) */}
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2">
                        Selected Role <span className="text-emerald-500">*</span>
                      </label>
                      <select
                        value={selectedPosition.title}
                        onChange={(e) => handleRoleChange(e.target.value)}
                        className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm font-medium text-brand-foreground border-0 focus:outline-none focus:ring-2 focus:ring-brand-foreground/20 transition-all cursor-pointer shadow-2xs"
                      >
                        {openPositions.map((p) => (
                          <option key={p.id} value={p.title} className="bg-neutral-900 text-white">
                            {p.title} ({p.department})
                          </option>
                        ))}
                      </select>
                      <span className="mt-1 block font-mono text-[11px] text-brand-subtle">
                        Changing the role automatically updates the Job Description above.
                      </span>
                    </div>

                    {/* Candidate Identity */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-1.5">
                          Full Name <span className="text-emerald-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Subhanshu Gajbhiye"
                          className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 border-0 focus:outline-none focus:ring-2 focus:ring-brand-foreground/20 transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-1.5">
                          Email Address <span className="text-emerald-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="artist@pixelgridstudios.com"
                          className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 border-0 focus:outline-none focus:ring-2 focus:ring-brand-foreground/20 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Showreel Link */}
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-1.5">
                        Showreel / Portfolio URL <span className="text-emerald-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <LinkIcon className="absolute left-3.5 size-4 text-brand-subtle pointer-events-none" />
                        <input
                          type="url"
                          required
                          value={portfolioUrl}
                          onChange={(e) => setPortfolioUrl(e.target.value)}
                          placeholder="https://vimeo.com/... or https://behance.net/..."
                          className="w-full rounded-xl bg-brand-bg pl-10 pr-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 border-0 focus:outline-none focus:ring-2 focus:ring-brand-foreground/20 transition-all shadow-2xs"
                        />
                      </div>
                      <span className="mt-1 block font-mono text-[11px] text-brand-subtle">
                        Vimeo, Behance, Artstation, YouTube, or personal website (include password if protected).
                      </span>
                    </div>

                    {/* Location & Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-1.5">
                          Location &amp; Timezone
                        </label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Pune, India (IST) or Remote"
                          className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 border-0 focus:outline-none focus:ring-2 focus:ring-brand-foreground/20 transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-1.5">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 border-0 focus:outline-none focus:ring-2 focus:ring-brand-foreground/20 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Experience & Availability */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2">
                          Experience Level
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {experienceOptions.map((opt) => {
                            const isSelected = experience === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setExperience(opt)}
                                className={`h-9 px-3.5 inline-flex items-center justify-center rounded-full font-mono text-xs font-medium transition-colors border-0 cursor-pointer select-none ${
                                  isSelected
                                    ? "bg-brand-foreground text-brand-bg font-semibold shadow-xs"
                                    : "bg-brand-bg text-brand-subtle hover:text-brand-foreground hover:bg-brand-bg/80"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2">
                          Availability
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {availabilityOptions.map((opt) => {
                            const isSelected = availability === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setAvailability(opt)}
                                className={`h-9 px-3.5 inline-flex items-center justify-center rounded-full font-mono text-xs font-medium transition-colors border-0 cursor-pointer select-none ${
                                  isSelected
                                    ? "bg-brand-foreground text-brand-bg font-semibold shadow-xs"
                                    : "bg-brand-bg text-brand-subtle hover:text-brand-foreground hover:bg-brand-bg/80"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Software Stack */}
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2">
                        Primary Software &amp; Render Engines (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {softwareOptions.map((tool) => {
                          const isSelected = selectedTools.includes(tool);
                          return (
                            <button
                              key={tool}
                              type="button"
                              onClick={() => toggleTool(tool)}
                              className={`h-9 px-3.5 inline-flex items-center justify-center gap-1.5 rounded-full font-mono text-xs font-medium transition-colors border-0 cursor-pointer select-none ${
                                isSelected
                                  ? "bg-brand-foreground text-brand-bg font-semibold shadow-xs"
                                  : "bg-brand-bg text-brand-subtle hover:text-brand-foreground hover:bg-brand-bg/80"
                              }`}
                            >
                              {isSelected && <Check className="size-3" />}
                              <span>{tool}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-1.5">
                        Creative Focus &amp; Notes
                      </label>
                      <textarea
                        rows={4}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Tell us about your creative focus, preferred projects, or breakdown reel details you'd like to highlight..."
                        className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 border-0 focus:outline-none focus:ring-2 focus:ring-brand-foreground/20 transition-all resize-none shadow-2xs"
                      />
                    </div>

                    {/* Error */}
                    {errorMessage && (
                      <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3.5 text-xs font-mono text-red-500 border-0">
                        <AlertCircle className="size-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-brand-foreground/10 flex items-center justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 px-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-panel text-brand-panel-foreground text-xs sm:text-sm font-medium shadow-md transition-opacity hover:opacity-90 disabled:opacity-50 border-0 cursor-pointer select-none"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            <span>Transmitting Application...</span>
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            <span>Submit Application</span>
                            <ArrowRight className="size-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </section>
              </main>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersApply;
