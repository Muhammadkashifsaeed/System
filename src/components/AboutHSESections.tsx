import Image from "next/image";

function PremiumCorporateImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="group relative mx-auto max-w-2xl">
      <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-br from-white via-gray-50 to-white" aria-hidden="true" />
      <div className="absolute -inset-1 rounded-[28px] border border-primary/10 bg-white/40 backdrop-blur-sm" aria-hidden="true" />

      <div className="absolute -top-5 -right-5 h-24 w-24 transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" className="h-full w-full text-primary">
          <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" opacity="0.18" />
        </svg>
      </div>

      <div className="absolute top-2 right-2 h-16 w-16 opacity-[0.05]" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="h-full w-full text-primary">
          {Array.from({ length: 16 }).map((_, i) => {
            const x = (i % 4) * 25 + 12.5;
            const y = Math.floor(i / 4) * 25 + 12.5;
            return <circle key={i} cx={x} cy={y} r="1.5" fill="currentColor" />;
          })}
        </svg>
      </div>

      <div className="absolute -bottom-4 -left-4 h-20 w-20 transition-transform duration-500 ease-out group-hover:translate-x-[-6px] group-hover:translate-y-[6px]" aria-hidden="true">
        <svg viewBox="0 0 80 80" fill="none" className="h-full w-full text-primary">
          <path d="M10 70 L40 40 L70 70 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
        </svg>
      </div>

      <div className="absolute -bottom-3 left-6 right-6 h-5 rounded-[20px] bg-primary/5 blur-md transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:blur-lg group-hover:h-6" aria-hidden="true" />

      <div className="absolute -bottom-2 left-10 opacity-[0.05]" aria-hidden="true">
        <svg viewBox="0 0 80 80" className="h-16 w-16 text-primary">
          {Array.from({ length: 9 }).map((_, i) => {
            const x = (i % 3) * 30 + 15;
            const y = Math.floor(i / 3) * 30 + 15;
            return <circle key={i} cx={x} cy={y} r="1.5" fill="currentColor" />;
          })}
        </svg>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-xl ring-1 ring-black/5 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:ring-primary/10">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={100}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function AboutHSESections() {
  return (
    <>
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black md:text-2xl lg:text-3xl">
                  HEALTH, SAFETY, and ENVIRONMENTAL (HSE)
                </h3>
                <p className="mt-3 text-sm font-semibold text-black md:text-base">
                  Our Obligation to Health, Safety, and Environmental (HSE)
                </p>
                <div className="mt-5 space-y-4">
                  <p className="text-sm leading-[1.8] text-black md:text-base">
                    Our Health, Safety, and Environmental programs are engineered, along with the safety culture that is developed into each of our employees to maintain a work site without accidents and incidents and to exceed the expectations of our clients. Our S.A.F.E Program provides the proper tools and procedures to implement in the planning and execution phases of our scopes of work that are the key to a safe and successful work environment for all stakeholders on a project site.
                  </p>
                  <p className="text-sm leading-[1.8] text-black md:text-base">
                    Integrity Specialists International Inc. uses proper training, detailed Pre-Job Risk Analysis, Job Safety Analysis, Behavioral Based Observation, and Incident Prevention Programs that assist with identifying risk to plan and execute a safe, more productive work environment for the safety of everyone that can be affect by our work. ISI is dedicated and in compliant with ISO 14001 and ISO / OHSAS 18001 and 45001 which is our obligation to perform the safest methods and to protect the environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <PremiumCorporateImage src="/images/Program.webp" alt="HSE Program" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="flex justify-center">
              <PremiumCorporateImage src="/images/safety.webp" alt="Quality" />
            </div>
            <div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black md:text-2xl lg:text-3xl">
                  QUALITY
                </h3>
                <p className="mt-3 text-sm font-semibold text-black md:text-base">
                  Our Obligation to Quality
                </p>
                <div className="mt-5 space-y-4">
                  <p className="text-sm leading-[1.8] text-black md:text-base">
                    At Integrity Specialists International, Inc., the Quality Management System (QMS) starts with our management team commitment knowing and following our policies and processes and employing only the best fit for site specific, most-qualified resources to ensure every project is completed to the highest safety and quality standards. Our value-added processes and procedures ensure not only the highest safety and quality standards are met but also the client satisfactory of our solutions provided to a project. Our quality driven resources and planning and execution processes, procedures, and methods are proven to provide a quicker return on investment (RoI). ISI is dedicated and compliant with ISO 9001:2015 which is our obligation to perform the best of quality and doing the job right the first time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
