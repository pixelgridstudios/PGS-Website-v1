import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Globe, ChevronDown, CheckCircle2, ArrowRight, Paperclip, X } from "lucide-react";
import InButtonMailSlot from "@/components/InButtonMailSlot";
import { socialLinks } from "@/data/content";
import { FaInstagram, FaXTwitter, FaLinkedin, FaBehance } from "react-icons/fa6";

const getSocialIcon = (name: string) => {
  switch (name) {
    case "Instagram": return <FaInstagram className="size-4 mr-2 pointer-events-none" />;
    case "X": return <FaXTwitter className="size-4 mr-2 pointer-events-none" />;
    case "LinkedIn": return <FaLinkedin className="size-4 mr-2 pointer-events-none" />;
    case "Behance": return <FaBehance className="size-4 mr-2 pointer-events-none" />;
    default: return null;
  }
};



const projectTypes = [
  "Product Launch Film",
  "Brand Film",
  "3D Visualization",
  "Live Visuals & Stage",
  "Campaign Motion",
];

const budgetRanges = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
];

const timelineRanges = [
  "Immediate (< 2 weeks)",
  "2 - 4 Weeks",
  "1 - 2 Months",
  "2 - 3 Months",
  "Flexible",
];

export const Contact: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Product Launch Film"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$5,000 - $15,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("2 - 4 Weeks");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [legalOpen, setLegalOpen] = useState<boolean>(false);

  // Form Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

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
        <div data-reveal className="flex flex-col gap-2 max-w-3xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-foreground">
            Contact us
          </h1>
          <p className="mt-2 text-base sm:text-lg text-brand-subtle font-normal">
            Tell us about your upcoming launch, timeline, or design brief. We respond to all inquiries within 24 hours.
          </p>
        </div>

        {/* 1. Original Dot4 Split Contact Card (50% Form Left + 50% Studio Clock Right) */}
        <section data-reveal data-reveal-delay="100" className="mt-8 rounded-2xl sm:rounded-3xl bg-brand-muted shadow-xl border-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left (50%): Project Intake Form */}
            <div className="p-8 sm:p-10 lg:p-12 xl:p-14 bg-transparent flex flex-col justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-brand-foreground">
                  Let's Connect!
                </h2>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-brand-bg p-8 sm:p-10 text-brand-foreground animate-in fade-in zoom-in-95 duration-300 border border-brand-foreground/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400">
                      <CheckCircle2 className="size-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-brand-foreground">
                        Brief Sealed
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-medium mt-1">
                        Successfully Dispatched
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-brand-subtle leading-relaxed">
                    Thank you, <strong className="text-brand-foreground font-semibold">{firstName || "there"}</strong>. Your project brief has been sealed and delivered directly to Subhanshu Gajbhiye's studio desk. We will review your requirements and respond within 24 hours.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-brand-foreground/5 border border-brand-foreground/10 font-mono text-xs text-brand-subtle space-y-1">
                    <div><strong className="text-brand-foreground">Direct Recipient:</strong> Subhanshu Gajbhiye (Creative Director)</div>
                    <div><strong className="text-brand-foreground">Studio Desk:</strong> hello@pixelgridstudios.com</div>
                    <div><strong className="text-brand-foreground">Selected Service:</strong> {selectedTypes.join(", ")}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFirstName("");
                      setLastName("");
                      setEmail("");
                      setBrief("");
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-foreground/20 px-6 py-2.5 text-xs font-medium text-brand-foreground hover:bg-brand-foreground hover:text-brand-bg transition-colors cursor-pointer"
                  >
                    <span>&larr; Send another inquiry</span>
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="font-mono text-xs sm:text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
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
                      <label className="font-mono text-xs sm:text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
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
                    <label className="font-mono text-xs sm:text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
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
                    <label className="font-mono text-xs sm:text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
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
                            className={`rounded-full px-4 py-2 font-mono text-xs font-medium transition-colors duration-150 cursor-pointer select-none border-0 ${
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
                    <label className="font-mono text-xs sm:text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
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
                            className={`rounded-full px-4 py-2 font-mono text-xs font-medium transition-colors duration-150 cursor-pointer select-none border-0 ${
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
                    <label className="font-mono text-xs sm:text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
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
                            className={`rounded-full px-4 py-2 font-mono text-xs font-medium transition-colors duration-150 cursor-pointer select-none border-0 ${
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
                    <label className="font-mono text-xs sm:text-xs uppercase tracking-wider text-brand-subtle font-semibold block mb-2 whitespace-nowrap">
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

                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {attachedFiles.map((file, idx) => (
                          <div key={`${file.name}-${idx}`} className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium shadow-sm transition-all select-none border-0 bg-brand-foreground text-brand-bg ring-1 ring-brand-foreground">
                            <Paperclip className="size-3.5 shrink-0" />
                            <span className="truncate max-w-[120px] sm:max-w-[150px]">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => setAttachedFiles(prev => prev.filter((_, i) => i !== idx))}
                              className="ml-0.5 rounded-full p-0.5 hover:bg-brand-bg/20 text-brand-bg transition-colors cursor-pointer"
                              aria-label={`Remove ${file.name}`}
                            >
                              <X className="size-3" />
                            </button>
                          </div>
                        ))}

                        <div className="relative inline-flex">
                          <input
                            type="file"
                            id="file-upload"
                            multiple
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            onChange={(e) => {
                              if (e.target.files) {
                                const newFiles = Array.from(e.target.files);
                                setAttachedFiles((prev) => [...prev, ...newFiles]);
                              }
                              e.target.value = '';
                            }}
                          />
                          <label
                            htmlFor="file-upload"
                            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium shadow-sm transition-all cursor-pointer select-none border-0 bg-brand-bg text-brand-foreground ring-1 ring-brand-foreground/10 hover:ring-brand-foreground/30"
                          >
                            <Paperclip className="size-4 shrink-0" />
                            <span className="truncate max-w-[150px] sm:max-w-[200px]">
                              {attachedFiles.length > 0 ? "Add More" : "Attach Files (Max 50MB)"}
                            </span>
                          </label>
                        </div>
                      </div>
                      <span className="text-xs text-brand-subtle">
                        For larger files, please share a <a href="https://wetransfer.com/" target="_blank" rel="noreferrer" className="underline hover:text-brand-foreground transition-colors">WeTransfer</a> or <a href="https://drive.google.com/" target="_blank" rel="noreferrer" className="underline hover:text-brand-foreground transition-colors">Drive</a> link in the brief above.
                      </span>
                    </div>
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
            <div className="relative flex min-h-[300px] lg:min-h-full flex-col items-center justify-center bg-transparent p-8 sm:p-10 lg:p-12 xl:p-14 text-brand-foreground border-0">
              <div className="flex flex-col items-center justify-center select-none space-y-4">
                <div className="flex items-baseline gap-1.5 sm:gap-2.5">
                  <div className="flex items-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight tabular-nums text-brand-foreground leading-none">
                    <span>{hours}</span>
                    <span className={`mx-0.5 relative -top-[0.08em] transition-opacity duration-150 ${colonVisible ? "opacity-100" : "opacity-25"}`}>
                      :
                    </span>
                    <span>{minutes}</span>
                  </div>
                  <span className="font-mono text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-500 dark:text-emerald-400 tabular-nums">
                    <span className="relative -top-[0.08em] mr-0.5">:</span>{seconds}
                  </span>
                </div>

                <div className="font-mono text-xs sm:text-sm text-brand-subtle tracking-wider text-center">
                  {dateString}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Info Cards (General Inquiries + Social Networks Placed BELOW the form) */}
        <div data-reveal data-reveal-delay="150" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <div className="flex items-center gap-4 rounded-2xl bg-brand-muted/70 p-5 backdrop-blur-sm shadow-xs border-0">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground">
              <Mail className="size-4" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium">
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
              <span className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium">
                Social Networks
              </span>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center rounded-full bg-brand-bg px-4 py-2 font-mono text-xs font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-200 shadow-xs border-0"
                  >
                    {getSocialIcon(s.name)}
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* 3. Studio & Legal Notice Accordion */}
        <section data-reveal data-reveal-delay="200" className="w-full">
          <button
            type="button"
            onClick={() => setLegalOpen(!legalOpen)}
            className="flex w-full items-center justify-between rounded-xl bg-brand-muted/70 p-5 text-left transition-colors hover:bg-brand-muted cursor-pointer border-0"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-brand-foreground">
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
                <div className="flex flex-col gap-2.5 mt-2 max-w-md">
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                    <span className="text-xs text-brand-subtle">Studio</span>
                    <span className="text-xs font-medium text-brand-foreground">Pixel Grid Studios</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                    <span className="text-xs text-brand-subtle">Founder / CD</span>
                    <span className="text-xs font-medium text-brand-foreground">Subhanshu Gajbhiye</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                    <span className="text-xs text-brand-subtle">Base</span>
                    <span className="text-xs font-medium text-brand-foreground">Pune, Maharashtra, India</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                    <span className="text-xs text-brand-subtle">Capabilities</span>
                    <span className="text-xs font-medium text-brand-foreground">Pan-India &amp; Global Remote</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                    <span className="text-xs text-brand-subtle">Direct Contact</span>
                    <a href="mailto:subhanshu@pixelgridstudios.com" className="text-xs font-medium text-brand-foreground hover:opacity-70 transition-opacity">subhanshu@pixelgridstudios.com</a>
                  </div>
                </div>
                {/* Direct Preview Links */}
                <div className="mt-5 pt-4 border-t border-brand-foreground/10 flex flex-wrap items-center gap-3">
                  <Link
                    to="/privacy-policy"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-xs font-mono font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors border-0"
                  >
                    <span>View Privacy Policy</span>
                    <ArrowRight className="size-3" />
                  </Link>

                  <Link
                    to="/terms-conditions"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-xs font-mono font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors border-0"
                  >
                    <span>View Terms &amp; Conditions</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
