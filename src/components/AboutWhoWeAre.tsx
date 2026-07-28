"use client";

import AnimatedSection from "@/components/AnimatedSection";
import VideoBackground from "@/components/VideoBackground";
import ExpandableCard from "@/components/ExpandableCard";
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

const values = [
  "Safety and Environmental Stewardship: Protecting people and the environment is a priority to ISI. We are committed and are responsible to protect the health and safety of people and the environment.",
  "People: Our most valued asset.",
  "Diversity: We value diversity in culture, background, and experience. We provide our employees with the proper training, tools, and methods to make every task successful.",
  "Integrity: Our expectations are set high for our company to build trust and doing right the first time without compromising safety or quality.",
  "Success: Achieve goals and exceed expectations.",
  "Excellence: Be the leader and lead by example with added-value.",
];

const sustainability = {
  title: "Sustainability",
  content:
    "Fundamentals to our sustainability goals is to focus on being a value-added solutions provider, maintaining excellence in the health and safety of our employees and affected stakeholders, in the safety and quality of our work, and in our efforts to protect and preserve the environment as we assist with providing energy industry solutions. ISI remains focused on implementing robust, reliable, safe, and environmentally responsible practices and solutions throughout the global energy industry sectors.",
};

export default function AboutWhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-dark sm:h-[320px] md:h-[360px] lg:h-[400px]">
        <VideoBackground
          src="https://videos.pexels.com/video-files/37151630/15738797_1920_1080_30fps.mp4"
          poster="/images/gas4.webp"
          className="video-bg"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/40 to-dark/50" />
        </VideoBackground>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Who We Are
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white md:text-lg">
            Integrity Specialists International, Inc. was created by a team of industry professionals that know exactly what it takes to do the job right the first time without compromising any aspect of the owners investment. Our management and staff have extensive industry experience tackling some of the world&apos;s largest, most challenging projects providing engineering, project management, and technical solutions supporting the project and asset lifecycle. We are your invested partner providing the highest expectations of safety, quality, a return on investment with proven planning and execution methods.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:items-stretch">
            <AnimatedSection delay={0} className="h-full">
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-4 w-4" />
                  </div>
                  <h4 className="text-lg font-bold text-black">Goal</h4>
                </div>
                <p className="text-sm leading-[1.8] text-black md:text-base">
                  {goalVision[0].content}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                      <Eye className="h-4 w-4" />
                    </div>
                    <h4 className="text-lg font-bold text-black">Vision</h4>
                  </div>
                  <p className="text-sm leading-[1.8] text-black md:text-base line-clamp-2">
                    {goalVision[1].content}
                  </p>
                  <button
                    type="button"
                    onClick={() => {}}
                    className="mt-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1} className="h-full">
              <ExpandableCard
                title="Values"
                content={values.join("\n")}
                icon={<Shield className="h-5 w-5" />}
                iconBg="bg-emerald-50 text-emerald-600"
              />
            </AnimatedSection>

            <AnimatedSection delay={2} className="h-full">
              <ExpandableCard
                title={sustainability.title}
                content={sustainability.content}
                icon={<Leaf className="h-5 w-5" />}
                iconBg="bg-amber-50 text-amber-600"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
