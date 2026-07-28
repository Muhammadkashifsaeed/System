"use client";

import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  iconBg?: string;
}

export default function ExpandableCard({ title, content, icon, iconBg }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
        {icon && (
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 transition-all duration-300 hover:scale-110 hover:rotate-12 ${iconBg || "bg-primary/10 text-primary"}`}>
            {icon}
          </div>
        )}
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="mt-3 text-sm leading-[1.8] text-black md:text-base">
          {content}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
      {expanded && (
        <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm leading-[1.8] text-black md:text-base whitespace-pre-line">
            {content}
          </p>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-3 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Read Less
          </button>
        </div>
      )}
    </div>
  );
}
