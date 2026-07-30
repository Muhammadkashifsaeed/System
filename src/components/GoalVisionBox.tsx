"use client";

import { useState } from "react";
import { Target, Eye } from "lucide-react";

const goalVision = [
  {
    title: "Goal",
    content:
      "Our goal is to remain as a value-added, respected, first in choice energy industry solutions provider. Respect and success will be measured by the satisfaction of our employees, clients, and stakeholders.",
  },
  {
    title: "Vision",
    content:
      "To be a place where our employees look forward to working each day, first choice for new and existing clients, and growth and transition with the energy industry sectors.",
  },
];

export default function GoalVisionBox() {
  const [open, setOpen] = useState(false);

  return (
     <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Target className="h-4 w-4" />
        </div>
        <h4 className="text-lg font-bold text-black">Goal & Vision</h4>
      </div>
      <div id="goal-vision-content" className={`${!open ? "line-clamp-4" : ""}`}>
        <p className="text-sm leading-[1.8] text-black md:text-base">
          {goalVision[0].content}
        </p>
        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <Eye className="h-4 w-4" />
            </div>
            <h4 className="text-lg font-bold text-black">Vision</h4>
          </div>
          <p className="text-sm leading-[1.8] text-black md:text-base">
            {goalVision[1].content}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="goal-vision-content"
        className="mt-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        {open ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
