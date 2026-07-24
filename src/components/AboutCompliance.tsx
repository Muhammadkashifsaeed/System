import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const secureLogos = Array.from({ length: 5 }, (_, i) => `/images/secure${i + 1}.webp`);
const solutionLogos = Array.from({ length: 6 }, (_, i) => `/images/solutions${i + 1}.webp`);

export default function AboutCompliance() {
  return (
    <>
      {/* COMPLIANCE & MEMBERSHIP */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            title="Compliance & Membership"
            subtitle="Maintaining the highest standards through ISO certifications and industry memberships."
          />

          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {secureLogos.map((src, idx) => (
              <div
                key={src}
                className="relative h-24 w-36 sm:h-28 sm:w-40"
              >
                <Image
                  src={src}
                  alt={`Compliance and Membership ${idx + 1}`}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 144px, 160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SERVED */}
      <section className="bg-[#F8FAFC] section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            title="Clients Served"
          />

          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-[1.8] text-black md:text-lg">
            Since established in 2012, Integrity Specialists International, Inc. has
            successfully been a stakeholder providing facility and pipeline solutions to
            organizations either direct contract or subcontracted for various sized
            projects, globally.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
            {solutionLogos.map((src, idx) => (
              <div
                key={src}
                className="relative h-24 w-full"
              >
                <Image
                  src={src}
                  alt={`Client solution ${idx + 1}`}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16.667vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
