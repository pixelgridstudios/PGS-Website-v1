import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-brand-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold tracking-tight text-brand-foreground">
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-brand-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-brand-subtle">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-medium text-brand-accent-foreground transition-opacity hover:opacity-85"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};
