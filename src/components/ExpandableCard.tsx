"use client";

import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  iconBg?: string;
}

export default function ExpandableCard({ title, content, icon, iconBg }: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
      {icon && (
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 transition-all duration-300 hover:scale-110 hover:rotate-12 ${iconBg || "bg-primary/10 text-primary"}`}>
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <div id={`expandable-content-${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <p className={`text-sm leading-[1.8] text-black md:text-base ${!open ? "line-clamp-4" : ""}`}>
          {content}
        </p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`expandable-content-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {open ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
