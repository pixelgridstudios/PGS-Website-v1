import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  Globe,
  ChevronDown
} from "lucide-react";
import DotDivider from "@/components/DotDivider";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import InButtonMailSlot from "@/components/InButtonMailSlot";

const socials = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "X", href: "https://x.com" },
  { name: "Vimeo", href: "https://vimeo.com" },
  { name: "Behance", href: "https://behance.net" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

const projectTypes = [
  "Product Launch Film",
  "Brand Film",
  "3D Visualization",
  "Live Visuals & Stage",
  "Campaign Motion",
];

const budgetRanges = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
];

const timelineRanges = [
  "Immediate (< 2 weeks)",
  "2 – 4 Weeks",
  "1 – 2 Months",
  "2 – 3 Months",
  "Flexible",
];

export const Contact: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Product Launch Film"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$5,000 – $15,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("2 – 4 Weeks");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [legalOpen, setLegalOpen] = useState<boolean>(false);

  // Form Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  // Live Pune / India Standard Time Master Studio Timepiece
  const [timeString, setTimeString] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("00");
  const [colonVisible, setColonVisible] = useState<boolean>(true);
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeOpts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const dateOpts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        month: "short",
        day: "numeric",
      };

      const formattedTime = new Intl.DateTimeFormat([], timeOpts).format(now);
      const formattedDate = new Intl.DateTimeFormat([], dateOpts).format(now);
      const parts = formattedTime.split(":");

      setTimeString(`${parts[0]}:${parts[1]}`);
      setSeconds(parts[2] || "00");
      setDateString(formattedDate);
      setColonVisible((prev) => !prev);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // Form Validation & Trigger
  const handleValidate = (): boolean => {
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();
      return false;
    }
    return true;
  };

  const handleComplete = () => {
    setSubmitted(true);
  };

  const hours = timeString.split(":")[0] || "16";
  const minutes = timeString.split(":")[1] || "45";

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] pt-8 sm:pt-12 pb-2 sm:pb-3">
        {/* Top Title */}
        {/* Top Title */}
        <div className="flex flex-col gap-2 max-w-3xl">
          <TextReveal
            text="Contact us"
            className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-brand-foreground"
          />
          <FadeIn delay={0.2} direction="up" className="mt-2 text-base sm:text-lg text-brand-subtle font-normal">
            Tell us about your upcoming launch, timeline, or design brief.
          </FadeIn>
        </div>

        {/* 1. Original Dot4 Split Contact Card (50% Form Left + 50% Studio Clock Right) */}
        <FadeIn delay={0.2} fullWidth className="mt-8 rounded-2xl sm:rounded-3xl bg-brand-muted shadow-xl border-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left (50%): Project Intake Form */}
            <div className="p-8 sm:p-10 lg:p-12 xl:p-14 bg-brand-bg/95 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight sm:text-4xl text-brand-foreground">
                  Let's Connect!
                </h2>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-brand-panel p-8 sm:p-10 text-brand-panel-foreground animate-in fade-in zoom-in-95 duration-300 border-0 shadow-lg space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                      <CheckCircle2 className="size-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl font-bold">Brief Received!</h3>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base text-brand-panel-foreground/85 leading-relaxed space-y-1">
                    <p>
                      Thank you, <strong className="text-white font-semibold">{firstName || "there"}</strong>. Your project brief has been received.
                    </p>
                    <p>
                      We will review your requirements and get back to you shortly.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-brand-panel-foreground/5 border border-brand-panel-foreground/10 space-y-3 font-mono text-sm text-brand-panel-foreground/85">
                    <span className="font-semibold text-brand-panel-foreground block">
                      For any further inquiries reach out directly:
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-1">
                      <a
                        href="mailto:hello@pixelgridstudios.com"
                        className="inline-flex items-center gap-2 text-brand-panel-foreground hover:text-white hover:underline transition-colors"
                      >
                        <Mail className="size-3.5 text-emerald-400 shrink-0" />
                        <span>hello@pixelgridstudios.com</span>
                      </a>
                      <a
                        href="tel:+918208161192"
                        className="inline-flex items-center gap-2 text-brand-panel-foreground hover:text-white hover:underline transition-colors"
                      >
                        <Phone className="size-3.5 text-emerald-400 shrink-0" />
                        <span>+91 82081 61192</span>
                      </a>
                    </div>
                    {selectedTypes.length > 0 && (
                      <div className="pt-3 border-t border-brand-panel-foreground/10 text-sm text-brand-panel-foreground/70">
                        <strong className="text-brand-panel-foreground/90">Selected Services:</strong> {selectedTypes.join(", ")}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setBrief("");
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-panel-foreground/30 px-6 py-2.5 text-sm font-medium text-brand-panel-foreground hover:bg-brand-panel-foreground hover:text-brand-panel transition-colors cursor-pointer"
                    >
                      <span>← Send another inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="font-mono text-sm sm:text-base uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Maya"
                        className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 focus:outline-none ring-1 ring-brand-foreground/10 focus:ring-brand-foreground"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-sm sm:text-base uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Lin"
                        className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 focus:outline-none ring-1 ring-brand-foreground/10 focus:ring-brand-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-sm sm:text-base uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maya@brand.com"
                      className="w-full rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 focus:outline-none ring-1 ring-brand-foreground/10 focus:ring-brand-foreground"
                    />
                  </div>

                  {/* Target Timeline */}
                  <div>
                    <label className="font-mono text-sm sm:text-base uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
                      Target Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timelineRanges.map((t) => {
                        const isSelected = selectedTimeline === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTimeline(t)}
                            className={`rounded-full px-4 py-2 font-mono text-sm font-medium transition-colors duration-150 cursor-pointer select-none border-0 ${
                              isSelected
                                ? "bg-brand-foreground text-brand-bg font-semibold"
                                : "bg-brand-bg text-brand-subtle hover:text-brand-foreground"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Type (Strictly Single Line for Laptops & Desktops) */}
                  <div>
                    <label className="font-mono text-sm sm:text-base uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
                      Project Type (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = selectedTypes.includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleType(type)}
                            className={`rounded-full px-4 py-2 font-mono text-sm font-medium transition-colors duration-150 cursor-pointer select-none border-0 ${
                              isSelected
                                ? "bg-brand-foreground text-brand-bg font-semibold"
                                : "bg-brand-bg text-brand-subtle hover:text-brand-foreground"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Target Budget Range */}
                  <div>
                    <label className="font-mono text-sm sm:text-base uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
                      Target Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => {
                        const isSelected = selectedBudget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`rounded-full px-4 py-2 font-mono text-sm font-medium transition-colors duration-150 cursor-pointer select-none border-0 ${
                              isSelected
                                ? "bg-brand-foreground text-brand-bg font-semibold"
                                : "bg-brand-bg text-brand-subtle hover:text-brand-foreground"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-sm sm:text-base uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
                      Project Brief &amp; Scope *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="Tell us about the project goals, deliverables, and target timeline..."
                      className="w-full resize-none rounded-xl bg-brand-bg px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-subtle/50 focus:outline-none ring-1 ring-brand-foreground/10 focus:ring-brand-foreground"
                    />
                  </div>

                  {/* Primary Tactile In-Button Mail Slot Dispatch Button */}
                  <div className="pt-2">
                    <InButtonMailSlot
                      onTrigger={handleValidate}
                      onComplete={handleComplete}
                    />
                  </div>
                </form>
              )}
            </div>

            {/* Right (50%): Studio Clock */}
            <div className="relative flex min-h-[320px] lg:min-h-full flex-col items-center justify-center bg-brand-panel p-8 sm:p-10 lg:p-12 xl:p-14 text-brand-panel-foreground border-0 select-none">
              <div className="text-center space-y-3">
                <div className="flex items-baseline justify-center gap-1.5 sm:gap-2.5">
                  <div className="text-6xl lg:text-8xl xl:text-8xl font-display font-bold tracking-tight tabular-nums text-brand-panel-foreground leading-none">
                    <span>{hours}</span>
                    <span className={`mx-0.5 transition-opacity duration-150 ${colonVisible ? "opacity-100" : "opacity-25"}`}>
                      :
                    </span>
                    <span>{minutes}</span>
                  </div>
                  <span className="font-mono text-lg sm:text-2xl lg:text-2xl font-semibold text-emerald-400 tabular-nums">
                    :{seconds}
                  </span>
                </div>

                <div className="font-mono text-sm sm:text-base text-brand-panel-foreground/60 tracking-wider">
                  {dateString}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2. Info Cards (General Inquiries + Social Networks Placed BELOW the form) */}
        <FadeIn delay={0.25} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <div className="flex items-center gap-4 rounded-2xl bg-brand-muted/70 p-5 backdrop-blur-sm shadow-xs border-0">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground">
              <Mail className="size-4" />
            </div>
            <div>
              <span className="font-mono text-sm uppercase tracking-wider text-brand-subtle font-medium">
                General Inquiries
              </span>
              <a
                href="mailto:hello@pixelgridstudios.com"
                className="block font-display text-base sm:text-lg font-semibold text-brand-foreground hover:opacity-75 transition-opacity"
              >
                hello@pixelgridstudios.com
              </a>
            </div>
          </div>

          {/* Socials Card */}
          <div className="flex items-center gap-4 rounded-2xl bg-brand-muted/70 p-5 backdrop-blur-sm sm:col-span-1 lg:col-span-2 shadow-xs border-0">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground">
              <Globe className="size-4" />
            </div>
            <div className="flex-1">
              <span className="font-mono text-sm uppercase tracking-wider text-brand-subtle font-medium">
                Social Networks
              </span>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-neutral-200 dark:bg-neutral-800 px-3.5 py-1 font-mono text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border-0 select-none shadow-2xs"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <DotDivider className="my-6 sm:my-8" />

        {/* 3. Studio & Legal Notice Accordion */}
        <FadeIn delay={0.3} fullWidth className="w-full">
          <button
            type="button"
            onClick={() => setLegalOpen(!legalOpen)}
            className="flex w-full items-center justify-between rounded-xl bg-brand-muted/70 p-5 text-left transition-colors hover:bg-brand-muted cursor-pointer border-0"
          >
            <span className="font-mono text-sm uppercase tracking-[0.2em] font-semibold text-brand-foreground">
              Studio &amp; Legal Notice
            </span>
            <ChevronDown
              className={`size-4 text-brand-subtle ${
                legalOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
              legalOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="rounded-xl bg-brand-bg p-6 text-sm text-brand-subtle border-0">
                <ul className="space-y-2 font-mono text-sm">
                  <li><strong className="text-brand-foreground font-semibold">Studio:</strong> Pixel Grid Studios</li>
                  <li><strong className="text-brand-foreground font-semibold">Founder / CD:</strong> Subhanshu Gajbhiye</li>
                  <li><strong className="text-brand-foreground font-semibold">Direct Contact:</strong> <a href="mailto:hello@pixelgridstudios.com" className="hover:underline hover:text-brand-foreground transition-colors">hello@pixelgridstudios.com</a></li>
                  <li><strong className="text-brand-foreground font-semibold">Legal:</strong> <a href="mailto:legal@pixelgridstudios.com" className="hover:underline hover:text-brand-foreground transition-colors">legal@pixelgridstudios.com</a></li>
                </ul>

                {/* Direct Preview Links */}
                <div className="mt-5 pt-4 border-t border-brand-foreground/10 flex flex-wrap items-center gap-3">
                  <Link
                    to="/privacy-policy"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-sm font-mono font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors border-0"
                  >
                    <span>View Privacy Policy</span>
                    <ArrowRight className="size-3" />
                  </Link>

                  <Link
                    to="/terms-conditions"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-sm font-mono font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors border-0"
                  >
                    <span>View Terms &amp; Conditions</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
