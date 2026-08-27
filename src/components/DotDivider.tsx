import React from "react";

interface DotDividerProps {
  className?: string;
}

export const DotDivider: React.FC<DotDividerProps> = ({ className = "my-6 sm:my-8" }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative flex w-full items-center">
        {/* Left Terminal Dot */}
        <span className="size-1 rounded-full bg-black/25 dark:bg-neutral-600 shrink-0" />
        {/* Subtle Matte Grey Divider Line (Zero white glare in dark mode) */}
        <div className="h-[1px] w-full bg-black/10 dark:bg-neutral-800" />
        {/* Right Terminal Dot */}
        <span className="size-1 rounded-full bg-black/25 dark:bg-neutral-600 shrink-0" />
      </div>
    </div>
  );
};

export default DotDivider;