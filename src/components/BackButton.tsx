import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  to: string;
  label: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ to, label, className = "" }) => {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-sm sm:text-sm font-mono font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 border-0 select-none cursor-pointer ${className}`}
    >
      <ArrowLeft className="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
      <span>{label}</span>
    </Link>
  );
};

export default BackButton;
