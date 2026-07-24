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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
             {secureLogos.map((src, idx) => (
               <div
                 key={src}
                 className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-gray-100 bg-white p-2 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
               >
                 <Image
                   src={src}
                   alt={`Compliance and Membership ${idx + 1}`}
                   fill
                   quality={100}
                   sizes="(max-width: 640px) 80px, 100px"
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

          <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-[1.8] text-black md:text-base">
            Since established in 2012, Integrity Specialists International, Inc. has
            successfully been a stakeholder providing facility and pipeline solutions to
            organizations either direct contract or subcontracted for various sized
            projects, globally.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
             {solutionLogos.map((src, idx) => (
               <div
                 key={src}
                 className="relative h-16 w-16 sm:h-20 sm:w-20 mx-auto rounded-full border border-gray-100 bg-white p-2 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
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
