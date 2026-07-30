import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const secureLogos = Array.from({ length: 18 }, (_, i) => `/images/secure${i + 1}.webp`);
const solutionLogos = Array.from({ length: 20 }, (_, i) => `/images/solutions${i + 1}.webp`);

export default function AboutCompliance() {
  return (
    <>
      {/* COMPLIANCE & MEMBERSHIP */}
      <section className="bg-white section-padding overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            title="Compliance & Membership"
            subtitle="Maintaining the highest standards through ISO certifications and industry memberships."
          />

          <div className="relative mt-8">
            <div className="flex overflow-hidden">
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...secureLogos, ...secureLogos].map((src, idx) => (
                  <div
                    key={src + idx}
                    className="flex aspect-square w-48 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <Image
                      src={src}
                      alt={`Certification and membership logo ${idx + 1}`}
                      width={192}
                      height={192}
                      quality={100}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SERVED */}
      <section className="bg-[#F8FAFC] section-padding overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            title="Clients Served"
          />

          <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-[1.8] text-black md:text-base">
            Since established in 2012, Integrity Specialists International, Inc. has
            successfully been a stakeholder providing facility and pipeline solutions to
            organizations either direct contract or subcontracted for various sized
            projects, globally.
          </p>

          <div className="relative mt-10">
            <div className="flex overflow-hidden">
              <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
                {[...solutionLogos, ...solutionLogos].map((src, idx) => (
                  <div
                    key={src + idx}
                    className="flex aspect-square w-48 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <Image
                      src={src}
                      alt={`Client logo ${idx + 1}`}
                      width={192}
                      height={192}
                      quality={100}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
